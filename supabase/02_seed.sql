-- ─────────────────────────────────────────
-- KrediKlavuzu — Seed Verisi
-- 01_schema.sql'den sonra çalıştır
-- ─────────────────────────────────────────

-- BANKS
insert into banks (id, name, short_name, color, type, website) values
  ('ziraat',    'Ziraat Bankası',  'ZR', '#C8102E', 'devlet', 'https://www.ziraatbank.com.tr'),
  ('halkbank',  'Halkbank',        'HB', '#1B5E20', 'devlet', 'https://www.halkbank.com.tr'),
  ('vakifbank', 'VakıfBank',       'VK', '#1565C0', 'devlet', 'https://www.vakifbank.com.tr'),
  ('garanti',   'Garanti BBVA',    'GB', '#005F9E', 'ozel',   'https://www.garantibbva.com.tr'),
  ('yapikrdi',  'Yapı Kredi',      'YK', '#E31E24', 'ozel',   'https://www.yapikredi.com.tr'),
  ('akbank',    'Akbank',          'AK', '#004B8F', 'ozel',   'https://www.akbank.com'),
  ('isbank',    'İş Bankası',      'IB', '#1B5E20', 'ozel',   'https://www.isbank.com.tr'),
  ('qnb',       'QNB Finansbank',  'FN', '#FF6900', 'ozel',   'https://www.qnbfinansbank.com'),
  ('denizbank', 'Denizbank',       'DB', '#E65100', 'ozel',   'https://www.denizbank.com'),
  ('teb',       'TEB',             'TB', '#003087', 'ozel',   'https://www.teb.com.tr'),
  ('icbc',      'ICBC Turkey',     'IC', '#F57C00', 'ozel',   'https://www.icbcturkey.com.tr'),
  ('ing',       'ING Bank',        'IN', '#FF6200', 'ozel',   'https://www.ing.com.tr')
on conflict (id) do nothing;

-- İHTİYAÇ KREDİSİ
insert into ihtiyac_kredisi (bank_id, aylik_faiz, yillik_faiz, onay_suresi, rating, min_tutar, max_tutar, max_vade, badge) values
  ('ziraat',    3.49, 41.88, 'Anında',    4.6, 5000,  500000, 60, 'best'),
  ('halkbank',  3.59, 43.08, 'Anında',    4.1, 5000,  400000, 60, null),
  ('garanti',   3.65, 43.80, '2 dk',      4.8, 10000, 750000, 60, null),
  ('vakifbank', 3.69, 44.28, '1 iş günü', 4.0, 5000,  400000, 60, null),
  ('yapikrdi',  3.75, 45.00, '5 dk',      4.5, 10000, 600000, 60, null),
  ('akbank',    3.89, 46.68, 'Anında',    4.3, 10000, 500000, 48, null),
  ('qnb',       3.99, 47.88, '4 saat',    3.7, 5000,  300000, 48, null),
  ('isbank',    4.05, 48.60, 'Anında',    4.9, 10000, 600000, 60, null),
  ('denizbank', 4.15, 49.80, '1 iş günü', 3.8, 5000,  400000, 48, null),
  ('teb',       4.25, 51.00, '2 iş günü', 3.5, 5000,  300000, 36, null);

-- KONUT KREDİSİ
insert into konut_kredisi (bank_id, aylik_faiz, yillik_faiz, onay_suresi, rating, min_tutar, max_tutar, max_vade, badge) values
  ('halkbank',  2.79, 33.48, 'Anında',    4.2, 100000, 10000000, 240, 'best'),
  ('vakifbank', 2.85, 34.20, 'Anında',    4.0, 100000,  8000000, 240, null),
  ('ziraat',    2.89, 34.68, 'Anında',    4.5, 100000, 10000000, 240, null),
  ('denizbank', 2.95, 35.40, '3 iş günü', 3.8, 200000,  6000000, 180, null),
  ('garanti',   2.99, 35.88, '2 iş günü', 4.6, 200000,  8000000, 240, null),
  ('akbank',    3.05, 36.60, '2 iş günü', 4.3, 200000,  7000000, 240, null),
  ('yapikrdi',  3.09, 37.08, '3 iş günü', 4.1, 200000,  7000000, 240, null),
  ('isbank',    3.15, 37.80, '2 iş günü', 4.7, 200000,  8000000, 240, null);

