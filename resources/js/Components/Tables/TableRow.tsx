import React from "react";

interface TableRowProps {
    className?: string;
    children: React.ReactNode;
}
export default function TableRow({
    className = "",
    children,
    ...rest
}: TableRowProps) {
    return (
        <React.Fragment>
            <tr
                {...rest}
                className={`odd:bg-secondary transition-colors duration-300 ease-in-out hover:bg-gray-200 ${className}`}
            >
                {children}
            </tr>
        </React.Fragment>
    );
}
