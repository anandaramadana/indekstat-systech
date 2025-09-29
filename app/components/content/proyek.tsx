import { useState } from "react";

const pulauData = [
  { id: 1, name: "Jawa", image: "/img/proyek/jawa.png", projects: 35 },
  { id: 2, name: "Sumatera", image: "/img/proyek/sumatra.png", projects: 20 },
  { id: 3, name: "Kalimantan",image: "/img/proyek/kalimantan.png", projects: 10,},
  { id: 4, name: "Sulawesi", image: "/img/proyek/sulawesi.png", projects: 12 },
  { id: 5, name: "Papua", image: "/img/proyek/papua.png", projects: 8 },
  { id: 6, name: "Bali", image: "/img/proyek/bali.png", projects: 6,},
  { id: 7, name: "Nusa Tenggara", image: "/img/proyek/nusatenggara.png", projects: 6,},
];

const clientLogos = [
  "img/client/client1.png",
  "img/client/client2.png",
  "img/client/client3.png",
  "img/client/client4.jpeg",
  "img/client/client5.png",
  "img/client/client6.png",
  "img/client/client7.png",
  "img/client/client8.png",
  "img/client/client9.png",
  "img/client/client10.png",
  "img/client/client11.png",
  "img/client/client12.png",
  "img/client/client13.png",
  "img/client/client14.png",
  "img/client/client15.png",
  "img/client/client16.png",
  "img/client/client17.svg",
  "img/client/client18.png",
  "img/client/client19.png",
  "img/client/client20.png",
  "img/client/client21.png",
  "img/client/client22.png",
  "img/client/client23.svg",
  "img/client/client24.png",
  "img/client/client25.png",
  "img/client/client26.png",
  "img/client/client27.png",
  "img/client/client28.png",
  "img/client/client29.png",
  "img/client/client30.png",
];

export default function Projects() {
    const [selectedPulau, setSelectedPulau] = useState(null);

    const handleChange = (e) => {
        const pulau = pulauData.find((p) => p.name === e.target.value);
        setSelectedPulau(pulau);
};

    return (
        <section className="relative bg-white overflow-hidden font-primary text-black py-12 px-4 sm:py-16 sm:px-6 md:py-26 md:px-26">
            <svg
                className="absolute top-0 left-[-20px] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:left-[-60px] md:w-[500px] md:h-[500px] text-black"
                viewBox="0 0 500 500"
                preserveAspectRatio="none"
            >
                <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
            </svg>

            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 px-0 sm:px-2 md:px-40">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Proyek <span className="text-orange-500 font-primary">Indekstat</span></h2>
                <select onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 bg-white w-full sm:w-auto">
                <option value="">Pilih Pulau</option>
                {pulauData.map((pulau) => (
                    <option key={pulau.id} value={pulau.name}>
                    {pulau.name}
                    </option>
                ))}
                </select>
            </div>

            <div className="flex justify-center mb-10 sm:mb-16">
                {selectedPulau ? (
                <div className="text-center">
                    <img
                    src={selectedPulau.image}
                    alt={selectedPulau.name}
                    className="mx-auto mb-4 w-full max-w-[300px] sm:max-w-[400px] md:max-w-full object-contain"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold">{selectedPulau.name}</h3>
                    <p className="text-sm sm:text-base">{selectedPulau.projects} Proyek</p>
                </div>
                ) : (
                <div className="text-center">
                    <img
                    src="public/img/proyek/indonesia.png"
                    alt="Indonesia"
                    className="mx-auto mb-4 w-full max-w-[300px] sm:max-w-[400px] md:max-w-full object-contain"
                    />
                </div>
                )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Klien <span className="text-orange-500 font-primary">Indekstat</span></h2>
            <div className="overflow-hidden">
                <div className="flex animate-scroll gap-6 sm:gap-12">
                {clientLogos.map((logo, idx) => (
                    <img
                    key={idx}
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    className="h-12 sm:h-16 w-auto object-contain"
                    />
                ))}
                {clientLogos.map((logo, idx) => (
                    <img
                    key={idx + clientLogos.length}
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    className="h-12 sm:h-16 w-auto object-contain"
                    />
                ))}
                </div>
            </div>

            <svg
                className="
                absolute bottom-[-1px] right-0 
                w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] 
                text-black rotate-180
                "
                viewBox="0 0 500 500"
                preserveAspectRatio="none"
            >
                <path d="M500,0 L0,0 L0,500 A500,500 0 0,1 500,0 Z" fill="currentColor" />
            </svg>

            <style jsx>{`
                @keyframes scroll {
                0% {
                    transform: translateX(0%);
                }
                100% {
                    transform: translateX(-50%);
                }
                }
                .animate-scroll {
                animation: scroll 20s linear infinite;
                }
            `}</style>
        </section>
    );
}
