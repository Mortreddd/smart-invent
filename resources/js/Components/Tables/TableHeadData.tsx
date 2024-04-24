import React from "react";

interface TableHeadDataProps {
    className?: string;
    children: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
}

export default function TableHeadData({
    className = "",
    children,
    rowSpan,
    colSpan,
    ...rest
}: TableHeadDataProps) {
    return (
        <React.Fragment>
            <th
                className={`${className}`}
                {...rest}
                rowSpan={rowSpan}
                colSpan={colSpan}
            >
                {children}
            </th>
        </React.Fragment>
    );
}
