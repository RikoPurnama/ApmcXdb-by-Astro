import { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";

const PromotionList = () => {
  const [promotions, setPromotions] = useState<any[]>([]);
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPromotions = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/promotions");
        if (!response.ok) throw new Error("Gagal memuat promosi");
        const data = await response.json();
        if (isMounted) setPromotions(data);
      } catch (err) {
        if (isMounted) setError("Gagal memuat promosi.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const checkSession = async () => {
      try {
        const response = await fetch("/api/checksession");
        if (!response.ok) {
          throw new Error("Session invalid");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      setUser(null); // Pastikan user null jika gagal
      }
    };

    checkSession();

    loadPromotions();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (promotionId: number, imageUrl: string | null) => {
    try {
      if (!window.confirm("Apakah Anda yakin ingin menghapus promo ini?"))
        return;

      const response = await fetch("/api/promotions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promotionId, imageUrl }),
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus promosi.");
      }

      setPromotions((prev) => prev.filter((promo) => promo.id !== promotionId));
    } catch (err: any) {
      alert(err.message || "Terjadi kesalahan saat menghapus promosi.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
