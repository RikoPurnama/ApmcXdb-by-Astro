import { serialize } from "cookie";
import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  const logoutCookie = serialize("supabase-auth-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0, // Hapus cookie
    path: "/",
  });
  
  return new Response(
    JSON.stringify({ message: "Logout berhasil!" }),
    {
      status: 200,
      headers: { "Set-Cookie": logoutCookie },
    }
  );
};
