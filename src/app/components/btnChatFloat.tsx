"use client";
import Link from "next/link";
import {Icon} from "@iconify-icon/react";
export default function BtnChatFloat() {
    return (
        // <div className="fixed bottom-4 right-4">
        //     <Link href="https://wa.me/6281216505985" target="_blank" rel="noreferrer" className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">
        //         <Icon icon="bi:chat-right-text" />
        //     </Link>
        // </div>
        <div className="fixed bottom-4 right-4">
            <button
                className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-300"
                onClick={() => alert('Chat button clicked!')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-3.582 8-8 8-1.51 0-2.927-.422-4.148-1.152l-4.351 1.148 1.148-4.352C5.422 15.927 5 14.51 5 13c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                    />
                </svg>
            </button>
        </div>
    );
}