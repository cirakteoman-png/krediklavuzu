-- ─────────────────────────────────────────
-- KrediKlavuzu — Veritabanı Şeması
-- Supabase SQL Editor'da sırayla çalıştır
-- ─────────────────────────────────────────

-- BANKS
create table if not exists banks (
  id          text primary key,
  name        text not null,
  short_name  text not null,
  color       text not null default '#16a34a',
  type        text not null check (type in ('devlet','ozel','katilim')),
  logo_url    text,
  website     text,
  created_at  timestamptz default now()
);

-- İHTİYAÇ KREDİSİ
create table if not exists ihtiyac_kredisi (
  id          bigint generated always as identity primary key,
  bank_id     text not null references banks(id) on delete cascade,
  aylik_faiz  numeric(5,2) not null,
  yillik_faiz numeric(5,2) not null,
  onay_suresi text not null default 'Anında',
  rating      numeric(3,1) not null default 4.0,
  min_tutar   integer not null default 5000,
  max_tutar   integer not null default 500000,
  max_vade    integer not null default 60,
  badge       text check (badge in ('best','low','new')),
  aktif       boolean not null default true,
  guncelleme  timestamptz default now()
);

-- KONUT KREDİSİ
create table if not exists konut_kredisi (
  id          bigint generated always as identity primary key,
  bank_id     text not null references banks(id) on delete cascade,
  aylik_faiz  numeric(5,2) not null,
  yillik_faiz numeric(5,2) not null,
  onay_suresi text not null default '2 iş günü',
  rating      numeric(3,1) not null default 4.0,
  min_tutar   integer not null default 100000,
  max_tutar   integer not null default 10000000,
  max_vade    integer not null default 240,
  badge       text check (badge in ('best','low','new')),
  aktif       boolean not null default true,
  guncelleme  timestamptz default now()
);

-- MEVDUAT
create table if not exists mevduat (
  id          bigint generated always as identity primary key,
  bank_id     text not null references banks(id) on delete cascade,
  vade        integer not null check (vade in (1,3,6,12)),
  yillik_faiz numeric(5,2) not null,
  min_tutar   integer not null default 1000,
  badge       text check (badge in ('best','low','new')),
  aktif       boolean not null default true,
  guncelleme  timestamptz default now()
);

-- KREDİ KARTLARI
create table if not exists kredi_kartlari (
  id          text primary key,
  bank_id     text not null references banks(id) on delete cascade,
  name        text not null,
  puan_tipi   text not null,
  puan_orani  text not null,
  aidat       integer,
  max_limit   integer not null default 30000,
  rating      numeric(3,1) not null default 4.0,
  badge       text check (badge in ('best','low','new')),
  avantajlar  text[] default '{}',
  aktif       boolean not null default true,
  guncelleme  timestamptz default now()
);

-- Otomatik guncelleme trigger
create or replace function set_guncelleme()
returns trigger language plpgsql as $$
begin new.guncelleme = now(); return new; end;
$$;

create or replace trigger trg_ihtiyac_kredisi
  before update on ihtiyac_kredisi for each row execute function set_guncelleme();
create or replace trigger trg_konut_kredisi
  before update on konut_kredisi  for each row execute function set_guncelleme();
create or replace trigger trg_mevduat
  before update on mevduat        for each row execute function set_guncelleme();
create or replace trigger trg_kredi_kartlari
  before update on kredi_kartlari for each row execute function set_guncelleme();
