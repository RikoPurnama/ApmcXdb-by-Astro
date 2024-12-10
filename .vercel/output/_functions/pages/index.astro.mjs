/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as createAstro, f as renderComponent } from '../chunks/astro/server_jPH76rp6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_Bg1sMzxM.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import 'clsx';
import { BiSignal4 } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { IoConstructOutline, IoTicketOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
/* empty css                                 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowRight } from 'react-icons/go';
export { renderers } from '../renderers.mjs';

const Intro = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full h-screen md:h-[66vh] lg:h-[93vh] py-32 md:flex md:items-center", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-wrap", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-[60%] px-8", children: /* @__PURE__ */ jsxs("div", { className: "md:mt-10 lg:mt-0", children: [
      /* @__PURE__ */ jsx("h6", { className: "text-primary font-bold pb-1", children: "#PakaiAPMC Pasti Cepat" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl lg:text-4xl font-bold text-slate-900", children: [
        "Internet ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "murah" }),
        " dirumah Untuk Kebutuhan Digital Anda"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "py-4 text-slate-500", children: [
        "Apakah Anda mencari solusi terpercaya untuk meningkatkan konektivitas internet di tempat Anda? Kami di ApmcXdb siap membantu Anda menghadirkan jaringan WiFi berkualitas tinggi untuk memenuhi kebutuhan akses internet Anda.",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pb-6", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/more",
            className: "bg-primary text-white px-4 py-2 hover:shadow-[0_0_40px_-15px_rgba(6,55,164,1)] transition-shadow duration-300 ease-in-out rounded-md",
            children: "Selengkapnya"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#Product",
            className: "text-primary border border-primary bg-white px-4 py-2 shadow-[0_0_40px_-15px_rgba(6,55,164,1)] hover:shadow-none transition-shadow duration-300 ease-in-out  rounded-md",
            children: "Lihat Layanan"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-[40%]", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "absolute md:top-[6.15rem] right-0 w-[22rem] md:w-[25rem] lg:w-[32rem]",
        src: "/hero.webp",
        alt: "Hero"
      }
    ) })
  ] }) }) });
};

const supabaseUrl = "https://yxotzoevqwkognurpchv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4b3R6b2V2cXdrb2dudXJwY2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NTA2NjcsImV4cCI6MjA0ODUyNjY2N30.0YstzNH0Ze9b9vffIWGaWAMS82BqhDqEmC_I3kYQQHg";
const supabase = createClient(supabaseUrl, supabaseKey);

