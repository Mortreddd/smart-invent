import Logo from "@/Images/Logo.jpg";

interface ApplicationLogoProps {
    className?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
}

export default function ApplicationLogo({
    className,
    sm,
    md,
    lg,
    xl,
}: ApplicationLogoProps) {
    return (
        <>
            <img
                src={Logo}
                alt={"Logo"}
                className={`${className} xl:w-${lg} xl:h-${xl} md:w-${md} w-16 md:h-${md} lg:h-${lg} lg:h-${lg} sm:w-${sm} sm:h-${sm} h-16 mix-blend-multiply object-cover object-center`}
            />
        </>
    );
}