-- MEVDUAT (3 ay)
insert into mevduat (bank_id, vade, yillik_faiz, min_tutar, badge) values
  ('icbc',      3, 58.00, 500000, 'best'),
  ('denizbank', 3, 55.50, 100000, null),
  ('qnb',       3, 54.00,  50000, null),
  ('isbank',    3, 52.00,  10000, null),
  ('garanti',   3, 51.50,  10000, null),
  ('akbank',    3, 50.75,  10000, null),
  ('yapikrdi',  3, 50.00,  10000, null),
  ('ziraat',    3, 49.50,   1000, null),
  ('halkbank',  3, 49.00,   1000, null),
  ('vakifbank', 3, 48.75,   1000, null);

-- MEVDUAT (1 ay)
insert into mevduat (bank_id, vade, yillik_faiz, min_tutar, badge) values
  ('icbc',      1, 52.00, 500000, 'best'),
  ('denizbank', 1, 50.00, 100000, null),
  ('qnb',       1, 48.50,  50000, null),
  ('isbank',    1, 47.00,  10000, null),
  ('garanti',   1, 46.00,  10000, null);

-- MEVDUAT (6 ay)
insert into mevduat (bank_id, vade, yillik_faiz, min_tutar, badge) values
  ('icbc',      6, 60.00, 500000, 'best'),
  ('denizbank', 6, 57.50, 100000, null),
  ('qnb',       6, 56.00,  50000, null),
  ('isbank',    6, 55.00,  10000, null),
  ('garanti',   6, 54.00,  10000, null);

-- MEVDUAT (12 ay)
insert into mevduat (bank_id, vade, yillik_faiz, min_tutar, badge) values
  ('icbc',      12, 62.00, 500000, 'best'),
  ('denizbank', 12, 59.00, 100000, null),
  ('qnb',       12, 58.00,  50000, null),
  ('isbank',    12, 57.00,  10000, null),
  ('garanti',   12, 56.00,  10000, null);

-- KREDİ KARTLARI
insert into kredi_kartlari (id, bank_id, name, puan_tipi, puan_orani, aidat, max_limit, rating, badge, avantajlar) values
  ('bonus',      'garanti',  'Bonus Card',      'Bonus', '%1 Bonus',     null, 50000, 4.2, 'best', array['Taksit imkanı','Online alışveriş bonus','Kontör hediyesi']),
  ('miles',      'yapikrdi', 'Miles&Smiles',    'Mil',   '1 Mil / 10₺',  450, 75000, 4.7, null,   array['Uçuş mil kazanımı','Lounge erişimi','TK avantajları']),
  ('axess',      'akbank',   'Axess',           'Nakit', '%0.5 Nakit',   null, 40000, 3.9, 'new',  array['Market 2x nakit','Fatura otom.','Mobil ödeme']),
  ('maximum',    'isbank',   'Maximum Card',    'Puan',  '%1.5 Maximum',  350, 60000, 4.4, null,   array['Kategori 3x puan','Taksit imkanı','Sigorta']),
  ('cardfinans', 'qnb',      'CardFinans',      'Para',  '%0.75 para',   null, 35000, 3.5, null,   array['Fatura 2x','Market indirimi','Yakıt avantajı']),
  ('worldcard',  'yapikrdi', 'World Card',      'Puan',  '%1 World',     null, 45000, 4.0, null,   array['Geniş taksit ağı','Online alışveriş','Kampanyalar']),
  ('troya',      'ziraat',   'Ziraat Bankası Kartı','Puan','%0.5 Puan', null, 30000, 3.8, null,   array['Ücretsiz yıllık aidat','ATM avantajı','Devlet teşviki']);
