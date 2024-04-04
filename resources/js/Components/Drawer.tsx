import React from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
export default function Drawer({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">{children}</div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <div className="w-full h-fit pb-10">
                            <ApplicationLogo className={"mx-auto"} />
                        </div>
                        <li>
                            <Link
                                href=""
                                className={`flex items-center justify-start gap-3 hover:text-primary transition-colors ease-in-out duration-200 text-black`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                                    />
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className={`flex items-center justify-start gap-3 hover:text-primary transition-colors ease-in-out duration-200 text-black`}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className={`flex items-center justify-start gap-3 hover:text-primary transition-colors ease-in-out duration-200 text-black`}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className={`flex items-center justify-start gap-3 hover:text-primary transition-colors ease-in-out duration-200 text-black`}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className={`flex items-center justify-start gap-3 hover:text-primary transition-colors ease-in-out duration-200 text-black`}
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
