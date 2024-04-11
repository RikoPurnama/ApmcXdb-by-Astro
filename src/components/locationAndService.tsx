import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const LocationAndService = () => {
  return (
    <>
      <section id="Region" className="bg-dark py-16 text-slate-100">
        <div className="container mx-auto lg:px-32">
          <div className="w-full px-4 flex flex-wrap md:flex-nowrap md:items-center">
            <h3 className="text-xl py-8 md:text-2xl font-bold md:max-w-[50%]">
              apmcXdb<span className="text-primary">Net</span> saat ini masih
              hanya tersedia disekitar wilayah Indramayu
            </h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.368945677043!2d108.2799877!3d-6.4277106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec79eb1b7ab23%3A0x7f692c71183a8097!2sAgen%20BRI%20LINK%20APMC%20COMCELL%20%26%20BIRD!5e0!3m2!1sid!2sid!4v1712821822290!5m2!1sid!2sid" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" className="w-full md:w-[50%] h-[350px] px-4"></iframe>
          </div>
          <hr className="opacity-10 my-16" />
          <div className="w-full flex flex-wrap justify-between gap-2">
            <div className="w-full md:w-[32%] px-4">
              <h4 className="text-xl md:text-2xl font-bold">
                apmcXdb<span className="text-primary">Net</span>
              </h4>
              <p className="py-2 text-slate-500">
                Yuk pilih apmcXdb untuk memperlancar kegiatan mu dirumah bersama
                200+ mitra apmcXdb.net lain nya
              </p>
            </div>
            <div className="w-full md:w-[32%] px-4">
              <div className="w-full flex items-center gap-2">
                <IoLocationOutline className="text-2xl text-primary" />
                <h4 className="text-lg font-semibold">Location</h4>
              </div>
              <p className="py-2 text-slate-500">
                H7FM+96F, Jalan, Legok, Kec. Lohbener, Kabupaten Indramayu, Jawa
                Barat 45252{" "}
              </p>
            </div>
            <div className="w-full md:w-[32%] px-4">
              <div className="w-full flex items-center gap-2">
                <IoMailOutline className="text-2xl text-primary" />
                <h4 className="text-lg font-semibold">
                  Apa yang bisa kami bantu?
                </h4>
              </div>
              <p className="py-2 text-slate-500">cvdbnet@gmail.com</p>
              <p className="text-slate-500">+62 852 2437 5422</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationAndService;