const AddPromotion = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleAddPromotion = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      let imageUrl = null;
      if (image) {
        const fileName = `${Date.now()}-${image.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage.from("promotion images").upload(fileName, image);
        if (uploadError) {
          throw new Error(`Gagal mengunggah gambar: ${uploadError.message}`);
        }
        imageUrl = `${process.env.PUBLIC_SUPABASE_URL}/storage/v1/object/public/promotion images/${uploadData?.path}`;
      }
      const { data, error } = await supabase.from("Promotion").insert([
        {
          title,
          description,
          imageUrl
        }
      ]).select();
      if (error) {
        throw new Error(`Gagal menyimpan data promosi: ${error.message}`);
      }
      setMessage("Promosi berhasil ditambahkan!");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      setMessage(error.message || "Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[500px] bg-white mx-auto mt-10 p-5 border rounded shadow-xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Tambah Promo" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleAddPromotion, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block font-semibold mb-1", children: "Judul Promosi" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            required: true,
            className: "w-full border px-3 py-2 rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block font-semibold mb-1", children: "Deskripsi (Opsional)" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: description,
            onChange: (e) => setDescription(e.target.value),
            className: "w-full border px-3 py-2 rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block font-semibold mb-1", children: "Gambar (Opsional)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            onChange: (e) => setImage(e.target.files?.[0] || null),
            className: "w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isLoading,
          className: "bg-blue-500 text-white px-4 py-2 rounded",
          children: isLoading ? "Menambahkan..." : "Tambah Promosi"
        }
      )
    ] }),
    message && /* @__PURE__ */ jsx("p", { className: "mt-4 text-green-500", children: message })
  ] });
};

const fetchPromotions = async () => {
  const { data, error } = await supabase.from("Promotion").select("*");
  if (error) {
    console.error("Gagal mengambil data:", error.message);
    return [];
  }
  return data || [];
};
const fetchClients = async () => {
  const { data, error } = await supabase.from("Total_Clients").select("*");
  if (error) {
    console.error("Gagal mengambil data:", error.message);
    return [];
  }
  return data || [];
};

const PromotionList = () => {
  const [promotions, setPromotions] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      const { data, error: error2 } = await supabase.auth.getSession();
      if (error2 || !data.session) {
        setUser(null);
      } else {
        setUser(data.session.user);
      }
    };
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });
    return () => {
      authListener.subscription.unsubscribe();
      isMounted = false;
    };
  }, []);
  const handleDelete = async (promotionId, imageUrl) => {
    try {
      if (!window.confirm("Apakah Anda yakin ingin menghapus promo ini?"))
        return;
      if (imageUrl) {
        const fileName = imageUrl.split("/").pop();
        const { error: storageError } = await supabase.storage.from("promotion images").remove([fileName]);
        if (storageError) {
          throw new Error(`Gagal menghapus gambar: ${storageError.message}`);
        }
      }
      const { error: dbError } = await supabase.from("Promotion").delete().eq("id", promotionId);
      if (dbError) {
        throw new Error(`Gagal menghapus promo: ${dbError.message}`);
      }
      setPromotions((prev) => prev.filter((promo) => promo.id !== promotionId));
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menghapus promo.");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Loading..." });
  }
  if (error) {
    return /* @__PURE__ */ jsx("p", { children: error });
  }
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex relative w-full overflow-hidden my-12", children: /* @__PURE__ */ jsx("div", { className: "w-full flex gap-20 md:gap-32 lg:gap-40 animate-loop-scroll", children: promotions.map((promotion) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-2 text-slate-950 flex flex-col items-stretch relative",
      children: [
        !promotion.imageUrl && /* @__PURE__ */ jsx("p", { className: "w-80 text-lg md:text-xl lg:text-2xl font-serif tracking-widest font-semibold text-primary", children: promotion.title }),
        promotion.imageUrl && /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            className: "max-w-80 h-20 md:h-28 object-cover rounded-xl",
            src: promotion.imageUrl,
            alt: promotion.title
          }
        ),
        user && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleDelete(promotion.id, promotion.imageUrl),
            className: "w-auto py-0 px-2 text-black absolute -top-0 -right-2 backdrop-blur-md rounded shadow z-50",
            children: "X"
          }
        )
      ]
    },
    promotion.id
  )) }) }) });
};

const About = () => {
  const [user, setUser] = useState(null);
  const [addPromos, setAddPromos] = useState(false);
  const { scrollYProgress } = useScroll();
  const minX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        setUser(null);
      } else {
        setUser(data.session.user);
      }
    };
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "overflow-hidden mt-52 md:mt-32 lg:mt-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          style: { x: minX },
          className: "flex items-center text-[2em] font-mono font-semibold z-10 m-0 whitespace-nowrap mt-auto ml-8 transition-all duration-[2s] ease-[cubic-bezier(0.165,0.84,0.44,1)]",
          children: "Promo"
        }
      ),
      user ? /* @__PURE__ */ jsx(
        motion.button,
        {
          style: { x: minX },
          onClick: () => {
            setAddPromos(true);
          },
          className: "border border-dark px-4 rounded-lg z-10",
          children: "Tambahkan Promo"
        }
      ) : ""
    ] }),
    /* @__PURE__ */ jsx(PromotionList, {}),
    addPromos ? /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          setAddPromos(false);
        },
        className: "w-full h-[100vh] bg-dark/50 flex justify-center items-center fixed left-0 top-0 z-[99]",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsx(AddPromotion, {})
          }
        )
      }
    ) : ""
  ] });
};

const $$Astro$1 = createAstro();
const $$CardAboutProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardAboutProduct;
  const { id, title, image, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div${addAttribute(id, "id")} class="w-full max-w-[375px] md:max-w-[334px]"> <div class="w-full rounded-lg min-w-[215px] lg:w-40 h-56 md:h-60 lg:h-72 py-6 px-6 bg-white flex flex-col md:items-center"> <div class="flex items-center md:flex-col"> <div${addAttribute({ backgroundImage: `url(${image})` }, "style")} class="w-[100px] h-[100px] min-w-[100px] bg-gray rounded-full object-cover bg-center bg-cover"></div> <h3 class="text-lg font-semibold py-2 pb-2 pl-6 md:pl-0"> ${title} </h3> </div> <p class="text-xs lg:text-sm md:text-center text-text-gray py-6 md:py-0"> ${description} </p> </div> </div> </div>`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/components/card/cardAboutProduct.astro", void 0);

const $$AboutProduct = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-32 bg-grey"> <div class="container mx-auto lg:px-32"> <div class="w-full px-8"> <p class="text-base font-bold text-center text-primary">Keunggulan</p> <h1 class="text-2xl md:text-3xl font-bold text-center py-1">
Nikmati <span class="text-primary">#Wifi</span> Fiber Ultra Cepat dan Unlimited
</h1> <p class="text-center text-slate-600 py-2">
Kami provider internet dan wifi rumah yang dapat memahami kebutuhan
          Anda. Kini bukan hanya internet yang cepat tapi juga dengan fitur yang
          lengkap dan harga yang murah.
</p> <div class="w-full flex flex-wrap gap-8 justify-center items-center py-5"> ${renderComponent($$result, "CardAboutProduct", $$CardAboutProduct, { "id": "1", "title": "100% Fiber Optic", "image": "/fiberoptic.jpg", "description": "apmcXdb menggunakan teknologi jaringan fiber optik sampai ke dalam rumah (FTTH)" })} ${renderComponent($$result, "CardAboutProduct", $$CardAboutProduct, { "id": "2", "title": "Modem WIFI", "image": "/modem.jpg", "description": "apmcXdb memiliki modem wifi untuk koneksi internet yang stabil dan cepat." })} ${renderComponent($$result, "CardAboutProduct", $$CardAboutProduct, { "id": "3", "title": "Tanpa Kuota", "image": "/nokuota.jpg", "description": "apmcXdb tanpa kuota, jangkauan internet yang luas dan cepat." })} ${renderComponent($$result, "CardAboutProduct", $$CardAboutProduct, { "id": "4", "title": "WiFI Unlimited", "image": "/unlimited.jpg", "description": "Wi-Fi dual band pada Level tertentu agar koneksi internet kamu stabil." })} </div> </div> </div> </section>`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/components/aboutProduct.astro", void 0);

const Price = [
  {
    id: 1,
    title: "Paket Merakyat",
    harga: 1e5,
    discount: 125e3,
    speed: "Up to 3Mbps",
    device: "5",
    penggunaan: "Youtube | Sosmed | Browsing",
    border: "border border-grey",
    fontSize: "md:text-2xl",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Merakyat%20dengan%20bandwidth%20Up%20to%203Mbps%20Rp.%20100.000`
  },
  {
    id: 2,
    title: "Paket Rakyat",
    harga: 15e4,
    discount: 17e4,
    speed: "Up to 4Mbps",
    device: "7",
    penggunaan: "Streaming | Youtube | Sosmed | Browsing | Keluarga",
    border: "border border-grey",
    fontSize: "md:text-2xl",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Rakyat%20dengan%20bandwidth%20Up%20to%204Mbps%20Rp.%20150.000`
  },
  {
    id: 3,
    title: "Paket Iot",
    harga: 17e4,
    discount: 19e4,
    speed: "Up to 5Mbps",
    device: ">10",
    penggunaan: "Streaming | Youtube | Sosmed | Browsing | Keluarga | Game ",
    border: "border border-grey",
    fontSize: "md:text-2xl",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Iot%20dengan%20bandwidth%20Up%20to%205Mbps%20Rp.%20170.000`
  },
  {
    id: 4,
    title: "Paket Revolusi Industri",
    harga: 2e5,
    discount: 22e4,
    speed: "Up to 7Mbps",
    device: ">15",
    penggunaan: "Streaming | Youtube | Sosmed | Browsing | Keluarga | Game | Kantor ",
    border: "border border-grey",
    fontSize: "md:text-2xl",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Revolusi%20Industri%20dengan%20bandwidth%20Up%20to%207Mbps%20Rp.%20200.000`
  },
  {
    id: 5,
    title: "Paket Sedulur",
    harga: 3e5,
    discount: 35e4,
    speed: "Up to 12Mbps",
    device: ">20",
    penggunaan: "Streaming | Youtube | Sosmed | Browsing | Game | Kantor | Semua Bisa",
    border: "border border-grey",
    fontSize: "md:text-2xl",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Sedulur%20dengan%20bandwidth%20Up%20to%2012Mbps%20Rp.%20300.000`
  },
  {
    id: 6,
    title: "Paket Sekolah lite",
    harga: 15e4,
    discount: 2e5,
    speed: "Up to 5Mbps",
    device: ">10",
    penggunaan: "- Disesuaikan dengan kebutuhan -",
    border: "border border-primary-transparent",
    fontSize: "md:text-2xl",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Sekolah%20lite%20dengan%20bandwidth%20Up%20to%205Mbps%20Rp.%20150.000`
  },
  {
    id: 7,
    title: "Paket Sekolah wow",
    harga: 3e5,
    discount: 35e4,
    speed: "Realtime Speed 10Mbps",
    device: ">20",
    penggunaan: "- Semua Pasti Cepat -",
    border: "border border-primary-transparent",
    fontSize: "md:text-base",
    toChat: `https://wa.me/6289677600427?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Sekolah%20Wow%20dengan%20bandwidth%20RealTime%20Speed%2010Mbps%20Rp.%20300.000`
  }
];

