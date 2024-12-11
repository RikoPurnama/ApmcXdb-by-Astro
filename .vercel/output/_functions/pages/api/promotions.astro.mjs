import { s as supabase } from '../../chunks/supabaseClient_DSiHPD-m.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  try {
    const { data, error } = await supabase.from("Promotion").select("*");
    if (error) throw error;
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Gagal memuat promosi", details: err }),
      { status: 500 }
    );
  }
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (body.promotionId) {
      const { promotionId, imageUrl: imageUrl2 } = body;
      if (imageUrl2) {
        const fileName = imageUrl2.split("/").pop();
        const { error: storageError } = await supabase.storage.from("promotion images").remove([fileName]);
        if (storageError) throw storageError;
      }
      const { error: dbError } = await supabase.from("Promotion").delete().eq("id", promotionId);
      if (dbError) throw dbError;
      return new Response(
        JSON.stringify({ message: "Promosi berhasil dihapus" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    const { title, description, image } = body;
    let imageUrl = null;
    if (image) {
      const buffer = Buffer.from(image.data, "base64");
      const fileName = `${Date.now()}-${image.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage.from("promotion images").upload(fileName, buffer, {
        contentType: image.type
      });
      if (uploadError) {
        throw new Error(`Gagal mengunggah gambar: ${uploadError.message}`);
      }
      imageUrl = `${process.env.PUBLIC_SUPABASE_URL}/storage/v1/object/public/promotion images/${uploadData?.path}`;
    }
    const { data, error } = await supabase.from("Promotion").insert([
      {
        title,
        description,
        imageUrl
      }
    ]);
    if (error) {
      throw new Error(`Gagal menyimpan data promosi: ${error.message}`);
    }
    return new Response(
      JSON.stringify({ message: "Promosi berhasil ditambahkan!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Terjadi kesalahan" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
