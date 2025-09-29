export default function WhyChooseUs() {
  return (
    <section className="relative bg-black overflow-hidden text-white py-12 px-4 md:py-30 md:px-20">
      <svg
        className="
          absolute top-0 left-[-20px] 
          w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:left-[-60px] md:w-[500px] md:h-[500px] 
          text-white
        "
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
      </svg>

      <div className="container mx-auto px-2 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 mb-8">
          <div className="flex-1 border-t border-gray-700"></div>
          <h2 className="text-2xl md:text-4xl font-primary font-bold text-center">
            Kenapa Memilih <span className="text-orange-500 font-primary">Indekstat</span>
          </h2>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 px-10 md:py-10 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 relative mb-2 p-6 md:p-10 flex flex-col rounded-md">
            <div className="absolute top-0 right-0 w-12 h-1 sm:w-16 sm:h-1 bg-orange-500"></div>
            <div className="absolute top-0 right-0 w-1 h-12 sm:w-1 sm:h-16 bg-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-1 sm:w-16 sm:h-1 bg-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-1 h-12 sm:w-1 sm:h-16 bg-orange-500"></div>

            <div className="flex flex-col sm:flex-row items-start">
              <img
                src="/public/img/database.png"
                alt="Kebijakan berbasis data"
                className="w-12 h-12 sm:w-16 sm:h-16 mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Pentingnya Kebijakan yang Efektif dan Berbasis Data
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Formulasi kebijakan perlu didasarkan pada data yang akurat dan analisis
                  mendalam, sehingga implementasi menjadi lebih efektif.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 relative p-6 sm:p-8 md:p-10 flex flex-col rounded-md">
            <div className="absolute top-0 right-0 w-12 h-1 sm:w-16 sm:h-1 bg-orange-500"></div>
            <div className="absolute top-0 right-0 w-1 h-12 sm:w-1 sm:h-16 bg-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-1 sm:w-16 sm:h-1 bg-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-1 h-12 sm:w-1 sm:h-16 bg-orange-500"></div>

            <div className="flex flex-col sm:flex-row items-start">
              <img
                src="/public/img/inovasi.png"
                alt="Inovasi metodologi riset"
                className="w-12 h-12 sm:w-16 sm:h-16 mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold mb-2">Inovasi Metodologi Riset</h3>
                <p className="text-gray-300 text-sm">
                  Menggunakan Novelty dan Reliability untuk hasil riset valid dan
                  terpercaya, yang mendukung keputusan strategis anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="
          absolute bottom-0 right-0 
          w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] 
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
