import React from "react";

interface DisabledbuttonProps {
    className?: string;
    children: React.ReactNode;
}
export default function DisabledButton({
    className = "",
    children,
    ...rest
}: DisabledbuttonProps) {
    return (
        <React.Fragment>
            <button {...rest} className={`btn btn-disabled ${className}`}>
                {children}
            </button>
        </React.Fragment>
    );
}
