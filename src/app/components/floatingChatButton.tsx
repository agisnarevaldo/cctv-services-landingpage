"use client";
import React, { useState } from 'react';
import {Icon} from "@iconify-icon/react";

const FloatingChatButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-10 right-4">
            <button
                className={
                `bg-primary text-white rounded-full p-4 shadow-lg
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
                                href="https://wa.me/1234567890"
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
                                href="tel:+1234567890"
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

export default FloatingChatButton;
