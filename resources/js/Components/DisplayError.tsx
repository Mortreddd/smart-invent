import React from "react";

export default function DisplayError() {
    return (
        <React.Fragment>
            <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-500">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-lg text-gray-500">
                        Please try again later
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}
