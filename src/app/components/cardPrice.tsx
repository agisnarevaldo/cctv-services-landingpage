import Image from "next/image";
import {Icon} from "@iconify-icon/react";

type CardPriceProps = {
    brand: string;
    model: string;
    price: string;
    features: string[];
    imageUrl: string;
    logoUrl: string;
    channels: string;
};

export default function CardPrice({
                                      brand,
                                      model,
                                      price,
                                      features,
                                      imageUrl,
                                      logoUrl,
                                      channels,
                                  }: CardPriceProps) {
    return (
        <div
            className="bg-gradient-to-b from-secondary to-dark-blue mx-auto flex flex-col gap-4 w-max py-5 px-8 rounded-xl mb-2">
            <div className="flex justify-between items-center">
                <Image src={logoUrl} alt={`${brand} Logo`} width={100} height={100}/>
                <span className="bg-[#D9D9D9] bg-opacity-75 flex items-center rounded-md px-1">
          <p className="text-sm">{channels}</p>
        </span>
            </div>
            <div className="flex justify-center">
                <Image src={imageUrl} alt={`${brand} ${model}`} width={200} height={200} priority={true}/>
            </div>
            <div className="text-center text-bg">
                <h2 className="font-semibold text-xl">{price}</h2>
                <p className="font-normal">{model}</p>
            </div>
            <ul className="text-bg text-opacity-85 w-[260px]">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Icon className="text-green-500" icon="ic:round-check-circle"/>
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className="flex w-max mx-auto items-center justify-center gap-2 bg-bg py-2 px-4 rounded-lg hover:bg-gray-300">
                <Icon icon="solar:bag-check-bold"/>
                Pesan Sekarang
            </button>
        </div>
    )
}