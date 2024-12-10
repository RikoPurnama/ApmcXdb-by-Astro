import { useEffect, useState } from "react";
import { fetchPromotions } from "../../util/api/apiServices";
import { supabase } from "../../config/supabaseClient";

const PromotionList = () => {
  const [promotions, setPromotions] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPromotions = async () => {
      try {
        setLoading(true);
        const data = await fetchPromotions();
        if (isMounted) setPromotions(data);
      } catch (err) {
        if (isMounted) setError("Gagal memuat promosi.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadPromotions();
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        setUser(null); // Tidak ada sesi
      } else {
        setUser(data.session.user); // Ada sesi, simpan data pengguna
      }
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });

    return () => {
      authListener.subscription.unsubscribe();
      isMounted = false; // Mencegah setState jika komponen telah dibongkar
    };
  }, []);

  const handleDelete = async (promotionId: number, imageUrl: string | null) => {
    try {
      if (!window.confirm("Apakah Anda yakin ingin menghapus promo ini?"))
        return;

      // Hapus gambar dari Supabase Storage (jika ada)
      if (imageUrl) {
        const fileName = imageUrl.split("/").pop(); // Mendapatkan nama file dari URL
        const { error: storageError } = await supabase.storage
          .from("promotion images")
          .remove([fileName!]);

        if (storageError) {
          throw new Error(`Gagal menghapus gambar: ${storageError.message}`);
        }
      }

      // Hapus data dari tabel `Promotion`
      const { error: dbError } = await supabase
        .from("Promotion")
        .delete()
        .eq("id", promotionId);

      if (dbError) {
        throw new Error(`Gagal menghapus promo: ${dbError.message}`);
      }

      // Perbarui daftar promosi
      setPromotions((prev) => prev.filter((promo) => promo.id !== promotionId));
    } catch (err: any) {
      alert(err.message || "Terjadi kesalahan saat menghapus promo.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="overflow-hidden">
      <div className="flex relative w-full overflow-hidden my-12">
        <div className="w-full flex gap-20 md:gap-32 lg:gap-40 animate-loop-scroll">
          {promotions.map((promotion) => (
            <div
              key={promotion.id}
              className="p-2 text-slate-950 flex flex-col items-stretch relative"
            >
              {!promotion.imageUrl && (
                <p className="w-80 text-lg md:text-xl lg:text-2xl font-serif tracking-widest font-semibold text-primary">
                  {promotion.title}
                </p>
              )}
              {promotion.imageUrl && (
                <img
                  loading="lazy"
                  className="max-w-80 h-20 md:h-28 object-cover rounded-xl"
                  src={promotion.imageUrl}
                  alt={promotion.title}
                />
              )}
              {user && (
                <button
                  onClick={() => handleDelete(promotion.id, promotion.imageUrl)}
                  className="w-auto py-0 px-2 text-black absolute -top-0 -right-2 backdrop-blur-md rounded shadow z-50"
                >
                  X
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionList;
