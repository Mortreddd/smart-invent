import React, { HTMLAttributes, MutableRefObject } from "react";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
    className?: string;
    tableRef?: MutableRefObject<HTMLTableElement | null>;
    children: React.ReactNode;
}

export default function Table({
    className = "",
    tableRef,
    children,
    ...rest
}: TableProps) {
    return (
        <React.Fragment>
            <table ref={tableRef} className={`${className}`} {...rest}>
                {children}
            </table>
        </React.Fragment>
    );
}
