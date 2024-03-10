import logo from "@/images/Logo.jpg";

export default function ApplicationLogo({ className, size, ...props }) {
    return (
        <>
            <img
                src={logo}
                alt="Logo"
                className={`${className} object-cover object-center aspect-square h-${size} w-${size}`}
            />
        </>
    );
}