function Card({ id }) {
  return /* @__PURE__ */ jsxs(
    Swiper,
    {
      spaceBetween: -10,
      slidesPerView: 3,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 70
        }
      },
      children: [
        Price.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { className: "py-9 px-7", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `w-full max-w-[320px] min-w-[270px] md:w-[19rem] h-[30rem] py-6 px-8 bg-white relative rounded-xl ${item.border} rounded-xl `,
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-sm text-dark", children: item.title }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `text-2xl font-semibold text-primary pb-2 ${item.fontSize}`,
                  children: item.speed
                }
              ),
              /* @__PURE__ */ jsx("hr", { className: "opacity-100 text-black" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 line-through py-2", children: item.discount.toLocaleString("ID", {
                style: "currency",
                currency: "IDR"
              }) }),
              /* @__PURE__ */ jsxs("p", { className: "text-base font-medium text-text-gray", children: [
                "Rp",
                /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-medium text-dark", children: item.harga.toLocaleString("ID") }),
                "/ Bulan"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full py-4 md:py-5", children: [
                /* @__PURE__ */ jsx("p", { children: "Benefit:" }),
                /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 pt-2", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(BiSignal4, { className: "text-primary" }),
                    " Internet Unlimited"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(BsPhone, { className: "text-primary" }),
                    " Ideal untuk",
                    " ",
                    item.device,
                    " device"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(IoConstructOutline, { className: "text-primary" }),
                    " Gratis Installasi"
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-base py-2 pt-4", children: "Penggunaan :" }),
                /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: item.penggunaan }) })
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "inline-block absolute bottom-6 right-8 left-8 text-center py-3 px-6 bg-primary text-white hover:shadow-[0_0_40px_-15px_rgba(6,55,164,0.4)] transition-shadow duration-300 ease-in-out rounded-xl mt-5",
                  href: item.toChat,
                  target: "_blank",
                  children: "Langganan Sekarang"
                }
              )
            ]
          }
        ) }, item.id)),
        /* @__PURE__ */ jsxs("h2", { className: "text-primary px-7", children: [
          "Scroll Ke Kanan ",
          ">>>>"
        ] })
      ]
    }
  );
}
const Product = () => {
  return /* @__PURE__ */ jsx("section", { id: "Product", className: "pt-32", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto lg:px-32", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("h6", { className: "text-base font-bold text-center text-primary", children: "Harga dan Layanan" }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-3xl font-bold text-center py-1", children: "Tentukan Bandwidht Sesuai Kebutuhanmu" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-slate-600 py-2 pb-6", children: "Pilih paket yang sesuai dengan kebutuhanmu, Sekarang saatnya menikmati kecepatan baru internet fiber ultra cepat dan unlimited dari APMC Net." }),
    /* @__PURE__ */ jsx("div", { className: "w-[26rem] sm:w-[28rem] md:w-[27rem] lg:w-[34rem] 2xl:w-[34rem] h-[34.5rem] absolute -left-11 bg-primary rounded-3xl" }),
    [0].map((price) => /* @__PURE__ */ jsx(Card, { id: price }, price))
  ] }) }) });
};

