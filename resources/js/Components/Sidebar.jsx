import DashboardIcon from "@/Icons/DashboardIcon";
import DocumentIcon from "@/Icons/DocumentIcon";
import ReceiptIcon from "@/Icons/ReceiptIcon";
import MoneyIcon from "@/Icons/MoneyIcon";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Icons/ApplicationLogo";
export default function Sidebar({ openSidebar, activeLink, ...props }) {
    return (
        <>
            <aside
                className={`${
                    openSidebar ? "grid-template-col-1" : "grid-template-col-0"
                } h-full bg-white width-transition`}
            >
                <div className="flex flex-col items-start w-full h-full overflow-x-hidden">
                    <ApplicationLogo
                        className={"mx-auto relative my-4"}
                        size={28}
                    />
                    <ul className="flex flex-col flex-wrap items-start px-2 py-3 space-y-4 text-xl w-72">
                        <li className="w-full px-2">
                            <Link
                                className={`${
                                    activeLink === 1
                                        ? "active-link"
                                        : "inactive-link"
                                } flex items-center w-full gap-2 py-2 transition-colors duration-200 ease-in-out`}
                                href="/admin/dashboard"
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
                                href="/admin/stocks"
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
