import { Bank, KrediTeklif, MevduatTeklif, KrediKarti } from './types';

export const BANKS: Bank[] = [
  { id: 'ziraat',    name: 'Ziraat Bankası',  shortName: 'ZR', color: '#C8102E', type: 'devlet' },
  { id: 'halkbank',  name: 'Halkbank',         shortName: 'HB', color: '#1B5E20', type: 'devlet' },
  { id: 'vakifbank', name: 'VakıfBank',         shortName: 'VK', color: '#1565C0', type: 'devlet' },
  { id: 'garanti',   name: 'Garanti BBVA',      shortName: 'GB', color: '#005F9E', type: 'ozel'   },
  { id: 'yapikrdi',  name: 'Yapı Kredi',        shortName: 'YK', color: '#E31E24', type: 'ozel'   },
  { id: 'akbank',    name: 'Akbank',            shortName: 'AK', color: '#004B8F', type: 'ozel'   },
  { id: 'isbank',    name: 'İş Bankası',        shortName: 'IB', color: '#1B5E20', type: 'ozel'   },
  { id: 'qnb',       name: 'QNB Finansbank',    shortName: 'FN', color: '#FF6900', type: 'ozel'   },
  { id: 'denizbank', name: 'Denizbank',         shortName: 'DB', color: '#E65100', type: 'ozel'   },
  { id: 'teb',       name: 'TEB',               shortName: 'TB', color: '#003087', type: 'ozel'   },
  { id: 'icbc',      name: 'ICBC Turkey',       shortName: 'IC', color: '#F57C00', type: 'ozel'   },
  { id: 'ing',       name: 'ING Bank',          shortName: 'IN', color: '#FF6200', type: 'ozel'   },
];

export const IHTIYAC_TEKLIFLER: KrediTeklif[] = [
  { bankId: 'ziraat',    aylikFaiz: 3.49, yillikFaiz: 41.88, onayIcons: 'Anında',     rating: 4.6, minTutar: 5000,   maxTutar: 500000,  maxVade: 60, badge: 'best' },
  { bankId: 'halkbank',  aylikFaiz: 3.59, yillikFaiz: 43.08, onayIcons: 'Anında',     rating: 4.1, minTutar: 5000,   maxTutar: 400000,  maxVade: 60 },
  { bankId: 'garanti',   aylikFaiz: 3.65, yillikFaiz: 43.80, onayIcons: '2 dk',       rating: 4.8, minTutar: 10000,  maxTutar: 750000,  maxVade: 60 },
  { bankId: 'vakifbank', aylikFaiz: 3.69, yillikFaiz: 44.28, onayIcons: '1 iş günü',  rating: 4.0, minTutar: 5000,   maxTutar: 400000,  maxVade: 60 },
  { bankId: 'yapikrdi',  aylikFaiz: 3.75, yillikFaiz: 45.00, onayIcons: '5 dk',       rating: 4.5, minTutar: 10000,  maxTutar: 600000,  maxVade: 60 },
  { bankId: 'akbank',    aylikFaiz: 3.89, yillikFaiz: 46.68, onayIcons: 'Anında',     rating: 4.3, minTutar: 10000,  maxTutar: 500000,  maxVade: 48 },
  { bankId: 'qnb',       aylikFaiz: 3.99, yillikFaiz: 47.88, onayIcons: '4 saat',     rating: 3.7, minTutar: 5000,   maxTutar: 300000,  maxVade: 48 },
  { bankId: 'isbank',    aylikFaiz: 4.05, yillikFaiz: 48.60, onayIcons: 'Anında',     rating: 4.9, minTutar: 10000,  maxTutar: 600000,  maxVade: 60 },
  { bankId: 'denizbank', aylikFaiz: 4.15, yillikFaiz: 49.80, onayIcons: '1 iş günü',  rating: 3.8, minTutar: 5000,   maxTutar: 400000,  maxVade: 48 },
  { bankId: 'teb',       aylikFaiz: 4.25, yillikFaiz: 51.00, onayIcons: '2 iş günü',  rating: 3.5, minTutar: 5000,   maxTutar: 300000,  maxVade: 36 },
];

