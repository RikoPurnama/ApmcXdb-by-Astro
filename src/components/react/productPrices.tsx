import { Price } from "../../util/dataProduct";
import { BiSignal4 } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { IoConstructOutline } from "react-icons/io5";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function Card({ id }: { id: number }) {
  return (
    <Swiper
      spaceBetween={-10}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
      }}
    >
      {Price.map((item) => (
        <SwiperSlide className="py-9 px-7" key={item.id}>
          <div
            className={`w-full max-w-[320px] min-w-[270px] md:w-[19rem] h-[30rem] py-6 px-8 bg-white relative rounded-xl ${item.border} rounded-xl `}
          >
            <h1 className="text-sm text-dark">{item.title}</h1>
            <p
              className={`text-2xl font-semibold text-primary pb-2 ${item.fontSize}`}
            >
              {item.speed}
            </p>
            <hr className="opacity-100 text-black" />
            <p className="text-slate-400 line-through py-2">
              {item.discount.toLocaleString("ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p className="text-base font-medium text-text-gray">
              Rp
              <span className="text-3xl md:text-4xl font-medium text-dark">
                {item.harga.toLocaleString("ID")}
              </span>
              / Bulan
            </p>
            <div className="w-full py-4 md:py-5">
              <p>Benefit:</p>
              <ul className="flex flex-col gap-2 pt-2">
                <li>
                  <p className="flex items-center gap-2">
                    <BiSignal4 className="text-primary" /> Internet Unlimited
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2">
                    <BsPhone className="text-primary" /> Ideal untuk{" "}
                    {item.device} device
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2">
                    <IoConstructOutline className="text-primary" /> Gratis
                    Installasi
                  </p>
                </li>
              </ul>
              <p className="text-base py-2 pt-4">Penggunaan :</p>
              <div className="flex gap-2">
                <p className="text-sm text-slate-500">{item.penggunaan}</p>
              </div>
            </div>
            <a
              className="inline-block absolute bottom-6 right-8 left-8 text-center py-3 px-6 bg-primary text-white hover:shadow-[0_0_40px_-15px_rgba(6,55,164,0.4)] transition-shadow duration-300 ease-in-out rounded-xl mt-5"
              href={item.toChat}
              target="_blank"
            >
              Langganan Sekarang
            </a>
          </div>
        </SwiperSlide>
      ))}
      <h2 className="text-primary px-7">Scroll Ke Kanan {">>>>"}</h2>
    </Swiper>
  );
}

const Product = () => {
  return (
    <section id="Product" className="pt-32">
      <div className="container mx-auto lg:px-32">
        <div className="w-full">
          <h6 className="text-base font-bold text-center text-primary">
            Harga dan Layanan
          </h6>
          <h1 className="text-2xl md:text-3xl font-bold text-center py-1">
            Tentukan Bandwidht Sesuai Kebutuhanmu
          </h1>
          <p className="text-center text-slate-600 py-2 pb-6">
            Pilih paket yang sesuai dengan kebutuhanmu, Sekarang saatnya
            menikmati kecepatan baru internet fiber ultra cepat dan unlimited
            dari APMC Net.
          </p>

          <div className="w-[26rem] sm:w-[28rem] md:w-[27rem] lg:w-[34rem] 2xl:w-[34rem] h-[34.5rem] absolute -left-11 bg-primary rounded-3xl"></div>

          {[0].map((price: any) => (
            <Card id={price} key={price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
