/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FjEE3RrrDwU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
// import { Button } from "@/components/ui/button"

export default function Gallery() {
    const [gridLayout, setGridLayout] = useState("grid-cols-2")
    const toggleGridLayout = () => {
        setGridLayout(gridLayout === "grid-cols-2" ? "grid-cols-3" : "grid-cols-2")
    }
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-4 md:px-6 lg:py-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Image Gallery</h2>
                {/*<Button onClick={toggleGridLayout} variant="outline">*/}
                {/*    {gridLayout === "grid-cols-2" ? "3 Columns" : "2 Columns"}*/}
                {/*</Button>*/}
            </div>
            <div className={`grid gap-4 ${gridLayout}`}>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src="/g1.jpeg" alt="Image 1" width={600} height={400} className="w-full h-60 object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {/*<p className="text-white font-semibold text-lg">Caption 1</p>*/}
                </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                <img src="/g2.jpeg" alt="Image 2" width={600} height={400} className="w-full h-60 object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {/*<p className="text-white font-semibold text-lg">Caption 2</p>*/}
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src="/g3.jpeg" alt="Image 3" width={600} height={400} className="w-full h-60 object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {/*<p className="text-white font-semibold text-lg">Caption 3</p>*/}
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src="/g4.jpeg" alt="Image 4" width={600} height={400} className="w-full h-60 object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {/*<p className="text-white font-semibold text-lg">Caption 4</p>*/}
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                    <img src="/g5.jpeg      " alt="Image 5" width={600} height={400} className="w-full h-60 object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {/*<p className="text-white font-semibold text-lg">Caption 5</p>*/}
                    </div>
                </div>

            </div>
        </div>
    )
}