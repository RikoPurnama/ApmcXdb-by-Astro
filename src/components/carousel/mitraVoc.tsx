import { SwiperSlide, Swiper } from "swiper/react";
import { imagesMitra } from "../../util/dataMitraVoucher";

const MitraVoc = () => {

    return (
        <div className="w-full px-4 ">
      <div className="w-full">
        <Swiper
          spaceBetween={-10}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {imagesMitra.map((item) => (
            <SwiperSlide className="py-4 px-4" key={item.id}>
              <div
                key={item.id}
                className="w-full max-w-xl"
              >
                <img src={item.image} alt={item.title} className="rounded-xl shadow-lg" />
              </div>
            </SwiperSlide>
          ))}
          <h2 className="text-dark px-4">Scroll ke kanan {'>>>>'}</h2>
        </Swiper>
      </div>
    </div>
    )
}

export default MitraVoc;