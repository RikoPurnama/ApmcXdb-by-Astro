import { parse } from "cookie";
import type  {APIRoute} from 'astro';

import { supabase } from "../../config/supabaseClient";

export const GET: APIRoute = async ({ request }) => {
  try {
    const cookies = parse(request.headers.get("cookie") || "");
    const token = cookies["supabase-auth-token"];

    if (!token) {
      return new Response(
        JSON.stringify({ error: "Tidak ada sesi pengguna" }),
        { status: 401 }
      );
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data) {
      throw new Error("Sesi tidak valid");
    }

    return new Response(
      JSON.stringify({ user: data.user }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Terjadi kesalahan" }),
      { status: 400 }
    );
  }
};
