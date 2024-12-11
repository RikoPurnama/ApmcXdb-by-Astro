import { parse } from 'cookie';
import { s as supabase } from '../../chunks/supabaseClient_DSiHPD-m.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
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
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Terjadi kesalahan" }),
      { status: 400 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
