export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden font-primary">
        <svg
            className="
            absolute top-0 left-[-30px] 
            w-[200px] h-[200px]   /* default mobile */
            sm:w-[300px] sm:h-[300px] /* tablet */
            md:left-[-60px] md:w-[500px] md:h-[500px] /* desktop sama seperti aslinya */
            text-white
            "
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
        >
            <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
        </svg>

        {/* <img src="public/img/elements/10.png" alt="" className="absolute bottom-50 right-20 w-12 md:w-20 z-0" /> */}

        <div className="container mx-auto px-13 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="flex justify-center md:justify-end order-1 md:order-2">
                <img
                src="public/img/hero.png"
                alt="Hero"
                className="rounded-xl w-[150%] max-w-none sm:w-[110%] md:w-full object-cover"
                />
            </div>
            <div className="py-15 mt-[-60px] md:ms-20 md:mt-10 order-2 md:order-1">
                <h1 className="text-3xl sm:text-3xl md:text-5xl font-primary font-bold mb-4">
                    Dedikasi Untuk <br />
                    <span className="text-orange-500">Indonesia</span>
                </h1>
                <p className="text-base sm:text-lg font-primary mb-6">
                    Integrasi data ke dalam kebijakan publik dan strategi politik untuk
                m   encapai pembangunan berkelanjutan di Indonesia dan merancang kebijakan yang akurat dan tepat sasaran.
                </p>
                <a
                    href="#"
                    className="inline-block bg-orange-500 text-white px-5 sm:px-6 py-2 rounded-md font-primary font-semibold hover:bg-orange-600 transition"
                >
                    Explore
                </a>
            </div>
        </div>

        <div className="bg-black text-white">
            <div className="container mx-auto px-6 py-6 sm:py-8">
                <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                    <div className="border-t border-gray-700 flex-1"></div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-primary font-bold">
                        Pencapaian <span className="text-orange-500 font-primary">Indekstat</span>
                    </h2>
                    <div className="border-t border-gray-700 flex-1"></div>
                </div>
            </div>

            <div className="container mx-auto pb-15 grid grid-cols-1 sm:grid-cols-3 sm:px-0 md:px-50 gap-6 text-center">
                <div>
                    <p className="text-2xl md:text-4xl font-bold font-primary">
                        9<span className="text-orange-500">+</span>
                    </p>
                    <p className="font-primary text-gray-500 font-medium">Tahun Pengalaman</p>
                </div>
                <div>
                    <p className="text-2xl md:text-4xl font-bold font-primary">4</p>
                    <p className="font-primary text-gray-500 font-medium">Unit Bisnis</p>
                </div>
                <div>
                    <p className="text-2xl md:text-4xl font-bold font-primary">
                        200<span className="text-orange-500">+</span>
                    </p>
                    <p className="font-primary text-gray-500 font-medium">Klien</p>
                </div>
            </div>
        </div>

        <svg
            className="
            absolute bottom-0 right-0 
            w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] 
            text-white rotate-180
            "
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
        >
            <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
        </svg>
    </section>
  );
}
