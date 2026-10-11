-- Launch Check · Datenbankstruktur ohne Inhalte
-- Liest nur Systemtabellen: Regeln, Rechte, Buckets,
-- Funktionen und Trigger. Keine Zeile aus deinen
-- Tabellen, keine Daten deiner Nutzer.

select 'tabelle' as bereich,
       schemaname || '.' || tablename as objekt,
       case when rowsecurity then 'RLS an'
            else 'RLS AUS' end as details
from pg_tables
where schemaname in ('public', 'storage')

union all
select 'regel',
       schemaname || '.' || tablename
         || ' · ' || policyname,
       cmd || ' für ' || array_to_string(roles, ', ')
         || ' · using: ' || coalesce(qual, '–')
         || ' · check: ' || coalesce(with_check, '–')
from pg_policies
where schemaname in ('public', 'storage')

union all
select 'bucket',
       name,
       case when public then 'öffentlich'
            else 'privat' end
from storage.buckets

union all
select 'recht',
       table_schema || '.' || table_name,
       grantee || ': ' || string_agg(privilege_type, ', '
         order by privilege_type)
from information_schema.role_table_grants
where grantee in ('anon', 'authenticated')
  and table_schema = 'public'
group by table_schema, table_name, grantee

union all
select 'view',
       n.nspname || '.' || c.relname,
       case when c.relkind = 'm' then 'materialized view'
            else coalesce(array_to_string(c.reloptions, ', '),
                          'ohne security_invoker') end
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind in ('v', 'm')

union all
select 'funktion',
       n.nspname || '.' || p.proname,
       case when p.prosecdef then 'SECURITY DEFINER'
            else 'SECURITY INVOKER' end
         || chr(10) || pg_get_functiondef(p.oid)
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public' and p.prokind = 'f'
  -- ohne Funktionen von Extensions wie pgvector
  and not exists (
    select 1 from pg_depend d
    where d.objid = p.oid and d.deptype = 'e')

union all
select 'trigger',
       n.nspname || '.' || c.relname || ' · ' || t.tgname,
       pg_get_triggerdef(t.oid)
from pg_trigger t
join pg_class c on c.oid = t.tgrelid
join pg_namespace n on n.oid = c.relnamespace
where not t.tgisinternal
  and n.nspname in ('public', 'auth')

order by 1, 2;
