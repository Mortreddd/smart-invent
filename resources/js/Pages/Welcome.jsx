import { useState } from "react";
import { Head } from "@inertiajs/react";
import HamburgerButton from "@/Components/HamburgerButton";
import { Link } from "@inertiajs/react";
import DashboardIcon from "@/Icons/DashboardIcon";
import DocumentIcon from "@/Icons/DocumentIcon";
import ReceiptIcon from "@/Icons/ReceiptIcon";
import MoneyIcon from "@/Icons/MoneyIcon";
import SettingIcon from "@/Icons/SettingIcon";

export default function Welcome() {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className="relative flex w-full h-[100vh] bg-gray-100">
                <aside className={`w-80 h-full bg-white`}>
                    <div className="w-full h-full px-2 py-3 flex flex-col justify-center items-start">
                        <ul className="text-xl flex flex-col items-start w-full space-y-4">
                            <li className="w-full px-2">
                                <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                    <DashboardIcon size={7} />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="w-full px-2">
                                <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                    <DocumentIcon size={7} />
                                    Manage Stock
                                </Link>
                            </li>
                            <li className="w-full px-2">
                                <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                    <ReceiptIcon size={7} />
                                    Purchase Order
                                </Link>
                            </li>
                            <li className="w-full px-2">
                                <Link className="text-black w-full flex items-center gap-2 hover:text-secondary transition-colors duration-200 ease-in-out py-2 ">
                                    <MoneyIcon size={7} />
                                    Point of Sales
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section className="w-full h-full">
                    <nav className=" bg-secondary w-full ">
                        <div className="flex justify-between items-center p-4 w-auto">
                            <HamburgerButton
                                open={openSidebar}
                                handleBurgerClick={() =>
                                    setOpenSidebar(!openSidebar)
                                }
                            />
                            <ul className="flex gap-3 ">
                                <li>
                                    <Link
                                        as="button"
                                        className="text-white transition-colors duration-200 ease-in-out p-3"
                                    >
                                        <SettingIcon size={12} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </main>
        </>
    );
}
