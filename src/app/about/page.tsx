import HeroCard from "@/app/components/heroCard";
import Image from "next/image";
import FloatingChatButton from "@/app/components/floatingChatButton";
import Footer from "@/app/components/footer";
import Gallery from "@/app/components/gallery";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col">
            <FloatingChatButton bottom="bottom-4"/>
            {/*<section className="text-bg rounded-b-xl flex flex-col justify-end bg-opacity-50"*/}
            {/*         style={{*/}
            {/*             backgroundImage: "url('/hero.png')",*/}
            {/*             backgroundSize: "cover",*/}
            {/*             backgroundPosition: "center"*/}
            {/*         }}*/}
            {/*>*/}
            {/*    <div>*/}
            {/*        <div className="absolute inset-0 bg-black opacity-50"></div>*/}
            {/*        <h1 className="text-2xl font-bold text-center">Tentang Kami</h1>*/}
            {/*        <p className='translate-y-1/2'>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, libero sit amet*/}
            {/*            consectetur ultricies, nisi turpis tincidunt felis, nec aliquam odio libero sed nisl. Nullam*/}
            {/*            consectetur, ligula sit amet convallis tincidunt, mauris nunc tincidunt nunc, in tincidunt*/}
            {/*            sapien lorem nec dui. Nullam nec nisl nec erat vehicula ultricies. Sed nec nisl nec erat*/}
            {/*            vehicula*/}
            {/*        </p>*/}
            {/*        <div className="mt-10">*/}
            {/*            <HeroCard margin='top-1/2 translate-y-1/2'/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section
                className="relative bg-cover bg-center text-white py-16"
                style={{backgroundImage: "url('/hero.png')"}}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Overlay mengikuti ukuran parent */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
                    <div className="lg:max-w-2xl mx-auto">
                        <p className="mb-8 text-bg px-4">
                            .
                        </p>
                    </div>
                    <HeroCard margin="max-w-sm md:max-w-max absolute mt-2 top-3/4 right-1/2 translate-x-1/2 translate-y-3/4"/>
                </div>

            </section>

    <section className="mt-40 md:mt-20">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center my-4">Visi & Misi</h2>
                    <div className="grid max-w-screen-sm mx-auto grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-primary text-bg p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-2">Visi</h3>
                            <p>
                                Priangan CCTV merupakan dealer resmi dari Hikvision, Dahua, Ezviz, Hilook dan Imou yang mana merupakan market leader di dalam industri keamanan di dunia yang hanya menyediakan produk-produk paling terpercaya dan berkualitas tinggi. Jaringan distribusi Priangan CCTV memiliki jangkauan diseluruh indonesia. Selain kegiatan distribusi, kami juga melayani konsultasi dan instalasi dengan integrasi sistem keamanan. Kami memiliki visi untuk menjadi perusahaan yang terdepan dalam memberikan solusi keamanan yang terbaik dan terpercaya untuk mendukung bisnis anda.
                            </p>
                        </div>
                        <div className="bg-primary text-bg p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-2">Misi</h3>
                            <p>
                                Kami memiliki tim yang profesional, terampil dan terlatih dalam industri ini yang akan menghadirkan solusi sistem keamanan yang handal dan terpercaya. Tim instalasi kami dilengkapi dengan kemampuan desain struktur pemasangan kabel yang sangat aman dan rapi serta sudah menjalani k3 (keselamatan dan kesehatan kerja). Hal ini merupakan sebuah komitmen kami memberikan keamanan yang terbaik untuk mendukung bisnis anda. WANDI CCTV senantiasa menjadi mitra terbaik dan terdepan untuk kebutuhan solusi keamanan anda.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kontak section */}
            <section className="bg-dark-blue mt-20 md:mt-20 text-bg py-16">
                <Gallery />
            </section>

            <Footer />
        </main>
    )
}