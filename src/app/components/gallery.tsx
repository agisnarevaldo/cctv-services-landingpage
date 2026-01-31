/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FjEE3RrrDwU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Image from "next/image"

export default function Gallery() {
    const [gridLayout, setGridLayout] = useState("grid-cols-2")
    const toggleGridLayout = () => {
        setGridLayout(gridLayout === "grid-cols-2" ? "grid-cols-3" : "grid-cols-2")
    }

    const images = [
        { src: "/g1.jpeg", alt: "Instalasi CCTV Rumah" },
        { src: "/g2.jpeg", alt: "Pemasangan CCTV Kantor" },
        { src: "/g3.jpeg", alt: "Setup DVR CCTV" },
        { src: "/g4.jpeg", alt: "Konfigurasi Sistem CCTV" },
        { src: "/g5.jpeg", alt: "Hasil Instalasi CCTV" },
    ]

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-4 md:px-6 lg:py-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Galeri Hasil Kerja</h2>
            </div>
            <div className={`grid gap-4 ${gridLayout}`}>
                {images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white font-semibold text-lg">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}