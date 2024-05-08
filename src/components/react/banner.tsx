import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const minX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <section className="relative overflow-hidden">
        <motion.h1
          style={{ x: minX }}
          className="flex items-center text-[2em] font-mono font-semibold z-10 m-0 whitespace-nowrap mt-auto ml-8 transition-all duration-[2s] ease-[cubic-bezier(0.165,0.84,0.44,1)]"
        >
          Promo
        </motion.h1>
        <motion.div style={{ x }} className="w-full text-white flex items-center gap-20 pb-14 -ml-24 mt-14 whitespace-nowrap transition-all duration-[2s] ease-[cubic-bezier(0.165,0.84,0.44,1)] ">
          <p className="font-serif text-slate-950 text-4xl tracking-widest">Promo</p>
          <p className="font-serif text-slate-950 text-4xl tracking-widest">Promo</p>
          <p className="font-serif text-slate-950 text-4xl tracking-widest">Promo</p>
          
        </motion.div>
    </section>
  );
};

export default About;
