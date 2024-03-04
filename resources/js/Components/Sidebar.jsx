import DashboardIcon from "@/Icons/DashboardIcon";
import DocumentIcon from "@/Icons/DocumentIcon";
import ReceiptIcon from "@/Icons/ReceiptIcon";
import MoneyIcon from "@/Icons/MoneyIcon";
import { Link } from "@inertiajs/react";

export default function Sidebar({ openSidebar, ...props }) {
    return (
        <>
            <aside
                className={`${
                    openSidebar ? "grid-template-col-1" : "grid-template-col-0"
                } h-full bg-white width-transition`}
            >
                <div className="w-full h-full flex flex-col justify-center items-start overflow-x-hidden">
                    <ul className="text-xl flex flex-col items-start space-y-4 flex-wrap w-72 px-2 py-3">
                        <li className="w-full px-2">
                            <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                <DashboardIcon size={8} />
                                Dashboard
                            </Link>
                        </li>
                        <li className="w-full px-2">
                            <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                <DocumentIcon size={8} />
                                Manage Stock
                            </Link>
                        </li>
                        <li className="w-full px-2">
                            <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                <ReceiptIcon size={8} />
                                Purchase Order
                            </Link>
                        </li>
                        <li className="w-full px-2">
                            <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
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
