import React from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar bg-primary px-8">
                <div className="flex-1">
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-ghost text-white drawer-button"
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
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                            />
                        </svg>
                    </label>
                    <Link
                        href={route("home")}
                        className="btn btn-ghost text-white hover:text-gray-200 outline-0 border-0 text-xl"
                    >
                        Smart Invent
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="search"
                            placeholder="Search"
                            className="input outline-none ring-0 border-0 w-24 md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    className="text-black hover:text-white transition-colors duration-200 ease-in-out bg-whtie hover:bg-red-500"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