export const KONUT_TEKLIFLER: KrediTeklif[] = [
  { bankId: 'halkbank',  aylikFaiz: 2.79, yillikFaiz: 33.48, onayIcons: 'Anında',     rating: 4.2, minTutar: 100000, maxTutar: 10000000, maxVade: 240, badge: 'best' },
  { bankId: 'vakifbank', aylikFaiz: 2.85, yillikFaiz: 34.20, onayIcons: 'Anında',     rating: 4.0, minTutar: 100000, maxTutar: 8000000,  maxVade: 240 },
  { bankId: 'ziraat',    aylikFaiz: 2.89, yillikFaiz: 34.68, onayIcons: 'Anında',     rating: 4.5, minTutar: 100000, maxTutar: 10000000, maxVade: 240 },
  { bankId: 'denizbank', aylikFaiz: 2.95, yillikFaiz: 35.40, onayIcons: '3 iş günü',  rating: 3.8, minTutar: 200000, maxTutar: 6000000,  maxVade: 180 },
  { bankId: 'garanti',   aylikFaiz: 2.99, yillikFaiz: 35.88, onayIcons: '2 iş günü',  rating: 4.6, minTutar: 200000, maxTutar: 8000000,  maxVade: 240 },
  { bankId: 'akbank',    aylikFaiz: 3.05, yillikFaiz: 36.60, onayIcons: '2 iş günü',  rating: 4.3, minTutar: 200000, maxTutar: 7000000,  maxVade: 240 },
  { bankId: 'yapikrdi',  aylikFaiz: 3.09, yillikFaiz: 37.08, onayIcons: '3 iş günü',  rating: 4.1, minTutar: 200000, maxTutar: 7000000,  maxVade: 240 },
  { bankId: 'isbank',    aylikFaiz: 3.15, yillikFaiz: 37.80, onayIcons: '2 iş günü',  rating: 4.7, minTutar: 200000, maxTutar: 8000000,  maxVade: 240 },
];

export const MEVDUAT_TEKLIFLER: MevduatTeklif[] = [
  { bankId: 'icbc',      vade: 3,  yillikFaiz: 58.00, minTutar: 500000, badge: 'best' },
  { bankId: 'denizbank', vade: 3,  yillikFaiz: 55.50, minTutar: 100000 },
  { bankId: 'qnb',       vade: 3,  yillikFaiz: 54.00, minTutar: 50000  },
  { bankId: 'isbank',    vade: 3,  yillikFaiz: 52.00, minTutar: 10000  },
  { bankId: 'garanti',   vade: 3,  yillikFaiz: 51.50, minTutar: 10000  },
  { bankId: 'akbank',    vade: 3,  yillikFaiz: 50.75, minTutar: 10000  },
  { bankId: 'yapikrdi',  vade: 3,  yillikFaiz: 50.00, minTutar: 10000  },
  { bankId: 'ziraat',    vade: 3,  yillikFaiz: 49.50, minTutar: 1000   },
  { bankId: 'halkbank',  vade: 3,  yillikFaiz: 49.00, minTutar: 1000   },
  { bankId: 'vakifbank', vade: 3,  yillikFaiz: 48.75, minTutar: 1000   },
  { bankId: 'icbc',      vade: 1,  yillikFaiz: 52.00, minTutar: 500000 },
  { bankId: 'denizbank', vade: 1,  yillikFaiz: 50.00, minTutar: 100000 },
  { bankId: 'qnb',       vade: 1,  yillikFaiz: 48.50, minTutar: 50000  },
  { bankId: 'isbank',    vade: 1,  yillikFaiz: 47.00, minTutar: 10000  },
  { bankId: 'garanti',   vade: 1,  yillikFaiz: 46.00, minTutar: 10000  },
  { bankId: 'icbc',      vade: 6,  yillikFaiz: 60.00, minTutar: 500000, badge: 'best' },
  { bankId: 'denizbank', vade: 6,  yillikFaiz: 57.50, minTutar: 100000 },
  { bankId: 'qnb',       vade: 6,  yillikFaiz: 56.00, minTutar: 50000  },
  { bankId: 'isbank',    vade: 6,  yillikFaiz: 55.00, minTutar: 10000  },
  { bankId: 'garanti',   vade: 6,  yillikFaiz: 54.00, minTutar: 10000  },
  { bankId: 'icbc',      vade: 12, yillikFaiz: 62.00, minTutar: 500000, badge: 'best' },
  { bankId: 'denizbank', vade: 12, yillikFaiz: 59.00, minTutar: 100000 },
  { bankId: 'qnb',       vade: 12, yillikFaiz: 58.00, minTutar: 50000  },
  { bankId: 'isbank',    vade: 12, yillikFaiz: 57.00, minTutar: 10000  },
  { bankId: 'garanti',   vade: 12, yillikFaiz: 56.00, minTutar: 10000  },
];

