import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
    type: HTMLInputTypeAttribute;
    value: string;
    placeholder: HTMLInputTypeAttribute;
    disabled?: boolean;
}

export default function InputText({
    className,
    type,
    value,
    disabled,
    ...props
}: InputTextProps) {
    return (
        <>
            <input
                type={type}
                value={value}
                {...props}
                className={`${className} input input-block input-bordered input-primary w-full max-w-xs`}
            />
        </>
    );
}
