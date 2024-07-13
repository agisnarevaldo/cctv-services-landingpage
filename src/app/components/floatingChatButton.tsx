"use client";
import {useState} from "react";
import {Icon} from "@iconify-icon/react";

type FloatingChatButtonProps = {
    bottom: string;
};

export default function FloatingChatButton ({bottom}: FloatingChatButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fixed ${bottom} right-4 z-50 border border-bg rounded-full`}>
            <button
                className={
                `bg-primary text-white rounded-full p-4 shadow-xl
                flex items-center justify-center
                hover:bg-secondary transition duration-300 
                transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                onClick={togglePopup}
            >
                <Icon icon={isOpen ? "ic:round-close" : "bi:chat-right-text"} />
            </button>

            {isOpen && (
                <div className="bg-white rounded-lg shadow-lg p-4 mt-2 absolute bottom-14 right-0">
                    <ul>
                        <li className="mb-2 flex items-center space-x-2">
                            <Icon icon="logos:whatsapp-icon" />
                            <a
                                href="https://wa.me/6285158228528?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Anda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                WhatsApp
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Icon icon="teenyicons:phone-outline" />
                            <a
                                href="tel:+6285158228528"
                                className="text-blue-500 hover:underline"
                            >
                                Telepon
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
