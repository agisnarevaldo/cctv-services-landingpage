import {Icon} from "@iconify-icon/react";

type HeroCardProps = {
    margin: string;
};

export default function HeroCard({margin}: HeroCardProps) {
    return (
        <div
        className={`border-4 border-bg w-max mx-auto bg-gradient-to-b from-secondary to-primary bg-blend-darken bg-opacity-50 ${margin} flex lg:gap-8 py-5 lg:px-8 rounded-xl`}>
            <div className="flex flex-col text-center lg:flex-row items-center justify-center gap-2">
                <Icon className="text-4xl lg:text-[56px]" icon="streamline:fastforward-clock"/>
                <div>
                    <h2 className="lg:text-2xl lg:font-bold">24/7</h2>
                    <p className="text-sm font-light md:text-base">Waktu respon cepat</p>
                </div>
            </div>
            <div className="flex flex-col text-center lg:flex-row items-center gap-2">
                <Icon className="text-4xl lg:text-[56px]" icon="carbon:scis-transparent-supply" flip="horizontal"/>
                <div>
                    <h2 className="lg:text-2xl lg:font-bold">Solusi</h2>
                    <p className="text-sm font-light md:text-base">Sesuai Kebutuhan Anda</p>
                </div>
            </div>
            <div className="flex flex-col text-center lg:flex-row items-center gap-2">
                <Icon className="text-4xl font-light lg:text-[56px]" icon="bi:house-gear"/>
                <div>
                    <h2 className="lg:text-2xl lg:font-bold">1000+</h2>
                    <p className="text-sm md:text-base">System terpasang</p>
                </div>
            </div>

        </div>
    )
}