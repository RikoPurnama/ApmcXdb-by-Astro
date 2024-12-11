import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import AddPromotion from "./addPromos";
import PromotionList from "./PromotionList";

const About = () => {
  const [user, setUser] = useState<any>(null);
  const [addPromos, setAddPromos] = useState(false);
  const { scrollYProgress } = useScroll();
  const minX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  useEffect(() => {
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
  }, []);

  return (
    <section className="overflow-hidden mt-52 md:mt-32 lg:mt-0">
      <div className="flex gap-4">
        <motion.h1
          style={{ x: minX }}
          className="flex items-center text-[2em] font-mono font-semibold z-10 m-0 whitespace-nowrap mt-auto ml-8 transition-all duration-[2s] ease-[cubic-bezier(0.165,0.84,0.44,1)]"
        >
          Promo
        </motion.h1>

        {user ? (
          <motion.button
          style={{x: minX}}
            onClick={() => {
              setAddPromos(true);
            }}
            className="border border-dark px-4 rounded-lg z-10"
          >
            Tambahkan Promo
          </motion.button>
        ) : (
          ""
        )}
      </div>

      {/* promo list */}
      <PromotionList />

      {addPromos ? (
        <div
          onClick={() => {
            setAddPromos(false);
          }}
          className="w-full h-[100vh] bg-dark/50 flex justify-center items-center fixed left-0 top-0 z-[99]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
          >
            <AddPromotion />
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default About;
