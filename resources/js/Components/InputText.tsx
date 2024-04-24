import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
    type: HTMLInputTypeAttribute;
    value?: string | number;
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
                autoComplete="off"
                value={value}
                {...props}
                className={`${className} input input-block input-bordered input-primary w-full`}
            />
        </>
    );
}