function useMediaQuery(query, defaultValue = false) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  });
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleChange = () => {
      setMatches(matchMedia.matches);
    };
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}

const Nav = () => {
  const matches = useMediaQuery("(min-width: 1280px)");
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        setUser(null);
      } else {
        setUser(data.session.user);
      }
    };
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut({ scope: "local" });
    await supabase.auth.signOut();
    if (error) {
      console.error("Gagal logout:", error.message);
    } else {
      localStorage.clear();
      window.location.href = "/";
    }
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `w-full h-16 md:h-20 fixed bg-white shadow-[0_0_2px_0_rgb(0,0,0,0.2)] z-40`,
      children: /* @__PURE__ */ jsxs("div", { className: "h-full container mx-auto px-8 lg:px-32 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "text-xl lg:text-2xl font-bold text-black", children: [
          "apmcXdb",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Net" })
        ] }),
        matches && /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-between items-center gap-6", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "hover:text-primary transition-all duration-200 ease-in-out",
              href: "/",
              children: [
                " ",
                "Home"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "hover:text-primary transition-all duration-200 ease-in-out",
              href: "#Product",
              children: "Product & Layanan"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "hover:text-primary transition-all duration-200 ease-in-out",
              href: "#Region",
              children: "Cakupan Wilayah"
            }
          ) })
        ] }) }),
        !matches && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setToggle((prevToggle) => !prevToggle),
            className: "space-y-1.5 z-50",
            name: "HumburgerMenu",
            children: [
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  animate: { rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 },
                  className: "block w-8 h-0.5 bg-black rounded"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  animate: { width: toggle ? 0 : 24 },
                  className: "block w-6 h-0.5 bg-black rounded",
                  children: " "
                }
              ),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  animate: {
                    rotateZ: toggle ? -45 : 0,
                    y: toggle ? -8 : 0,
                    width: toggle ? 32 : 16
                  },
                  className: "block w-4 h-0.5 bg-black rounded",
                  children: " "
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: toggle && !matches && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 35 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 35 },
            className: "w-full h-screen fixed bottom-0 left-0 flex justify-center items-center bg-white text-black",
            children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-16 text-lg", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { onClick: () => setToggle(false), href: "/", children: [
                " ",
                "Home"
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { onClick: () => setToggle(false), href: "#Product", children: "Product & Layanan" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { onClick: () => setToggle(false), href: "#Region", children: "Cakupan Wilayah" }) }),
              user && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleLogout,
                  className: "w-full py-1 border border-dark rounded-md",
                  children: "Log out"
                }
              ) })
            ] })
          }
        ) }),
        matches && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "py-2 px-4 bg-primary text-white rounded-md",
              href: "https://wa.me/6289677600427",
              target: "_blank",
              children: "Hubungi Kami"
            }
          ),
          user && /* @__PURE__ */ jsx("button", { onClick: handleLogout, className: "font-semibold py-2 px-4 border border-dark rounded-md", children: "Log out" })
        ] })
      ] })
    }
  );
};

