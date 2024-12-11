import React, { useState } from "react";

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
      let imageBase64 = null;

      // Jika ada gambar, ubah ke base64
      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        const result = await new Promise<string | ArrayBuffer | null>(
          (resolve) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => resolve(null);
          }
        );
        if (!result) throw new Error("Gagal memproses gambar.");
        imageBase64 = {
          name: image.name,
          type: image.type,
          data: (result as string).split(",")[1], // Ambil base64 tanpa prefix
        };
      }

      // Kirim data ke API
      const response = await fetch("/api/promotions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          image: imageBase64,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal menambahkan promosi.");
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
          <label className="block font-semibold mb-1">
            Deskripsi (Opsional)
          </label>
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
