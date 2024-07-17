import CardPrice from "@/app/components/cardPrice";
import FloatingChatButton from "@/app/components/floatingChatButton";
import Footer from "@/app/components/footer";

export default function Page() {
    const products = [
        {
            brand: "Dahua",
            model: "Full HD 2 Mp",
            price: "Rp. 3.750.000,-",
            features: [
                "4 Kamera in / out",
                    "XVR 4 Channel",
                "Power Supply 10 A",
                "Harddisk 500 GB",
                "Kabel CCTV 100m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full HD 2 Mp",
            price: "Rp. 7.750.000,-",
            features: [
                "XVR 8 Channel",
                "8 Camera IN / OUT",
                "Harddisk 1 TB",
                "Power Supply 10 A",
                "Kabel CCTV 200m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "8 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full HD 2 Mp    ",
            price: "Rp. 13.850.000,-",
            features: [
                "XVR 16 Channel ",
                "16 Camera IN / OUT",
                "Harddisk 1 TB",
                "Power Supply 30 A",
                "Kabel CCTV 300m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "16 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full Color",
            price: "Rp.  4.850.000,-",
            features: [
                "DVR 4 Channel",
                "4 Camera IN / OUT",
                "Harddisk 500GB",
                "Power Supply 10 A",
                "Kabel RG 59 100m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            imageUrl: "/dahua-cctv.pngg",
            logoUrl: "/dahua.png",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full Color",
            price: "Rp. 7.850.000,-",
            features: [
                "DVR 8 Channel",
                "8 Camera IN / OUT",
                "Harddisk 1TB",
                "Power Supply 10 A",
                "Kabel RG 59 200m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "8 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full Color",
            price: "Rp. 14.550.000,-",
            features: [
                "DVR 16 Channel",
                "16 Camera IN / OUT",
                "Harddisk 3TB",
                "Power Supply 30 A",
                "Kabel RG 59 300m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "16 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full Color + Audio",
            price: "Rp. 7.800.000,-",
            features: [
                "DVR 4 Channel",
                "4 Camera IN / OUT",
                "Harddisk 500GB",
                "Power Supply 10 A",
                "Kabel RG 59 100m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            imageUrl: "",
            logoUrl: "/dahua.png",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full Color + Audio",
            price: "Rp. 14.500.000,-",
            features: [
                "DVR 8 Channel",
                "8 Camera IN / OUT",
                "Harddisk 1TB",
                "Power Supply 10 A",
                "Kabel RG 59 200m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "8 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Full Color + Audio",
            price: "Rp. 25.500.000,-",
            features: [
                "DVR 16 Channel",
                "16 Camera IN / OUT",
                "Harddisk 3TB",
                "Power Supply 30 A",
                "Kabel RG 59 300m",
                "Jack BNC dan DC",
                "HDMI",
            ],
            logoUrl: "/dahua.png",
            channels: "16 Channel",
            buttonText: "Beli Sekarang",
        },
    ]
    return (
        <main className="">
            <FloatingChatButton bottom="bottom-4"/>
            <section
                className="relative bg-cover bg-center text-white py-16"
                style={{backgroundImage: "url('/dahua-hero.jpg')"}}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Overlay mengikuti ukuran parent */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">PRODUCTS</h2>
                    <div className="lg:max-w-2xl mx-auto">
                        <p className="mb-8 text-bg px-4">
                            Innovative Technology | Reliable Quality | End-to-End Service
                        </p>
                    </div>
                    {/*<HeroCard*/}
                    {/*    margin="max-w-sm md:max-w-max absolute mt-2 top-3/4 right-1/2 translate-x-1/2 translate-y-3/4"/>*/}
                </div>

            </section>

            <h2 className="text-2xl font-medium text-center my-4">Paket Dahua</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-0">
                {products.map((product, index) => (
                    <CardPrice key={index} {...product} />
                ))}
            </div>

            <Footer/>
        </main>
    )
}