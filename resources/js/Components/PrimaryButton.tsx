import { ButtonHTMLAttributes } from "react";

type ButtonType = "submit" | "reset" | "button";
interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: ButtonType;
    className?: string;
    children: React.ReactNode;
}

export default function PrimaryButton({
    type,
    className,
    children,
    ...rest
}: PrimaryButtonProps) {
    return (
        <>
            <button
                type={type}
                className={`${className} btn-primary btn`}
                {...rest}
            >
                {children}
            </button>
        </>
    );
}
