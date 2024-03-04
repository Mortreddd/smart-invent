import { useState } from "react";

export default function DropdownButton({ className, text, props, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${className} transition-all py-1 px-3 ease-in-out rounded-full bg-white/30 backdrop-blur-sm flex flex-row items-center z-50`}
            >
                {text}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                        isOpen ? "rotate-180" : ""
                    } ml-2 transition-all ease-in-out duration-300 w-6 h-6`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
            <div
                className={`absolute height-transition rounded-lg -translate-x-6 ${
                    isOpen ? "grid-template-row-1" : "grid-template-row-0 "
                }`}
            >
                <div className="">{children}</div>
            </div>
        </>
    );
}