const $$Astro = createAstro();
const $$VoucherCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VoucherCard;
  const { title, speed, discount, harga, fontSize, toChat, voucher, device, penggunaan } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`w-[320px] min-w-[270px] md:w-[19rem] h-[30rem] py-6 px-8 bg-white relative shadow-blueOutline border border-primary-transparent rounded-xl z-10`, "class")}> <h1 class="text-sm text-dark">${title}</h1> <p${addAttribute(`text-2xl font-semibold text-primary pb-2 ${fontSize}`, "class")}> ${speed} </p> <hr class="opacity-100 text-black"> <p class="text-slate-400 line-through py-2"> ${discount.toLocaleString("ID", {
    style: "currency",
    currency: "IDR"
  })} </p> <p class="text-base font-medium text-text-gray">
Rp
<span class="text-3xl md:text-4xl font-medium text-dark"> ${harga.toLocaleString("ID")} </span>
/ Bulan
</p> <div class="w-full py-4 md:py-5"> <p>Benefit:</p> <ul class="flex flex-col gap-2 pt-2"> <li> <p class="flex items-center gap-2"> ${renderComponent($$result2, "BiSignal4", BiSignal4, { "className": "text-primary" })} Internet Unlimited
</p> </li> <li> <p class="flex items-center gap-2"> ${renderComponent($$result2, "IoTicketOutline", IoTicketOutline, { "className": "text-primary" })} ${voucher} </p> </li> <li> <p class="flex items-center gap-2"> ${renderComponent($$result2, "BsPhone", BsPhone, { "className": "text-primary" })} ${device} </p> </li> <li> <p class="flex items-center gap-2"> ${renderComponent($$result2, "IoConstructOutline", IoConstructOutline, { "className": "text-primary" })} Gratis Installasi
</p> </li> </ul> <p class="text-base py-2 pt-2">Penggunaan :</p> <div class="flex gap-2"> <p class="text-sm text-slate-500">${penggunaan}</p> </div> </div> <a class="inline-block absolute bottom-6 right-8 left-8 text-center py-3 px-6 bg-primary text-white hover:shadow-[0_0_40px_-15px_rgba(6,55,164,0.4)] transition-shadow duration-300 ease-in-out rounded-xl mt-5"${addAttribute(toChat, "href")} target="_blank">
Langganan Sekarang
</a> </div> ` })}`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/components/card/voucherCard.astro", void 0);

