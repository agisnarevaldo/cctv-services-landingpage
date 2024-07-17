"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import { Icon } from "@iconify-icon/react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen, isDropdownOpen]);

    return (
        <nav className="flex justify-between items-center py-1 px-4 md:px-12 backdrop-blur-lg w-full sticky top-0 z-40 bg-gray-100 bg-opacity-50">
            <Link href="/" className="flex items-center pb-1">
                <Image src="/priangan-logo.svg" alt="Logo" width={150} height={150} />
            </Link>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-black">
                    <Icon icon={isMenuOpen ? "mingcute:close-line" : "mingcute:menu-line"} className="text-2xl" />
                </button>
            </div>
            <ul className={`md:flex items-center gap-10 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute text-center md:static top-[57px] left-0 w-full md:w-auto  bg-gray-200 md:bg-opacity-0 md:flex-row flex-col md:items-center transition-transform transform md:transform-none rounded-b-2xl`}>
                <li className="py-4">
                    <Link href="/" className="hover:text-secondary font-medium text-black">Beranda</Link>
                </li>
                {/*<li className="py-4">*/}
                {/*    <Link href="/   #testimoni" className="hover:text-secondary font-medium text-black">Testimoni</Link>*/}
                {/*</li>*/}
                <li className="py-4">
                    <Link href="/about" className="hover:text-secondary font-medium text-black">Tentang
                        Kami</Link>
                </li>
                <li className="py-4">
                    <Link href="/kontak" className="hover:text-secondary font-medium text-black">Hubungi
                        Kami</Link>
                </li>
                <li className="relative py-4">
                    <button onClick={toggleDropdown}
                            className="text-center mx-auto dropbtn flex items-center hover:text-secondary font-medium text-black">
                        Paket Harga
                        {isDropdownOpen ? (
                            <Icon icon="mingcute:up-line"/> // Icon when dropdown is open
                        ) : (
                            <Icon icon="mingcute:down-line"/> // Default icon
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