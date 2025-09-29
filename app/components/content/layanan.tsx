import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const layananData = [
  {
    id: 1,
    title: "Riset dan Studi Kebijakan Publik",
    desc: "Pengukuran indeks, analisis ruang investasi, evaluasi & analisis dampak, survei opini publik.",
    image: "/img/layanan1.jpeg",
  },
  {
    id: 2,
    title: "Konsultasi Politik",
    desc: "Visualisasi identitas publik, strategi politik digital, analisis dapil.",
    image: "/img/layanan2.jpeg",
  },
  {
    id: 3,
    title: "Riset Manajemen Bisnis",
    desc: "Studi kelayakan, rencana bisnis dan pembangunan, analisis penelitian pasar & strategi marketing, tata kelola organisasi.",
    image: "/img/layanan3.jpg",
  },
  {
    id: 4,
    title: "Data Management & Analytics",
    desc: "Verifikasi data dan manajemen, pelatihan data.",
    image: "/img/layanan4.jpg",
  },
];

const partnerLogos = [
  "/img/partner1.png",
  "/img/partner2.png",
  "/img/partner3.png",
  "/img/partner4.png",
];

export default function Layanan() {
  return (
    <section id="layanan" className="relative bg-white overflow-hidden text-black py-16 md:py-35 px-6 md:px-26 font-primary">
        <svg
            className="absolute top-0 left-[-20px] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:left-[-60px] md:w-[500px] md:h-[500px] text-black"
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
        >
            <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
        </svg>

        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="flex flex-col justify-center md:order-2 mb-6 md:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center md:text-left">
                Layanan <span className="text-orange-500 font-primary">Indekstat</span>
                </h2>
                <p className="text-black text-base sm:text-lg text-center md:text-left">
                Kami menyediakan berbagai layanan berbasis riset, strategi, dan
                analitik untuk membantu instansi pemerintah, organisasi politik,
                maupun perusahaan swasta mencapai tujuan mereka secara efektif.
                </p>
            </div>

            <div className="relative w-full md:order-1">
                <Swiper
                spaceBetween={16}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="layanan-swiper"
                >
                {layananData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 transition h-96 flex flex-col">
                            <img
                            src={item.image}
                            alt={item.title}
                            className="mx-auto mb-4 w-full sm:w-64 md:w-80 rounded-lg object-contain"
                            />
                            <div className="mt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            </div>

            <div className="mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
                Partner <span className="text-orange-500 font-primary">Indekstat</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {partnerLogos.map((logo, idx) => (
                <img
                    key={idx}
                    src={logo}
                    alt={`Partner ${idx + 1}`}
                    className="h-12 sm:h-16 w-auto object-contain"
                />
                ))}
            </div>
            </div>
        </div>

        <svg
            className="absolute bottom-[-1px] right-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] text-black rotate-180"
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
        >
            <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
        </svg>
</section>
  );
}


