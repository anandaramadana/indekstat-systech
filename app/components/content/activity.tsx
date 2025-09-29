import React, { useState, useMemo } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./styles.module.css";

const cards = [
    { img: "/img/aktivitas/aktivitas1.jpg", title: "Indekstat Competency Internship", desc: "📢 Program magang ini dirancang khusus untuk memberikan pengalaman praktis, relasi luas, serta kesempatan berkontribusi langsung dalam proyek strategis."},
    { img: "/img/aktivitas/aktivitas2.jpg", title: "Open Recruitment", desc: "📢 Program magang ini dirancang khusus untuk memberikan pengalaman praktis, relasi luas, serta kesempatan berkontribusi langsung dalam proyek strategis."},
    { img: "/img/aktivitas/aktivitas3.jpg", title: "Terima Kasih", desc: "✨ Terima kasih atas antusiasmenya dalam program Indekstat Competency Internship! Pendaftaran program Indekstat Competency Internship resmi di tutup, dengan total jumlah perndaftar sebanyak 1.172 orang 🎉"},
    { img: "/img/aktivitas/aktivitas3.jpg", title: "Terima Kasih", desc: "✨ Terima kasih atas antusiasmenya dalam program Indekstat Competency Internship! Pendaftaran program Indekstat Competency Internship resmi di tutup, dengan total jumlah perndaftar sebanyak 1.172 orang 🎉"},
];

const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
    const [gone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, (i) => ({
        ...to(i),
        from: from(i),
    }));

    const [selectedCard, setSelectedCard] = useState<null | typeof cards[0]>(null);

    const bind = useDrag(
        ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
            const trigger = velocity > 0.2;
            const dir = xDir < 0 ? -1 : 1;
            if (!down && trigger) gone.add(index);
            api.start((i) => {
                if (index !== i) return;
                    const isGone = gone.has(index);
                    const x = isGone
                    ? (200 + window.innerWidth) * dir
                    : down
                    ? mx
                    : 0;
                    const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
                    const scale = down ? 1.1 : 1;
                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
                };
            });
            if (!down && gone.size === cards.length)
                setTimeout(() => {
                gone.clear();
                api.start((i) => to(i));
            }, 600);
        }
    );

    return (
        <>
        {props.map(({ x, y, rot, scale }, i) => (
            <animated.div className={styles.deck} key={i} style={{ x, y }}>
                <animated.div
                    className={styles.cardWrapper}
                    style={{
                        transform: interpolate([rot, scale], trans),
                    }}>
                    <img
                        src={cards[i].img}
                        alt={cards[i].title}
                        className={styles.image}
                        onClick={() => setSelectedCard(cards[i])}
                    />
                    <button {...bind(i)} className={styles.button}>Drag Here</button>
                </animated.div>
            </animated.div>
        ))}

        {selectedCard && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelectedCard(null)}>
                <div className="relative bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setSelectedCard(null)}
                        className="absolute top-4 right-4 text-4xl text-gray-600 hover:text-black"
                        aria-label="Tutup modal"
                    >
                        &times;
                    </button>

                    <img
                        src={selectedCard.img}
                        alt={selectedCard.title}
                        className="w-full md:w-1/2 object-contain rounded-l-lg"
                    />

                    <div className="p-6 flex-1 text-black">
                        <h3 className="text-2xl font-bold mb-4">{selectedCard.title}</h3>
                        <p className="text-gray-700 mb-4">
                            {selectedCard.desc}
                        </p>

                        <a
                            href={`https://instagram.com/akun_anda`} // ganti dengan link instagram kamu
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
                        >
                            View on Instagram
                        </a>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default function Aktivitas() { 
  return (
    <section className="relative bg-black overflow-hidden text-white py-10 md:py-5">
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

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mt-8 sm:mt-10 md:mt-12 font-primary">
            Aktivitas <span className="text-orange-500 font-primary">Indekstat</span>
        </h2>

        <div className={styles.container}>
            <Deck />
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