export const KREDI_KARTLARI: KrediKarti[] = [
  {
    id: 'bonus',     bankId: 'garanti',  name: 'Bonus Card',
    puanTipi: 'Bonus', puanOrani: '%1 Bonus', aidat: null,  maxLimit: 50000,
    rating: 4.2, badge: 'best',
    avantajlar: ['Taksit imkanı', 'Online alışveriş bonus', 'Kontör hediyesi'],
  },
  {
    id: 'miles',     bankId: 'yapikrdi', name: 'Miles&Smiles',
    puanTipi: 'Mil',   puanOrani: '1 Mil / 10₺',  aidat: 450, maxLimit: 75000,
    rating: 4.7,
    avantajlar: ['Uçuş mil kazanımı', 'Lounge erişimi', 'TK avantajları'],
  },
  {
    id: 'axess',     bankId: 'akbank',   name: 'Axess',
    puanTipi: 'Nakit', puanOrani: '%0.5 Nakit',   aidat: null, maxLimit: 40000,
    rating: 3.9, badge: 'new',
    avantajlar: ['Market 2x nakit', 'Fatura otom.', 'Mobil ödeme'],
  },
  {
    id: 'maximum',   bankId: 'isbank',   name: 'Maximum Card',
    puanTipi: 'Puan',  puanOrani: '%1.5 Maximum', aidat: 350, maxLimit: 60000,
    rating: 4.4,
    avantajlar: ['Kategori 3x puan', 'Taksit imkanı', 'Sigorta'],
  },
  {
    id: 'cardfinans',bankId: 'qnb',      name: 'CardFinans',
    puanTipi: 'Para',  puanOrani: '%0.75 para',   aidat: null, maxLimit: 35000,
    rating: 3.5,
    avantajlar: ['Fatura 2x', 'Market indirimi', 'Yakıt avantajı'],
  },
  {
    id: 'worldcard', bankId: 'yapikrdi', name: 'World Card',
    puanTipi: 'Puan',  puanOrani: '%1 World',     aidat: null, maxLimit: 45000,
    rating: 4.0,
    avantajlar: ['Geniş taksit ağı', 'Online alışveriş', 'Kampanyalar'],
  },
  {
    id: 'troya',     bankId: 'ziraat',   name: 'Ziraat Bankası Kartı',
    puanTipi: 'Puan',  puanOrani: '%0.5 Puan',    aidat: null, maxLimit: 30000,
    rating: 3.8,
    avantajlar: ['Ücretsiz yıllık aidat', 'ATM avantajı', 'Devlet teşviki'],
  },
];

export function getBankById(id: string): Bank | undefined {
  return BANKS.find(b => b.id === id);
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + ' ₺';
}

export function calcTaksit(tutar: number, aylikFaiz: number, vade: number): number {
  const r = aylikFaiz / 100;
  return tutar * r * Math.pow(1 + r, vade) / (Math.pow(1 + r, vade) - 1);
}
