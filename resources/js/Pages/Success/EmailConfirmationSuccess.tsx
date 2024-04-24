import { Link } from "@inertiajs/react";
import React from "react";

export default function EmailConfirmationSuccess() {
    return (
        <React.Fragment>
            <main className="w-full flex flex-col items-center h-[100vh] font-sans antialiased bg-white">
                <h1 className="text-2xl md:text-4xl text-black">
                    Email Confirmation Sucess
                </h1>
                <Link
                    href={route("login")}
                    className="text-white bg-primary hover:bg-primarylight rounded px-3 md:px-5 py-2 md:py-3"
                    method="get"
                    as="button"
                >
                    Proceed to Login
                </Link>
            </main>
        </React.Fragment>
    );
}
