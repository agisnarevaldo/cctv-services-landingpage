"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isWilayahDropdownOpen, setIsWilayahDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsWilayahDropdownOpen(false);
    };

    const toggleWilayahDropdown = () => {
        setIsWilayahDropdownOpen(!isWilayahDropdownOpen);
        setIsDropdownOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
        if (isWilayahDropdownOpen) {
            setIsWilayahDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen, isDropdownOpen, isWilayahDropdownOpen]);

    const wilayahList = [
        { name: 'Tasikmalaya', slug: 'tasikmalaya' },
        { name: 'Bandung', slug: 'bandung' },
        { name: 'Garut', slug: 'garut' },
        { name: 'Ciamis', slug: 'ciamis' },
        { name: 'Banjar', slug: 'banjar' },
        { name: 'Cirebon', slug: 'cirebon' },
        { name: 'Sukabumi', slug: 'sukabumi' },
        { name: 'Bogor', slug: 'bogor' },
    ];

    return (
        <nav className="flex justify-between items-center py-1 px-4 md:px-12 backdrop-blur-lg w-full sticky top-0 z-40 bg-gray-100 bg-opacity-0">
            <Link href="/" className="flex items-center py-1 hover:scale-95 transition-transform">
                <div>
                    {/* <Image src="/mitrasia.png" alt="Logo" width={150} height={150} /> */}
                    <Image src="/mitraasiacctv.svg" alt="mitraasia" width={276} height={83} />
                </div>
            </Link>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-black">
                    <Icon icon={isMenuOpen ? "mingcute:close-line" : "mingcute:menu-line"} className="text-2xl" />
                </button>
            </div>
            <ul className={`md:flex items-center gap-10 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute text-center md:static top-[57px] left-0 w-full md:w-auto  bg-gray-200 md:bg-opacity-0 md:flex-row flex-col md:items-center transition-transform transform md:transform-none rounded-b-2xl`}>
                <li className="py-4">
                    <Link
                        href="/"
                        className={
                            clsx(
                                "hover:text-secondary font-medium text-black",
                                {
                                    "text-secondary": pathname === "/",
                                }
                            )
                        }
                    >
                        Beranda
                    </Link>
                </li>
                <li className="py-4">
                    <Link
                        href="/about"
                        className={
                            clsx(
                                "hover:text-secondary font-medium text-black",
                                {
                                    "text-secondary": pathname === "/about",
                                }
                            )
                        }
                    >
                        Tentang Kami
                    </Link>
                </li>
                <li className="py-4">
                    <Link
                        href="/blog"
                        className={
                            clsx(
                                "hover:text-secondary font-medium text-black",
                                {
                                    "text-secondary": pathname.startsWith("/blog"),
                                }
                            )
                        }
                    >
                        Blog
                    </Link>
                </li>
                <li className="py-4">
                    <Link
                        href="/kontak"
                        className={
                            clsx(
                                "hover:text-secondary font-medium text-black",
                                {
                                    "text-secondary": pathname === "/kontak",
                                }
                            )
                        }
                    >
                        Hubungi Kami
                    </Link>
                </li>
                <li className="relative py-4">
                    <button onClick={toggleWilayahDropdown}
                        className={clsx(
                            "text-center mx-auto dropbtn flex items-center hover:text-secondary font-medium text-black",
                            {
                                "text-secondary": pathname.startsWith("/wilayah"),
                            }
                        )}>
                        Wilayah Layanan
                        {isWilayahDropdownOpen ? (
                            <Icon icon="mingcute:up-line" /> // Icon when dropdown is open
                        ) : (
                            <Icon icon="mingcute:down-line" /> // Default icon
                        )}
                    </button>
                    {isWilayahDropdownOpen && (
                        <div className={
                            `${styles.dropdownContent} ${isWilayahDropdownOpen ? styles.show : ''}
                            bg-gray-200 rounded-b-2xl max-h-64 overflow-y-auto
                            `}>
                            {wilayahList.map((wilayah) => (
                                <Link
                                    key={wilayah.slug}
                                    href={`/wilayah/${wilayah.slug}`}
                                    className={clsx(
                                        "hover:text-secondary font-medium text-black block",
                                        {
                                            "text-secondary": pathname === `/wilayah/${wilayah.slug}`,
                                        }
                                    )}
                                >
                                    {wilayah.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </li>
                <li className="relative py-4">
                    <button onClick={toggleDropdown}
                        className="text-center mx-auto dropbtn flex items-center hover:text-secondary font-medium text-black">
                        Paket Harga
                        {isDropdownOpen ? (
                            <Icon icon="mingcute:up-line" /> // Icon when dropdown is open
                        ) : (
                            <Icon icon="mingcute:down-line" /> // Default icon
                        )}
                    </button>
                    {isDropdownOpen && (
                        <div className={
                            `${styles.dropdownContent} ${isDropdownOpen ? styles.show : ''}
                            bg-gray-200 rounded-b-2xl
                            `}>
                            <Link href="/paket-dahua"
                                className="hover:text-secondary font-medium text-black">Dahua</Link>
                            <Link
                                href="/paket-hikvision"
                                className="hover:text-secondary font-medium text-black"
                            >
                                Hikvision
                            </Link>
                            <Link
                                href="/paket-ezviz"
                                className="hover:text-secondary font-medium text-black"
                            >
                                Ezviz
                            </Link>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}
