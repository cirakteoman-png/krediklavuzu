export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      banks: {
        Row: {
          id: string;
          name: string;
          short_name: string;
          color: string;
          type: 'devlet' | 'ozel' | 'katilim';
          logo_url: string | null;
          website: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['banks']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['banks']['Insert']>;
      };
      ihtiyac_kredisi: {
        Row: {
          id: number;
          bank_id: string;
          aylik_faiz: number;
          yillik_faiz: number;
          onay_suresi: string;
          rating: number;
          min_tutar: number;
          max_tutar: number;
          max_vade: number;
          badge: 'best' | 'low' | 'new' | null;
          aktif: boolean;
          guncelleme: string;
        };
        Insert: Omit<Database['public']['Tables']['ihtiyac_kredisi']['Row'], 'id' | 'guncelleme'>;
        Update: Partial<Database['public']['Tables']['ihtiyac_kredisi']['Insert']>;
      };
      konut_kredisi: {
        Row: {
          id: number;
          bank_id: string;
          aylik_faiz: number;
          yillik_faiz: number;
          onay_suresi: string;
          rating: number;
          min_tutar: number;
          max_tutar: number;
          max_vade: number;
          badge: 'best' | 'low' | 'new' | null;
          aktif: boolean;
          guncelleme: string;
        };
        Insert: Omit<Database['public']['Tables']['konut_kredisi']['Row'], 'id' | 'guncelleme'>;
        Update: Partial<Database['public']['Tables']['konut_kredisi']['Insert']>;
      };
      mevduat: {
        Row: {
          id: number;
          bank_id: string;
          vade: number;
          yillik_faiz: number;
          min_tutar: number;
          badge: 'best' | 'low' | 'new' | null;
          aktif: boolean;
          guncelleme: string;
        };
        Insert: Omit<Database['public']['Tables']['mevduat']['Row'], 'id' | 'guncelleme'>;
        Update: Partial<Database['public']['Tables']['mevduat']['Insert']>;
      };
      kredi_kartlari: {
        Row: {
          id: string;
          bank_id: string;
          name: string;
          puan_tipi: string;
          puan_orani: string;
          aidat: number | null;
          max_limit: number;
          rating: number;
          badge: 'best' | 'low' | 'new' | null;
          avantajlar: string[];
          aktif: boolean;
          guncelleme: string;
        };
        Insert: Omit<Database['public']['Tables']['kredi_kartlari']['Row'], 'guncelleme'>;
        Update: Partial<Database['public']['Tables']['kredi_kartlari']['Insert']>;
      };
    };
  };
}
