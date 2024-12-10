import React, { useState } from "react";
import { supabase } from "../../config/supabaseClient";

const AddPromotion: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddPromotion = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      let imageUrl = null;

      // Jika ada gambar, unggah ke Supabase Storage
      if (image) {
        const fileName = `${Date.now()}-${image.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("promotion images")
          .upload(fileName, image);

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
      ]).select()

      if (error) {
        throw new Error(`Gagal menyimpan data promosi: ${error.message}`);
      }

      setMessage("Promosi berhasil ditambahkan!");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error: any) {
      setMessage(error.message || "Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[500px] bg-white mx-auto mt-10 p-5 border rounded shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Tambah Promo</h2>
      <form onSubmit={handleAddPromotion} className="flex flex-col gap-4">
        <div>
          <label className="block font-semibold mb-1">Judul Promosi</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Deskripsi (Opsional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Gambar (Opsional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isLoading ? "Menambahkan..." : "Tambah Promosi"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default AddPromotion;
