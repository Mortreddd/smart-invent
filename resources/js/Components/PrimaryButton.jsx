import { Link } from "@inertiajs/react";

export default function PrimaryButton({ className, children, ...props }) {
    return (
        <>
            <Link
                className={` bg-primary hover:bg-primary/80 text-white transition-colors duration-300 ease-in-out rounded px-5 py-2 text-lg ${className}`}
                {...props}
            >
                {children}
            </Link>
        </>
    );
}
