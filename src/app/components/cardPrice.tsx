import Image from "next/image";
import {Icon} from "@iconify-icon/react";

export default function CardPrice() {
    return (
        <div
            className="bg-gradient-to-b from-secondary to-dark-blue mx-auto flex flex-col gap-4 w-max py-5 px-8 rounded-xl">
            <div className="flex justify-between items-center">
                <Image src="/dahua.png" alt="Dahua CCTV" width={100} height={100}/>
                <span className="bg-[#D9D9D9] bg-opacity-75 flex items-center rounded-md px-1">
                            <p className="text-sm">2 Chanel</p>
                        </span>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/dahua-cctv.png"
                    alt="Dahua CCTV"
                    width={200}
                    height={200}
                    priority={true}
                />
            </div>
            <div className="text-center text-bg">
                <h2 className="font-semibold text-xl">IDR. 4.599.000</h2>
                <p className="font-normal">Built - In Mic</p>
            </div>
            <ul className="text-bg text-opacity-85 w-[260px]">
                <li className="flex items-center gap-2 ">
                    <Icon className="text-green-500" icon="ic:round-check-circle"/>
                    4 Kamera audio, in / out 2 MP
                </li>
                <li className="flex items-center gap-2 ">
                    <Icon className="text-green-500" icon="ic:round-check-circle"/>
                    1 XVR 4 Channel
                </li>
                <li className="flex items-center gap-2 ">
                    <Icon className="text-green-500" icon="ic:round-check-circle"/>
                    Power Supply 10 A
                </li>
                <li className="flex items-center gap-2 ">
                    <Icon className="text-green-500" icon="ic:round-check-circle"/>
                    Hardisk 1 TB
                </li>
                <li className="flex items-center gap-2 ">
                    <Icon className="text-green-500" icon="ic:round-check-circle"/>
                    GKabel 100m
                </li>
                <li className="flex items-center gap-2 ">
                    <Icon className="text-green-500" icon="ic:round-check-circle"/>
                    Harga Termasuk Pemasangan
                </li>
            </ul>
            <button className="flex w-max mx-auto items-center justify-center gap-2 bg-bg py-2 px-4 rounded-lg">
                <Icon icon="solar:bag-check-bold"/>
                Beli Sekarang
            </button>
        </div>
    )
}