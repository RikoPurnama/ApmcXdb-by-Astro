import { SwiperSlide, Swiper } from "swiper/react";
import { imagesMitra } from "../../../util/dataMitraVoucher";
import MitraImages from "../mitraImages"

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
              <MitraImages id={item.id} title={item.title} image={item.image} />
            </SwiperSlide>
          ))}
          <h2 className="text-dark px-4">Scroll ke kanan {'>>>>'}</h2>
        </Swiper>
      </div>
    </div>
    )
}

export default MitraVoc;