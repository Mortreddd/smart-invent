import { useState } from "react";
import HamburgerButton from "@/Components/HamburgerButton";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import SettingIcon from "@/Icons/SettingIcon";
import DropdownButton from "@/Components/DropdownButton";
import NotificationIcon from "@/Icons/NotificationIcon";
export default function DashboardLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <main className="relative flex w-full h-[100vh] bg-gray-100">
            <Sidebar openSidebar={openSidebar} />
            <section className="w-full h-[100vh] overflow-y-hidden">
                <nav className=" bg-primary w-full h-fit">
                    <div className="flex justify-between items-center p-4 w-auto">
                        <HamburgerButton
                            open={openSidebar}
                            handleBurgerClick={() =>
                                setOpenSidebar(!openSidebar)
                            }
                        />
                        <ul className="flex items-center gap-3 w-auto text-white ">
                            <li>
                                <Link
                                    as="button"
                                    className="transition-colors duration-300 hover:text-gray-200 ease-in-out p-1"
                                >
                                    <NotificationIcon size={8} />
                                </Link>
                            </li>
                            <li>
                                <DropdownButton text={"User"}>
                                    <ul className="w-32 h-fit text-white rounded-lg bg-white/30 backdrop-blur-sm">
                                        <li>
                                            <Link
                                                as="button"
                                                className="transition-colors duration-300 hover:text-gray-200 ease-in-out p-1"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                as="button"
                                                className="transition-colors duration-300 hover:text-gray-200 ease-in-out p-1"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </DropdownButton>
                            </li>
                            <li>
                                <Link
                                    as="button"
                                    className="transition-colors duration-300 hover:text-gray-200 ease-in-out p-1"
                                >
                                    <SettingIcon size={8} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="w-full h-full">{children}</div>
            </section>
        </main>
    );
}
