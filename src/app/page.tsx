import Image from "next/image";
import {Icon} from "@iconify-icon/react";
import HeroSection from "@/app/components/hero";
import IconBox from "@/app/components/iconBox";
import CardPrice from "@/app/components/cardPrice";
import Link from "next/link";

export default function Home() {

  return (
      <main className="flex flex-col gap-20">
          <HeroSection/>
          <section id="testimoni" className="flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-medium">Melayani Semua Pemasangan</h2>
              <div className="flex gap-6">
                  <IconBox iconName={"solar:home-outline"} title={"Rumah"}/>
                  <IconBox iconName={"teenyicons:shop-outline"} title={"Toko"}/>
                  <IconBox iconName={"heroicons-outline:office-building"} title={"Kantor"}/>
                  <IconBox iconName={"fluent:building-multiple-24-regular"} title={"Gedung"}/>
              </div>
          </section>

          <section>
              <div className="flex flex-wrap">

                  <CardPrice/>
                  <CardPrice/>
                  <CardPrice/>

              </div>

              <div className="my-10">
                  <h2 className="text-2xl font-medium text-center">Paket Lainnya</h2>
                  <div className="flex justify-evenly w-full p-2 ">
                      <Link href="#"
                            className="flex px-8 py-4 border border-b-secondary items-center border-t-0">
                          <Image src="/imou.svg" alt="Paket 1" width={100} height={100}/>
                          <Icon className="text-2xl text-secondary" icon="iconamoon:arrow-top-right-1"/>
                      </Link>
                      <Link href="/paket1"
                            className="flex awesome-hover hover:scale-110 transition-transform duration-300 ease-in-out shadow hover:shadow-lg">
                          <Image src="/imou.svg" alt="Paket 1" width={100} height={100}/>
                          <Icon className="text-2xl" icon="iconamoon:arrow-top-right-1"/>
                      </Link>
                      <Link href="/paket1"
                            className="flex awesome-hover hover:scale-110 transition-transform duration-300 ease-in-out shadow hover:shadow-lg">
                          <Image src="/hikvision_logo.svg" alt="Paket 1" width={100} height={100}/>
                          <Icon className="text-2xl" icon="iconamoon:arrow-top-right-1"/>
                      </Link>
                  </div>
              </div>
          </section>


      </main>
  );
}
