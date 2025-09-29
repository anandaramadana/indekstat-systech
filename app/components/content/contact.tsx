import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="relative bg-black overflow-hidden text-black py-30 md:py-45 md:px-30 font-primary">
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
            <div className="max-w-6xl mx-auto px-4 md:px-10">
                <div className="bg-orange-500 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
                    
                    <div className="flex items-center gap-2 md:w-1/3 justify-center md:justify-start">
                        <FaWhatsapp className="text-white text-2xl" />
                        <span className="text-lg md:text-xl font-semibold text-white">
                            +62 812-3456-7890
                        </span>
                    </div>

                    {/* Tengah: Copywriting */}
                    <div className="text-center md:w-1/3">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                            Butuh Konsultasi?
                        </h3>
                        <p className="text-sm sm:text-base text-white">
                            Kami siap membantu Anda mendapatkan solusi terbaik.
                        </p>
                    </div>

                    {/* Kanan: Tombol Contact */}
                    <div className="flex justify-center md:w-1/3">
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white hover:bg-gray-200 rounded-lg shadow text-orange-500 font-semibold text-sm sm:text-base"
                        >
                            Contact
                        </a>
                    </div>

                </div>
            </div>  

            <svg
                className="
                absolute bottom-[-1px] right-0 
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