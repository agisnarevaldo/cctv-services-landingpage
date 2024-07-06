"use client";

import Image from "next/image";
import {Icon} from "@iconify-icon/react";
import {useEffect, useState} from "react";

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [textOpacity, setTextOpacity] = useState(0);
    const images = [
        "/hero.png",
        "/hero-cctv.jpg",
        "/hero-2.svg",
    ];

    const texts = [
        "Selamat Datang di Website Kami",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Highest Level of Protection"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0); // Start image fade-out
            setTextOpacity(0); // Start text fade-out

            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setOpacity(1); // Start image fade-in
                setTextOpacity(1); // Start text fade-in
            }, 300); // Short delay before changing the image and text and starting fade-in
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative -z-20 w-full min-h-screen ">
            {images.map((src, index) => (
                <Image
                    key={src}
                    className={`absolute top-0 -z-10 rounded-t-2xl transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    src={src}
                    alt="Hero"
                    sizes="100vw"
                    fill
                    style={{objectFit: "cover", objectPosition: "center"}}
                    priority={index === 0} // Preload the first image
                    // loading="lazy"
                />
            ))}
            <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 rounded-t-2xl"></div>
            <div
                className="absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent rounded-t-2xl"></div>
            <div className="absolute top-0 w-full h-screen z-20">
                <div className="flex flex-col items-center justify-around h-full gap-10">
                    <span className=""></span>
                    <div className="flex flex-col items-center gap-5">
                        <h1 className={`text-4xl font-bold text-white transition-opacity duration-1000 ${textOpacity ? 'opacity-100' : 'opacity-0'}`}>
                            {texts[currentImage]}
                        </h1>
                    </div>
                    <div
                        className="bg-gradient-to-b from-secondary to-primary bg-blend-darken bg-opacity-50 mb-10 flex gap-8 py-5 px-8 rounded-xl">
                        <div className="flex items-center gap-2">
                            <Icon className="text-[56px]" icon="streamline:fastforward-clock"/>
                            <div>
                                <h2 className="text-2xl font-bold">24/7</h2>
                                <p>Waktu respon cepat</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon className="text-[56px]" icon="carbon:scis-transparent-supply" flip="horizontal" />
                            <div>
                                <h2 className="text-2xl font-bold">Solusi</h2>
                                <p>Sesuai Kebutuhan Anda</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon className="text-[56px]" icon="bi:house-gear"/>
                            <div>
                                <h2 className="text-2xl font-bold">1234+</h2>
                                <p>System terpasang</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}