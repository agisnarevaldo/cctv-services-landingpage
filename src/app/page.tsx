import Image from "next/image";
import {Icon} from "@iconify-icon/react";
import HeroSection from "@/app/components/hero";
import IconBox from "@/app/components/iconBox";
import CardPrice from "@/app/components/cardPrice";
import Link from "next/link";
import TestimonialSection from "@/app/components/testimonialSection";
import Footer from "@/app/components/footer";
import FloatingChatButton from "@/app/components/floatingChatButton";

export default function Home() {
    const bestProducts = [
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

    ]

  return (
      <main className="flex flex-col gap-16">
          <FloatingChatButton bottom="bottom-44 md:bottom-4"/>

          <HeroSection/>

          <section id="layanan" className="flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-medium">Melayani Semua Pemasangan</h2>
              <div className="flex gap-2 lg:gap-6">
                  <IconBox iconName={"solar:home-outline"} title={"Rumah"}/>
                  <IconBox iconName={"teenyicons:shop-outline"} title={"Toko"}/>
                  <IconBox iconName={"heroicons-outline:office-building"} title={"Kantor"}/>
                  <IconBox iconName={"fluent:building-multiple-24-regular"} title={"Gedung"}/>
              </div>
          </section>

          <section>
              <div className="mb-4">
                  <h2 className="text-2xl font-medium text-center">Best Seller</h2>
                  <p className="text-center">Harga sudah termasuk pemasangan & setting online</p>
              </div>
              <div className="flex flex-wrap">
                  {bestProducts.map((product, index) => (
                      <CardPrice key={index} {...product} />
                  ))}
              </div>

              <div className="mt-8">
                  <h2 className="text-xl font-medium text-center mb-4">Paket Lainnya</h2>
                  <div className="flex justify-evenly sm:flex-wrap gap-4 lg:w-full lg:p-2">
                      <Link href="/paket-dahua"
                            className="flex py-2 lg:px-6 lg:py-4 border border-b-secondary items-center lg:gap-4 rounded border-t-0 hover:bg-gray-300 hover:border-b-2 shadow hover:shadow-lg">
                          <Image className="lg:w-20" src="/dahua.svg" alt="Paket 1" width={50} height={50}/>
                          <Icon className="text-sm lg:text-2xl text-secondary" icon="iconamoon:arrow-top-right-1"/>
                      </Link>
                        <Link href="/paket-hikvision"
                                className="flex lg:px-6 lg:py-4 border border-b-secondary items-center lg:gap-4 rounded border-t-0 hover:bg-gray-300 hover:border-b-2 shadow hover:shadow-lg">
                            <Image src="/hikvision_logo.svg" alt="Paket 1" width={50} height={50} className="lg:w-20"/>
                            <Icon className="text-sm lg:text-2xl text-secondary" icon="iconamoon:arrow-top-right-1"/>
                        </Link>
                      {/*<Link href="#"*/}
                      {/*      className="flex lg:px-6 lg:py-4 border border-b-secondary items-center lg:gap-4 rounded border-t-0 hover:bg-gray-300 hover:border-b-2 shadow hover:shadow-lg">*/}
                      {/*    <Image src="/hikvision_logo.svg" alt="Paket 1" width={50} height={50} className="lg:w-20"/>*/}
                      {/*    <Icon className="text-sm lg:text-2xl text-secondary" icon="iconamoon:arrow-top-right-1"/>*/}
                      {/*</Link>*/}
                      {/*<Link href="#"*/}
                      {/*      className="flex lg:px-6 lg:py-4 border border-b-secondary items-center lg:gap-4 rounded border-t-0 hover:bg-gray-300 hover:border-b-2 shadow hover:shadow-lg">*/}
                      {/*    <Image src="/imou.svg" alt="Paket 1" width={50} height={50} className="lg:w-20"/>*/}
                      {/*    <Icon className="text-sm lg:text-2xl text-secondary" icon="iconamoon:arrow-top-right-1"/>*/}
                      {/*</Link>*/}

                      {/*<Link href="/paket1"*/}
                      {/*      className="flex awesome-hover hover:scale-110 transition-transform duration-300 ease-in-out shadow hover:shadow-lg">*/}
                      {/*    <Image src="/imou.svg" alt="Paket 1" width={100} height={100}/>*/}
                      {/*    <Icon className="text-2xl" icon="iconamoon:arrow-top-right-1"/>*/}
                      {/*</Link>*/}
                  </div>
              </div>
          </section>

          <section className="bg-dark-blue rounded-t-2xl pt-6 text-bg">
              <h2 className="text-2xl font-medium text-center mb-2">Mengapa memilih Kami?</h2>
              <div className="grid grid-cols-1 px-12 lg:grid-cols-2 gap-4 lg:px-12">
                  <div className="flex items-center space-x-6">
                      <div className="flex justify-center lg:justify-end items-center">
                          <iframe src="https://lottie.host/embed/32d08504-0eb0-4c36-ae2f-a0d194ca0dc6/J4v3NiHx4P.json"
                                  className="w-3/5 h-full"></iframe>
                      </div>
                      <div className="lg:pl-7 text-right">
                          <h3 className="text-lg font-semibold">Dukungan 24/7</h3>
                          <p className="text-sm">Layanan pelanggan kami siap membantu Anda kapan saja, sehingga Anda
                              selalu tenang mengetahui bisnis Anda aman.</p>
                      </div>
                  </div>
                  <div className="flex items-center space-x-4">
                      <div className="flex justify-center items-center">
                          <iframe src="https://lottie.host/embed/51605c1c-a209-4c66-8e72-4a9652c3bf98/fhQepWhkbg.json"
                                  className="w-full h-full"></iframe>
                      </div>
                      <div className="text-right">
                          <h3 className="text-lg font-semibold">Teknologi Canggih</h3>
                          <p className="text-sm">Menggunakan teknologi CCTV terbaru dengan resolusi tinggi dan fitur
                              night vision untuk pengawasan maksimal.
                          </p>
                      </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                      <div className="flex lg:pl-6 justify-start lg:justify-end items-center">
                          <iframe src="https://lottie.host/embed/666973e1-cc22-42ca-adff-014e30b81461/aukMh8bruh.json"
                                  className="w-full h-full"></iframe>
                      </div>
                      <div className="text-right">
                          <h3 className="text-lg font-semibold">Produk Lengkap</h3>
                          <p className="text-sm">Kami menawarkan berbagai pilihan produk CCTV lengkap dari berbagai brand dengan kualitas unggul.</p>
                      </div>
                  </div>
                  <div className="flex items-center space-x-4">
                      <div className="flex justify-center items-center">
                          <iframe src="https://lottie.host/embed/7df87c25-ae34-4648-802a-82d0aef60607/bObTlWG7jP.json"
                                  className="w-full h-full"></iframe>
                      </div>
                      <div className="text-right">
                          <h3 className="text-lg font-semibold">Garansi</h3>
                          <p className="text-sm">100% Garansi Resmi Produk Serta Garansi Pemasangan</p>
                      </div>
                  </div>
              </div>

              <TestimonialSection />
              <Footer />
          </section>
      </main>
  );
}
