import React from "react";
import TableHeadData from "./TableHeadData";

interface TableHeadRowProps {
    className?: string;
    children: React.ReactNode;
}
export default function TableHeadRow({
    className = "",
    children,
    ...rest
}: TableHeadRowProps) {
    return (
        <React.Fragment>
            <thead className={`${className}`} {...rest}>
                <tr
                    className={`bg-primary divide-x-2 text-gray-50 text-lg rounded`}
                >
                    {children}
                </tr>
            </thead>
        </React.Fragment>
    );
}
