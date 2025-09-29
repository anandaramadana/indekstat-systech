export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white overflow-hidden py-12 px-4 sm:py-16 sm:px-6 md:py-26 md:px-20">
      <svg
        className="
          absolute top-0 left-[-20px] 
          w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:left-[-60px] md:w-[500px] md:h-[500px] 
          text-black
        "
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
      </svg>

      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="public/img/about.png"
              alt="Tentang Kami"
              className="w-[200px] sm:w-[300px] md:w-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-primary font-bold text-gray-900 mb-4 sm:mb-6">
              Tentang <span className="text-orange-500 font-primary">Indekstat</span>
            </h2>
            <p className="text-sm sm:text-base md:text-gray-700 mb-6 leading-relaxed font-primary">
              Indekstat adalah konsultan berpengalaman di bidang kebijakan publik, politik, dan bisnis
              yang mengandalkan data akurat serta teknologi canggih sebagai fondasi utama dalam mendukung
              pengambilan keputusan yang strategis.
            </p>
            <button className="bg-orange-500 text-white font-primary font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition text-sm sm:text-base">
              Pengalaman <span className="text-white font-primary">Indekstat</span>
            </button>
          </div>
        </div>
      </div>

      <svg
        className="
          absolute bottom-0 right-0 
          w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] 
          text-black rotate-180
        "
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