const MitraList = () => {
  const [openMitra, setOpenMitra] = useState(false);
  const arrow = openMitra ? "-rotate-45" : "rotate-45";
  return /* @__PURE__ */ jsxs("div", { onClick: () => setOpenMitra((prev) => !prev), className: "w-full max-w-[320px] md:max-w-[678px] min-w-[270px] px-8 py-4 mt-8 mx-auto bg-primary-transparent-1 border border-primary-transparent rounded-xl cursor-pointer", children: [
    /* @__PURE__ */ jsxs(
      "p",
      {
        className: "flex justify-between items-center",
        children: [
          "Keuntungan dari Mitra adalah",
          " ",
          /* @__PURE__ */ jsx(GoArrowRight, { className: `text-primary text-2xl ${arrow}` })
        ]
      }
    ),
    openMitra && /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, className: "px-8", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-col pt-2 list-decimal list-outside", children: [
      /* @__PURE__ */ jsx("li", { children: "Harga Voucher yang dijual" }),
      /* @__PURE__ */ jsx("li", { children: "Tidak repot ganti password setiap hari" }),
      /* @__PURE__ */ jsx("li", { children: "Jangkauan luas selagi ada sinyal" }),
      /* @__PURE__ */ jsx("li", { children: "Pembayaran Voucher jualan nanti kalau habis" }),
      /* @__PURE__ */ jsx("li", { children: "Tidak ada target" })
    ] }) })
  ] });
};

