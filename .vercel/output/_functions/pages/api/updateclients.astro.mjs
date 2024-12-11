import { s as supabase } from '../../chunks/supabaseClient_DSiHPD-m.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { totalClients } = await request.json();
  if (totalClients === null || totalClients <= 0) {
    return new Response(
      JSON.stringify({ message: "Masukkan jumlah klien yang valid!" }),
      { status: 400 }
    );
  }
  try {
    const { data, error } = await supabase.from("Total_Clients").update({ total: totalClients }).eq("id", 1).select();
    if (error) {
      return new Response(
        JSON.stringify({ message: "Gagal memperbarui jumlah klien!" }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ message: "Jumlah klien berhasil diperbarui!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ message: "Terjadi kesalahan, coba lagi nanti." }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
