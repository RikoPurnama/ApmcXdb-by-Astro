import { supabase } from "../../config/supabaseClient";

export const fetchPromotions = async () => {
    const { data, error } = await supabase
      .from('Promotion') // Ganti dengan nama tabel Anda
      .select('*'); // Pilih semua kolom, atau pilih kolom tertentu jika perlu
    
    if (error) {
      console.error('Gagal mengambil data:', error.message);
      return [];
    }
  
    return data || [];
  };

export const fetchClients = async () => {
    const { data, error } = await supabase
      .from('Total_Clients') // Ganti dengan nama tabel Anda
      .select('*'); // Pilih semua kolom, atau pilih kolom tertentu jika perlu
    
    if (error) {
      console.error('Gagal mengambil data:', error.message);
      return [];
    }
  
    return data || [];
  };
  