import { s as supabase } from '../../chunks/supabaseClient_DSiHPD-m.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
