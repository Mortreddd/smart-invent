import React from "react";

export default function LoadingTable() {
    return (
        <React.Fragment>
            <div className="flex flex-col gap-4 w-auto">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </React.Fragment>
    );
}
