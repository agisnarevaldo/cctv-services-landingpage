import CardPrice from "@/app/components/cardPrice";

export default function Page() {
    const hikProducts = [
        {
            brand: "Hikvision",
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
            imageUrl: "/hikvision-p1.svg",
            logoUrl: "/dahua.png",
            channels: "2 Channel",
            buttonText: "Beli Sekarang",
        },
        {
            brand: "Hikvision",
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
            imageUrl: "/hikvision-p1.svg",
            logoUrl: "/dahua.png",
            channels: "4 Channel",
            buttonText: "Beli Sekarang",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {hikProducts.map((product, index) => (
                <CardPrice
                    key={index}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                    features={product.features}
                    imageUrl={product.imageUrl}
                    logoUrl={product.logoUrl}
                    channels={product.channels}
                />
            ))}
        </div>
    )
}