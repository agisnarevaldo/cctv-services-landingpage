"use client";
import { Icon } from "@iconify-icon/react";

type FloatingChatButtonProps = {
    bottom: string;
};

export default function FloatingChatButton({ bottom }: FloatingChatButtonProps) {
    return (
        <div className={`fixed ${bottom} right-4 z-50 shadow-lg rounded-full`}>
            <a
                href="https://wa.me/6282228654835?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className={
                    `bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl
                flex items-center justify-center transition duration-300 gap-2 border border-white`}
            >
                <Icon icon="ic:baseline-whatsapp" className="text-2xl" />
                Free Konsultasi
            </a>
        </div>
    );
};
