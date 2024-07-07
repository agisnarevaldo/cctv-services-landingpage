import CardPrice from "@/app/components/cardPrice";

export default function Page() {
    const products = [
        {
            brand: "Dahua",
            model: "Built - In Mic",
            price: "IDR. 4.599.000",
            features: [
                "4 Kamera audio, in / out 2 MP",
                "1 XVR 4 Channel",
                "Power Supply 10 A",
                "Hardisk 1 TB",
                "GKabel 100m",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/dahua-cctv.png",
            logoUrl: "/dahua.png",
            channels: "2 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Built - In Mic",
            price: "IDR. 5.599.000",
            features: [
                "4 Kamera audio, in / out 2 MP",
                "1 XVR 4 Channel",
                "Power Supply 10 A",
                "Hardisk 1 TB",
                "GKabel 100m",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/dahua-cctv.png",
            logoUrl: "/dahua.png",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Built - In Mic",
            price: "IDR. 10.599.000",
            features: [
                "4 Kamera audio, in / out 2 MP",
                "1 XVR 4 Channel",
                "Power Supply 10 A",
                "Hardisk 1 TB",
                "GKabel 100m",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/dahua-cctv.png",
            logoUrl: "/dahua.png",
            channels: "2 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Built - In Mic",
            price: "IDR. 10.599.000",
            features: [
                "4 Kamera audio, in / out 2 MP",
                "1 XVR 4 Channel",
                "Power Supply 10 A",
                "Hardisk 1 TB",
                "GKabel 100m",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/dahua-cctv.png",
            logoUrl: "/dahua.png",
            channels: "2 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Built - In Mic",
            price: "IDR. 10.599.000",
            features: [
                "4 Kamera audio, in / out 2 MP",
                "1 XVR 4 Channel",
                "Power Supply 10 A",
                "Hardisk 1 TB",
                "GKabel 100m",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/dahua-cctv.png",
            logoUrl: "/dahua.png",
            channels: "2 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Dahua",
            model: "Built - In Mic",
            price: "IDR. 10.599.000",
            features: [
                "4 Kamera audio, in / out 2 MP",
                "1 XVR 4 Channel",
                "Power Supply 10 A",
                "Hardisk 1 TB",
                "GKabel 100m",
                "Harga Termasuk Pemasangan",
            ],
            imageUrl: "/dahua-cctv.png",
            logoUrl: "/dahua.png",
            channels: "2 Channel",
            buttonText: "Beli Sekarang",
        },
    ]
    return (
        <main className="">
            <h2 className="text-2xl font-medium text-center mb-4">Paket Dahua</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <CardPrice key={index} {...product} />
                ))}
            </div>
        </main>
    )
}