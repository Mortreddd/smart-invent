import { useState } from "react";
import HamburgerButton from "@/Components/HamburgerButton";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import SettingIcon from "@/Icons/SettingIcon";
import DropdownButton from "@/Components/DropdownButton";
import NotificationIcon from "@/Icons/NotificationIcon";
import Loading from "@/Components/Loading";

export default function Layout({ activeLink, children }) {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <main className={`flex relative w-full h-[100vh] bg-gray-100`}>
                <Sidebar openSidebar={openSidebar} activeLink={activeLink} />
                <section className="w-full h-[100vh] overflow-y-auto">
                    <nav className="sticky top-0 z-10 w-full bg-primary h-fit">
                        <div className="flex items-center justify-between w-auto p-4">
                            <HamburgerButton
                                open={openSidebar}
                                handleBurgerClick={() =>
                                    setOpenSidebar(!openSidebar)
                                }
                            />
                            <ul className="flex items-center w-auto gap-3 text-white ">
                                <li>
                                    <Link
                                        as="button"
                                        className="p-1 transition-colors duration-300 ease-in-out hover:text-gray-200"
                                    >
                                        <NotificationIcon size={8} />
                                    </Link>
                                </li>
                                <li>
                                    <DropdownButton text={"User"}>
                                        <ul className="w-32 text-white rounded-lg h-fit bg-white/30 backdrop-blur-sm">
                                            <li>
                                                <Link
                                                    as="button"
                                                    className="p-1 transition-colors duration-300 ease-in-out hover:text-gray-200"
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    as="button"
                                                    className="p-1 transition-colors duration-300 ease-in-out hover:text-gray-200"
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
                                        className="p-1 transition-colors duration-300 ease-in-out hover:text-gray-200"
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
        </>
    );
}
