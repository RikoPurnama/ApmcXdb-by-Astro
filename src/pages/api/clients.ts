import { supabase } from "../../config/supabaseClient";
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabase.from("Total_Clients").select("*");

    if (error) {
      return new Response(
        JSON.stringify({ message: "Gagal mengambil data klien!" }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return new Response(
      JSON.stringify({ message: "Terjadi kesalahan saat mengambil data klien." }),
      { status: 500 }
    );
  }
};
