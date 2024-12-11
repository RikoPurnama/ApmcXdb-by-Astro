import { serialize } from 'cookie';
export { renderers } from '../../../renderers.mjs';

const POST = async () => {
  const logoutCookie = serialize("supabase-auth-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    // Hapus cookie
    path: "/"
  });
  return new Response(
    JSON.stringify({ message: "Logout berhasil!" }),
    {
      status: 200,
      headers: { "Set-Cookie": logoutCookie }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