const $$VoucherProduct = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full py-10"> <div class="w-full mx-auto"> <div class="w-full px-8 relative"> <h4 id="paketmitravoucher" class="text-xl md:text-2xl lg:text-3xl font-bold text-center text-dark py-6">
Paket Mitra Usaha <span class="text-primary">Voucher</span> </h4> <div class="w-full flex flex-wrap justify-center gap-16"> ${renderComponent($$result, "VoucherCard", $$VoucherCard, { "title": "Paket Mitra Penjualan", "speed": "1:1 2Mbps/1Voucher", "discount": 2e5, "harga": 15e4, "voucher": "5 Voucher", "device": "5 Devices", "penggunaan": "- Semua Bisa -", "toChat": "https://wa.me/6285224375422?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Mitra%20Penjualan%20Voucher%20dengan%20bandwidth%20RealTime%20Speed%202Mbps%20Rp.%20150.000" })} ${renderComponent($$result, "VoucherCard", $$VoucherCard, { "title": "Paket Mitra Exlusif", "speed": "1:1 2Mbps/1Voucher", "discount": 35e4, "harga": 3e5, "voucher": "10 Voucher", "device": "10 Devices", "penggunaan": "- Semua Bisa -", "toChat": "https://wa.me/6285224375422?text=Hallo,%20Saya%20datang%20dari%20website%20anda%20ingin%20membahas%20paket%20WiFi%20Mitra%20Exlusif%20Voucher%20dengan%20bandwidth%20RealTime%20Speed%202Mbps%20Rp.%20300.000" })} </div> <div${addAttribute({ backgroundImage: `url('/maskot.webp')` }, "style")} class="w-80 h-96 lg:w-96 lg:h-[32rem] absolute top-0 left-0 bg-cover"></div> <!-- Keuntungan --> ${renderComponent($$result, "MitraList", MitraList, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/react/mitraList.tsx", "client:component-export": "default" })} </div> </div> </div>`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/components/voucherProduct.astro", void 0);

const imagesMitra = [
  {
    id: 1,
    image: "/Irma_voc.webp",
    title: "Mitra Penjualan Vouvher"
  },
  {
    id: 2,
    image: "/Saroh_voc.webp",
    title: "Mitra Penjualan Vouvher"
  },
  {
    id: 3,
    image: "/Istiqomah_voc.webp",
    title: "Mitra Penjualan Vouvher"
  },
  {
    id: 4,
    image: "/Lulu_voc.webp",
    title: "Mitra Penjualan Vouvher"
  }
];

const Mitralmages = (item) => {
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-xl", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "w-full h-auto rounded-xl shadow-md" }) }, item.id);
};

const MitraVoc = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-full px-4 ", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(
    Swiper,
    {
      autoplay: { delay: 1e3 },
      spaceBetween: -10,
      slidesPerView: 1,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
      children: [
        imagesMitra.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { className: "py-4 px-4", children: /* @__PURE__ */ jsx(Mitralmages, { id: item.id, title: item.title, image: item.image }) }, item.id)),
        /* @__PURE__ */ jsxs("h2", { className: "text-dark px-4", children: [
          "Scroll ke Kanan ",
          ">>>>"
        ] })
      ]
    }
  ) }) });
};

const mitraVoucher = () => {
  const [totalClients, setTotalClients] = useState(null);
  const [message, setMessage] = useState(null);
  const [clients, setClients] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (totalClients === null || totalClients <= 0) {
      setMessage("Masukkan jumlah klien yang valid!");
      return;
    }
    try {
      const { data, error } = await supabase.from("Total_Clients").update({ total: totalClients }).eq("id", 1).select();
      if (error) {
        setMessage("Gagal memperbarui jumlah klien!");
      } else {
        setMessage("Jumlah klien berhasil diperbarui!");
        setToggleUpdate(!toggleUpdate);
        fetchClientData();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setMessage("Terjadi kesalahan, coba lagi nanti.");
    }
  };
  const fetchClientData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchClients();
      setClients(data);
    } catch (error) {
      console.error("Gagal memuat data klien:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchClientData();
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        setUser(null);
      } else {
        setUser(data.session.user);
      }
    };
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto lg:px-32", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full px-4 pb-8 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl md:text-3xl font-semibold text-center", children: [
        "apmcXdb",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Net" }),
        " Telah Memiliki",
        " ",
        isLoading ? /* @__PURE__ */ jsx("p", { children: "..." }) : /* @__PURE__ */ jsx(Fragment, { children: clients.map((Clients) => /* @__PURE__ */ jsxs("span", { children: [
          Clients.total,
          "+"
        ] }, Clients.id)) }),
        " ",
        "Clients untuk saat ini"
      ] }),
      /* @__PURE__ */ jsxs("h4", { className: "text-base text-slate-600", children: [
        "Berikut adalah beberapa mitra Voucher dari apmcXdb",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Net" })
      ] }),
      user && /* @__PURE__ */ jsx(Fragment, { children: toggleUpdate ? /* @__PURE__ */ jsxs(
        "form",
        {
          action: "",
          method: "post",
          onSubmit: handleSubmit,
          className: "py-4",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                name: "Update Client",
                id: "Update Client",
                value: totalClients || "",
                onChange: (e) => setTotalClients(parseInt(e.target.value, 10)),
                className: "border p-2 mb-2 w-full",
                placeholder: "Masukkan jumlah klien",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full bg-primary text-white p-2 text-center rounded-md",
                children: "Simpan"
              }
            ),
            message && /* @__PURE__ */ jsx("p", { children: message })
          ]
        }
      ) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setToggleUpdate(true),
          className: "px-4 py-2 mt-4 border border-dark/50 rounded-md",
          children: "Update jumlah Clients"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(MitraVoc, {})
  ] }) }) });
};

