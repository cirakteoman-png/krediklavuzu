import { supabase } from './supabase';

export async function getBanks() {
  const { data, error } = await supabase
    .from('banks')
    .select('*')
    .order('name');
  if (error) throw error;
  return data;
}

export async function getIhtiyacKredisi() {
  const { data, error } = await supabase
    .from('ihtiyac_kredisi')
    .select('*, banks(*)')
    .eq('aktif', true)
    .order('aylik_faiz');
  if (error) throw error;
  return data;
}

export async function getKonutKredisi() {
  const { data, error } = await supabase
    .from('konut_kredisi')
    .select('*, banks(*)')
    .eq('aktif', true)
    .order('aylik_faiz');
  if (error) throw error;
  return data;
}

export async function getMevduat(vade?: number) {
  let query = supabase
    .from('mevduat')
    .select('*, banks(*)')
    .eq('aktif', true)
    .order('yillik_faiz', { ascending: false });
  if (vade) query = query.eq('vade', vade);
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function getKrediKartlari() {
  const { data, error } = await supabase
    .from('kredi_kartlari')
    .select('*, banks(*)')
    .eq('aktif', true)
    .order('rating', { ascending: false });
  if (error) throw error;
  return data;
}
