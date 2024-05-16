import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const minX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <section className="relative overflow-hidden">
      <motion.h1
        style={{ x: minX }}
        className="flex items-center text-[2em] font-mono font-semibold z-10 m-0 whitespace-nowrap mt-auto ml-8 transition-all duration-[2s] ease-[cubic-bezier(0.165,0.84,0.44,1)]"
      >
        Promo
      </motion.h1>
      <div className="relative w-full overflow-hidden pb-14 mt-14">
      <div className="flex items-center whitespace-nowrap animate-scroll">
        <p className="font-serif text-slate-950 text-4xl tracking-widest mr-20">Promo</p>
        <p className="font-serif text-slate-950 text-4xl tracking-widest mr-20">Promo</p>
        <p className="font-serif text-slate-950 text-4xl tracking-widest mr-20">Promo</p>
        {/* Tambahkan elemen lebih banyak jika perlu */}
      </div>
    </div>
    </section>
  );
};

export default About;
