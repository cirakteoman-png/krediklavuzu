export type BankType = 'devlet' | 'ozel' | 'katilim';

export interface Bank {
  id: string;
  name: string;
  shortName: string;
  color: string;
  type: BankType;
}

export interface KrediTeklif {
  bankId: string;
  aylikFaiz: number;   // %3.49 -> 3.49
  yillikFaiz: number;
  onayIcons: string;   // 'Anında' | '2 dk' | '1 iş günü'
  rating: number;
  minTutar: number;
  maxTutar: number;
  maxVade: number;
  badge?: 'best' | 'low' | 'new';
}

export interface MevduatTeklif {
  bankId: string;
  vade: 1 | 3 | 6 | 12;    // ay
  yillikFaiz: number;
  minTutar: number;
  badge?: 'best' | 'low' | 'new';
}

export interface KrediKarti {
  id: string;
  bankId: string;
  name: string;
  puanTipi: string;      // 'Bonus', 'Miles', 'Axess'
  puanOrani: string;     // '%1 Bonus'
  aidat: number | null;  // null = yok
  maxLimit: number;
  rating: number;
  badge?: 'best' | 'low' | 'new';
  avantajlar: string[];
}

export type TabKey = 'ihtiyac' | 'konut' | 'kart' | 'mevduat';
