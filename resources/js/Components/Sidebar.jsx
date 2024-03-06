import DashboardIcon from "@/Icons/DashboardIcon";
import DocumentIcon from "@/Icons/DocumentIcon";
import ReceiptIcon from "@/Icons/ReceiptIcon";
import MoneyIcon from "@/Icons/MoneyIcon";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Sidebar({ openSidebar, ...props }) {
    const [activeLink, setActiveLink] = useState(1);
    return (
        <>
            <aside
                className={`${
                    openSidebar ? "grid-template-col-1" : "grid-template-col-0"
                } h-full bg-white width-transition`}
            >
                <div className="flex flex-col items-start justify-center w-full h-full overflow-x-hidden">
                    <ul className="flex flex-col flex-wrap items-start px-2 py-3 space-y-4 text-xl w-72">
                        <li className="w-full px-2">
                            <Link
                                className={`${
                                    activeLink === 1
                                        ? "active-link"
                                        : "inactive-link"
                                } flex items-center w-full gap-2 py-2 transition-colors duration-200 ease-in-out`}
                                href="/admin/dashboard"
                                onClick={() => setActiveLink(1)}
                            >
                                <DashboardIcon size={8} />
                                Dashboard
                            </Link>
                        </li>
                        <li className="w-full px-2">
                            <Link
                                className={`${
                                    activeLink === 2
                                        ? "active-link"
                                        : "inactive-link"
                                } flex items-center w-full gap-2 py-2 transition-colors duration-200 ease-in-out`}
                                onClick={() => setActiveLink(2)}
                            >
                                <DocumentIcon size={8} />
                                Manage Stock
                            </Link>
                        </li>
                        <li className="w-full px-2">
                            <Link
                                className={`${
                                    activeLink === 3
                                        ? "active-link"
                                        : "inactive-link"
                                } flex items-center w-full gap-2 py-2 transition-colors duration-200 ease-in-out`}
                                onClick={() => setActiveLink(3)}
                            >
                                <ReceiptIcon size={8} />
                                Purchase Order
                            </Link>
                        </li>
                        <li className="w-full px-2">
                            <Link
                                className={`${
                                    activeLink === 4
                                        ? "active-link"
                                        : "inactive-link"
                                } flex items-center w-full gap-2 py-2 transition-colors duration-200 ease-in-out`}
                                onClick={() => setActiveLink(4)}
                            >
                                <MoneyIcon size={8} />
                                Point of Sales
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
