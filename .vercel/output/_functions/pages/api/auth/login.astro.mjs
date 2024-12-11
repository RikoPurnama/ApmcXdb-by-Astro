import { serialize } from 'cookie';
import { s as supabase } from '../../../chunks/supabaseClient_DSiHPD-m.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { email, password } = await request.json();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error || !data.session) {
      throw new Error("Gagal masuk");
    }
    const authCookie = serialize("supabase-auth-token", data.session.access_token, {
      httpOnly: true,
      // Amankan cookie
      secure: process.env.NODE_ENV === "production",
      // Gunakan HTTPS di produksi
      sameSite: "strict",
      // Mencegah pengiriman lintas situs
      maxAge: 60 * 60 * 24 * 7,
      // 1 minggu
      path: "/"
      // Berlaku untuk semua rute
    });
    return new Response(
      JSON.stringify({ message: "Login berhasil!" }),
      {
        status: 200,
        headers: { "Set-Cookie": authCookie }
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Terjadi kesalahan" }),
      { status: 400 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
