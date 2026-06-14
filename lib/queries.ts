import { supabase } from './supabase';
import {
  BANKS,
  IHTIYAC_TEKLIFLER,
  KONUT_TEKLIFLER,
  MEVDUAT_TEKLIFLER,
  KREDI_KARTLARI,
  getBankById,
} from './data';
import type { KrediTeklif, MevduatTeklif, KrediKarti } from './types';

/**
 * Supabase erişilemediğinde (proje kapalı/silinmiş ya da ağ hatası) sayfaların
 * 500 vermek yerine lib/data.ts'deki örnek veriyle çalışmaya devam etmesi için
 * yedek (fallback) eşleyicileri. DB tekrar canlı olduğunda gerçek veri kullanılır.
 */

type KrediRow = {
  bank_id: string;
  aylik_faiz: number;
  yillik_faiz: number;
  onay_suresi: string;
  rating: number;
  badge: 'best' | 'low' | 'new' | null;
  banks: { name: string; type: string } | null;
};

type MevduatRow = {
  bank_id: string;
  vade: number;
  yillik_faiz: number;
  min_tutar: number;
  badge: 'best' | 'low' | 'new' | null;
  banks: { name: string; type: string } | null;
};

type KartRow = {
  id: string;
  bank_id: string;
  name: string;
  puan_tipi: string;
  puan_orani: string;
  aidat: number | null;
  max_limit: number;
  rating: number;
  badge: 'best' | 'low' | 'new' | null;
  banks: { name: string } | null;
};

function bankInfo(bankId: string) {
  const b = getBankById(bankId);
  return b ? { name: b.name, type: b.type } : null;
}

function mapKredi(list: KrediTeklif[]): KrediRow[] {
  return list.map((t) => ({
    bank_id: t.bankId,
    aylik_faiz: t.aylikFaiz,
    yillik_faiz: t.yillikFaiz,
    onay_suresi: t.onayIcons,
    rating: t.rating,
    badge: t.badge ?? null,
    banks: bankInfo(t.bankId),
  }));
}

function mapMevduat(list: MevduatTeklif[]): MevduatRow[] {
  return list.map((m) => ({
    bank_id: m.bankId,
    vade: m.vade,
    yillik_faiz: m.yillikFaiz,
    min_tutar: m.minTutar,
    badge: m.badge ?? null,
    banks: bankInfo(m.bankId),
  }));
}

function mapKart(list: KrediKarti[]): KartRow[] {
  return list.map((k) => ({
    id: k.id,
    bank_id: k.bankId,
    name: k.name,
    puan_tipi: k.puanTipi,
    puan_orani: k.puanOrani,
    aidat: k.aidat,
    max_limit: k.maxLimit,
    rating: k.rating,
    badge: k.badge ?? null,
    banks: (() => {
      const b = getBankById(k.bankId);
      return b ? { name: b.name } : null;
    })(),
  }));
}

/** Supabase çağrısını dener; herhangi bir hata/ağ sorununda yedeğe döner. */
async function withFallback<T>(
  run: () => Promise<T>,
  fallback: () => T,
  label: string,
): Promise<T> {
  try {
    return await run();
  } catch (err) {
    console.warn(`[queries] ${label}: Supabase erişilemedi, örnek veriye dönülüyor.`, err);
    return fallback();
  }
}

export async function getBanks() {
  return withFallback(
    async () => {
      const { data, error } = await supabase.from('banks').select('*').order('name');
      if (error) throw error;
      return data;
    },
    () => BANKS.map((b) => ({ id: b.id, name: b.name, type: b.type })),
    'getBanks',
  );
}

export async function getIhtiyacKredisi(): Promise<KrediRow[]> {
  return withFallback(
    async () => {
      const { data, error } = await supabase
        .from('ihtiyac_kredisi')
        .select('*, banks(*)')
        .eq('aktif', true)
        .order('aylik_faiz');
      if (error) throw error;
      return data as unknown as KrediRow[];
    },
    () => mapKredi(IHTIYAC_TEKLIFLER),
    'getIhtiyacKredisi',
  );
}

export async function getKonutKredisi(): Promise<KrediRow[]> {
  return withFallback(
    async () => {
      const { data, error } = await supabase
        .from('konut_kredisi')
        .select('*, banks(*)')
        .eq('aktif', true)
        .order('aylik_faiz');
      if (error) throw error;
      return data as unknown as KrediRow[];
    },
    () => mapKredi(KONUT_TEKLIFLER),
    'getKonutKredisi',
  );
}

export async function getMevduat(vade?: number): Promise<MevduatRow[]> {
  return withFallback(
    async () => {
      let query = supabase
        .from('mevduat')
        .select('*, banks(*)')
        .eq('aktif', true)
        .order('yillik_faiz', { ascending: false });
      if (vade) query = query.eq('vade', vade);
      const { data, error } = await query;
      if (error) throw error;
      return data as unknown as MevduatRow[];
    },
    () => {
      const list = vade ? MEVDUAT_TEKLIFLER.filter((m) => m.vade === vade) : MEVDUAT_TEKLIFLER;
      return mapMevduat(list);
    },
    'getMevduat',
  );
}

export async function getKrediKartlari(): Promise<KartRow[]> {
  return withFallback(
    async () => {
      const { data, error } = await supabase
        .from('kredi_kartlari')
        .select('*, banks(*)')
        .eq('aktif', true)
        .order('rating', { ascending: false });
      if (error) throw error;
      return data as unknown as KartRow[];
    },
    () => mapKart(KREDI_KARTLARI),
    'getKrediKartlari',
  );
}
