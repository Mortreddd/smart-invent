import React from "react";

interface TableDataProps {
    className?: string;
    children: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
}
export default function TableData({
    className = "",
    children,
    rowSpan,
    colSpan,
    ...rest
}: TableDataProps) {
    return (
        <React.Fragment>
            <td
                className={`${className}`}
                rowSpan={rowSpan}
                colSpan={colSpan}
                {...rest}
            >
                {children}
            </td>
        </React.Fragment>
    );
}
