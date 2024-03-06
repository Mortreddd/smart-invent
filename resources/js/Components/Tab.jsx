import { Link } from "@inertiajs/react";
import { useState } from "react";
export default function Tab({ image, className, children, ...props }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={
                "h-fit shadow-xl w-fit flex items-center bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out rounded gap-2"
            }
            {...props}
        >
            <img src={image} className={`${className} p-1 lg:p-2 bg-center`} />
            {children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={`${
                    isHovered ? "translate-x-2" : "translate-x-0"
                } w-4 h-4 transition-all duration-300 ease-in-out mr-3`}
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
            </svg>
        </Link>
    );
}