const LocationAndService = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { id: "Region", className: "bg-dark py-16 text-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto lg:px-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-wrap md:flex-nowrap md:items-center", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl py-8 px-8 lg:px-0 md:text-2xl font-bold md:max-w-[50%]", children: [
        "apmcXdb",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Net" }),
        " saat ini masih hanya tersedia disekitar wilayah Indramayu"
      ] }),
      /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.368945677043!2d108.2799877!3d-6.4277106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec79eb1b7ab23%3A0x7f692c71183a8097!2sAgen%20BRI%20LINK%20APMC%20COMCELL%20%26%20BIRD!5e0!3m2!1sid!2sid!4v1712821822290!5m2!1sid!2sid", style: { border: 0 }, loading: "eager", referrerPolicy: "no-referrer-when-downgrade", title: "map", className: "w-full md:w-[50%] h-[350px] px-8 lg:px-0" })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "opacity-10 my-16" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-wrap justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[32%] px-8 lg:px-0", children: [
        /* @__PURE__ */ jsxs("h4", { className: "text-xl md:text-2xl font-bold", children: [
          "apmcXdb",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Net" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "py-2 text-slate-500", children: "Yuk pilih apmcXdb untuk memperlancar kegiatan mu dirumah bersama 200+ mitra apmcXdb.net lain nya" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[32%] px-8 lg:px-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(IoLocationOutline, { className: "text-2xl text-primary" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Location" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "py-2 text-slate-500", children: [
          "H7FM+96F, Jalan, Legok, Kec. Lohbener, Kabupaten Indramayu, Jawa Barat 45252",
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[32%] px-8 lg:px-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(IoMailOutline, { className: "text-2xl text-primary" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Apa yang bisa kami bantu?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "py-2 text-slate-500", children: "cvdbnet@gmail.com" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "+62 852 2437 5422" })
      ] })
    ] })
  ] }) }) });
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-6 bg-[#061840]"> <div class="container"> <div class="w-full px-6"> <div class="w-full "> <p class="text-xs  md:text-base text-center text-white">
Copyright © 2024 ApmcXdb<span class="text-primary">Net</span>. All rights reserved.
</p> </div> </div> </div> </section>`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/components/footer.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "Title": "Homepage" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/react/nav", "client:component-export": "default" })} ${renderComponent($$result2, "Intro", Intro, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/react/intro", "client:component-export": "default" })} ${renderComponent($$result2, "Banner", About, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/react/banner", "client:component-export": "default" })} ${renderComponent($$result2, "AboutProduct", $$AboutProduct, {})} ${renderComponent($$result2, "Product", Product, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/react/productPrices", "client:component-export": "default" })} ${renderComponent($$result2, "VoucherProduct", $$VoucherProduct, {})} ${renderComponent($$result2, "MitraVoucher", mitraVoucher, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/mitraVoucher", "client:component-export": "default" })} ${renderComponent($$result2, "Location", LocationAndService, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/projects/Astrojs projects/ApmcProjects/src/components/react/locationAndService", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/projects/Astrojs projects/ApmcProjects/src/pages/index.astro", void 0);

const $$file = "E:/projects/Astrojs projects/ApmcProjects/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
