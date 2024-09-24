import CardPrice from "@/app/components/cardPrice";
import FloatingChatButton from "@/app/components/floatingChatButton";
import Footer from "@/app/components/footer";

export default function Page() {
    const hikProducts = [
        {
            brand: "Hikvision",
            model: "Full HD 2 MP",
            price: "IDR. 4.499.000",
            features: [
                "4 Kamera analog, in/out 2 MP",
                "1 DVR 4 Channel",
                "Hardisk 1 TB",
                "Kabel 100m",
                "Power Supply 10 A",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/hikvision-p1.svg",
            logoUrl: "/hikvision_logo.svg",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Hikvision",
            model: "Full HD 2 MP",
            price: "IDR. 8.499.000",
            features: [
                "8 Kamera analog, in/out 2 MP",
                "1 DVR 8 Channel",
                "Hardisk 2 TB",
                "Kabel 200m",
                "Power Supply 20 A",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/hikvision-p1.svg",
            logoUrl: "/hikvision_logo.svg",
            channels: "8 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Hikvision",
            model: "Full HD 2 MP",
            price: "IDR. 17.599.000",
            features: [
                "16 Kamera analog, in/out 2 MP",
                "1 DVR 16 Channel",
                "Hardisk 4 TB",
                "Kabel 300m",
                "Power Supply 40 A",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/hikvision-p1.svg",
            logoUrl: "/hikvision_logo.svg",
            channels: "16 Channel",
            buttonText: "Beli Sekarang",
        },
    ];

    return (
        <main className="">
            <FloatingChatButton bottom="bottom-4"/>
            <section
                className="relative bg-cover bg-center text-white py-16"
                style={{backgroundImage: "url('/4-IP-product.webp')"}}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Overlay mengikuti ukuran parent */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Products</h2>
                    <div className="lg:max-w-2xl mx-auto">
                        <p className="mb-8 text-bg px-4">
                            Innovative Technology | Reliable Quality | End-to-End Service
                        </p>
                    </div>
                    {/*<HeroCard*/}
                    {/*    margin="max-w-sm md:max-w-max absolute mt-2 top-3/4 right-1/2 translate-x-1/2 translate-y-3/4"/>*/}
                </div>

            </section>
            <h2 className="text-2xl font-medium text-center my-4">Paket HIKVISION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-0">
                {hikProducts.map((product, index) => (
                    <CardPrice key={index} {...product} />
                ))}
            </div>

            <Footer/>
        </main>
    )
}