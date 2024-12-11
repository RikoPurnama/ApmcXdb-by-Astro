import type { APIRoute } from "astro";
import { supabase } from "../../config/supabaseClient";

// Handler untuk mengambil promosi
export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabase.from("Promotion").select("*");
    if (error) throw error;

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Gagal memuat promosi", details: err }),
      { status: 500 }
    );
  }
};

// Handler untuk menghapus dan menambahkan promosi
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Jika request berisi `promotionId`, maka ini adalah permintaan untuk menghapus promosi
    if (body.promotionId) {
      const { promotionId, imageUrl } = body;

      // Hapus gambar dari storage (jika ada)
      if (imageUrl) {
        const fileName = imageUrl.split("/").pop();
        const { error: storageError } = await supabase.storage
          .from("promotion images")
          .remove([fileName!]);
        if (storageError) throw storageError;
      }

      // Hapus data dari tabel Promotion
      const { error: dbError } = await supabase
        .from("Promotion")
        .delete()
        .eq("id", promotionId);
      if (dbError) throw dbError;

      return new Response(
        JSON.stringify({ message: "Promosi berhasil dihapus" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Jika tidak ada `promotionId`, maka ini adalah permintaan untuk menambahkan promosi
    const { title, description, image } = body;

    let imageUrl = null;

    // Jika ada gambar, unggah ke Supabase Storage
    if (image) {
      const buffer = Buffer.from(image.data, "base64"); // Decode base64 ke buffer
      const fileName = `${Date.now()}-${image.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("promotion images")
        .upload(fileName, buffer, {
          contentType: image.type,
        });

      if (uploadError) {
        throw new Error(`Gagal mengunggah gambar: ${uploadError.message}`);
      }

      imageUrl = `${process.env.PUBLIC_SUPABASE_URL}/storage/v1/object/public/promotion images/${uploadData?.path}`;
    }

    // Simpan data promosi ke database
    const { data, error } = await supabase.from("Promotion").insert([
      {
        title,
        description,
        imageUrl,
      },
    ]);

    if (error) {
      throw new Error(`Gagal menyimpan data promosi: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ message: "Promosi berhasil ditambahkan!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Terjadi kesalahan" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
