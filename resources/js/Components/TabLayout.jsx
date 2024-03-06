import ProductIcon from "@/images/product_icon.png";
import SupplierIcon from "@/images/supplier_icon.png";
import SalesRecordIcon from "@/images/cash_with_arrow_icon.png";
import Tab from "./Tab";
import { usePage, Link } from "@inertiajs/react";
import { useState } from "react";

export default function TabLayout({ children }) {
    const [tab, setTab] = useState("Products");
    const { url } = usePage();
    return (
        <>
            <div
                className={`${
                    url == "/admin/dashboard" ? "flex" : "hidden"
                } items-center justify-center w-full gap-4 px-3 py-2 lg:py-4 lg:px-6 h-fit`}
            >
                <Tab
                    image={ProductIcon}
                    className={"bg-[#F39C10] h-12 rounded-l"}
                    href="/admin/dashboard/products"
                    onClick={() => setTab("Products")}
                >
                    Products
                </Tab>
                <Tab
                    image={SupplierIcon}
                    className={"bg-[#1AD8D8] h-12 rounded-l"}
                    href="/admin/dashboard/suppliers"
                    onClick={() => setTab("Suppliers")}
                >
                    Suppliers
                </Tab>
                <Tab
                    image={SalesRecordIcon}
                    className={
                        "bg-[#034D0F] object-center object-cover h-12 w-12 rounded-l"
                    }
                    href="/admin/dashboard/sales"
                    onClick={() => setTab("Sales Record")}
                >
                    Sales Record
                </Tab>
            </div>
            <div
                className={`w-full h-fit py-5 px-3 ${
                    url !== "/admin/dashboard"
                        ? "flex items-center gap-3"
                        : "hidden"
                } `}
            >
                <Link
                    href="/admin/dashboard"
                    className="font-sans text-xl transition-all duration-300 ease-in-out translate-y-0 text-slate-700 hover:-translate-y-1 hover:text-slate-800"
                >
                    Dashboard
                </Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`w-5 h-5`}
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                </svg>
                <h3 className="font-sans text-xl transition-all duration-300 ease-in-out text-slate-700 hover:text-slate-800">
                    {tab}
                </h3>
            </div>
        </>
    );
}
