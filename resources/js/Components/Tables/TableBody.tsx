import React from "react";

interface TableBodyProps {
    className?: string;
    children: React.ReactNode;
}
export default function TableBody({
    className = "",
    children,
    ...rest
}: TableBodyProps) {
    return (
        <React.Fragment>
            <tbody {...rest} className={`${className}`}>
                {children}
            </tbody>
        </React.Fragment>
    );
}
