import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black font-primary py-12 px-4 lg:px-10">
      <svg
        className="absolute top-0 left-[-20px] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:left-[-60px] md:w-[500px] md:h-[500px] text-black"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:ms-60 items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/img/logo.png" alt="Logo" className="w-32 sm:w-40 md:w-48 object-contain mb-2" />
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl">PT. Indekstat Konsultan Indonesia</h2>
        </div>

        <div className="text-center md:text-left max-w-md text-sm sm:text-base leading-relaxed">
          <p>
            SCBD, Marquee Equity Tower Lantai 37, <br />
            Jl. Jend. Sudirman Kav 52-53, Senayan, <br />
            Kec. Kby. Baru, Kota Jakarta Selatan, <br />
            Daerah Khusus Ibukota Jakarta 12190
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-lg sm:text-xl mb-2">Media Sosial</h2>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-pink-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-sky-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-red-400 transition-colors">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
