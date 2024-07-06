"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {Icon} from "@iconify-icon/react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-1 px-12 backdrop-blur-lg w-full sticky top-0 z-10">
      <div>
          <Image src="/brand-outline.svg" alt="Logo" width={120} height={120} />
      </div>
        <ul className="flex items-center gap-10">
            <Link href="/">Beranda</Link>

            <li className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropbtn flex items-center">
                    Paket Harga
                    <Icon icon="mingcute:down-line" />
                </button>
                {isDropdownOpen && (
                    <div className={`${styles.dropdownContent} ${isDropdownOpen ? styles.show : ''}`}>
                        <Link href="/dropdown1">Dropdown 1</Link>
                        <Link href="/dropdown2">Dropdown 2</Link>
                    </div>
                )}
            </li>
            <Link href="#testimoni">Testimoni</Link>
            <Link href="#TentangKami">Tentang Kami</Link>
            <Link href="#HubungiKami">Hubungi Kami</Link>
        </ul>
    </nav>
  );
}