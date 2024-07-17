import FloatingChatButton from "@/app/components/floatingChatButton";
import Footer from "@/app/components/footer";
import CardPrice from "@/app/components/cardPrice";

export default function Page() {
    const ezvizProducts = [
        {
            brand: "Ezviz",
            model: "2 Mp",
            price: "IDR. 1.032.000",
            features: [
                "1/3 Progressive Scan CMOS",
                "2.8mm Lens",
                "View Angel: 108°(Diagonal) 91°(Horizontal) 50°(Vertical)",
                "Max. Resolution: 1920 x 1080",
                "H.265",
                "32Gb / 64Gb / 128Gb Kingston Micro SD Card",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/ezviz-p1.svg",
            logoUrl: "/ezviz-logo.png",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Ezviz",
            model: "WiFi 2 Mp",
            price: "IDR. 8.499.000",
            features: [
                "1/4 Progressive Scan CMOS",
                "4mm Lens",
                "View Angel: 85°(Diagonal) 75°(Horizontal) 45°(Vertical)",
                "1920 x 1080 @Max 15fps",
                "H.264",
                "32Gb / 64Gb / 128Gb Kingston Micro SD Card",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/ezviz-p1.svg",
            logoUrl: "/ezviz-logo.png",
            channels: "8 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Ezviz",
            model: "Full HD 2 Mp",
            price: "IDR. 17.599.000",
            features: [
                "Image Sensor : F2.2@1/3 Progressive Scan CMOS",
                "Lens: 4mm",
                "View Angel: 124°(Diagonal) 85°(Horizontal) 55°(Vertical)",
                "H.265 / H.264",
                "Max. Resolution: 2560 x 1440       ",
                "32Gb / 64Gb / 128Gb Kingston Micro SD Card",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/ezviz-p1.svg",
            logoUrl: "/ezviz-logo.png",
            channels: "16 Channel",
            buttonText: "Beli Sekarang",
        },
    ]

    return (
        <main>
            <FloatingChatButton bottom="bottom-4"/>
            <section className="relative bg-cover bg-center text-white py-16"
                     style={{backgroundImage: "url('/hero.png')"}}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Paket Ezviz</h2>
                    <div className="lg:max-w-2xl mx-auto">
                        <p className="mb-8 text-bg px-4">
                            .
                        </p>
                    </div>
                </div>
            </section>
            <h2 className="text-2xl font-medium text-center my-4">Paket EZVIZ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-0">
                {ezvizProducts.map((product, index) => (
                    <CardPrice key={index} {...product}/>
                ))}
            </div>
            <Footer/>
        </main>
    )
}