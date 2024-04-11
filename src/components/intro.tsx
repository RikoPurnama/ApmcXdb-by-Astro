import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="w-full h-screen md:h-[66vh] lg:h-[93vh] py-32 md:flex md:items-center">
      <div className="container mx-auto lg:px-24">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-[60%] px-8">
            <div>
              <h6 className="text-primary font-bold pb-1">
                #PakaiAPMC Pasti Cepat
              </h6>
              <h1 className="text-2xl lg:text-4xl font-bold text-slate-900">
                Internet <span className="text-primary">murah</span> dirumah
                Untuk Kebutuhan Digital Anda
              </h1>
              <p className="py-4 text-slate-500">
                Apakah Anda mencari solusi terpercaya untuk meningkatkan
                konektivitas internet di tempat Anda? Kami di ApmcXdb siap membantu
                Anda menghadirkan jaringan WiFi berkualitas tinggi untuk
                memenuhi kebutuhan akses internet Anda. 
                <br />
                {/* Nikmati internet cepat
                jangkauan luas mulai dari 100 ribuan saja perbulan. Yuk pilih
                apmcXdb untuk memperlancar kegiatan mu dirumah bersama
                apmcXdb.net */}
              </p>
              <div className="flex gap-4 pb-6">
                <a
                  href="/more"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                >
                  Selengkapnya
                </a>
                <a
                  href="#Product"
                  className="text-primary border border-primary px-4 py-2 rounded-md"
                >
                  Lihat Layanan
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <img
              className="absolute md:top-[6.15rem] right-0 w-[22rem] md:w-[25rem] lg:w-[32rem]"
              src="/hero.webp"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
