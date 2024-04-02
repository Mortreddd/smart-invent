import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
    type: HTMLInputTypeAttribute;
    value?: string;
    placeholder: HTMLInputTypeAttribute;
    props?: React.ReactNode;
}

export default function TextInputError({
    className,
    type,
    value,
    placeholder,
    ...props
}: InputTextProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                {...props}
                className={`input input-bordered input-error w-full max-w-xs ${className}`}
            />
        </>
    );
}
