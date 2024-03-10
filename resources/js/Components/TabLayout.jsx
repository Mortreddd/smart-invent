import ProductIcon from "@/images/product_icon.png";
import SupplierIcon from "@/images/supplier_icon.png";
import SalesRecordIcon from "@/images/cash_with_arrow_icon.png";
import DocumentText from "@/images/document-text.png";
import Tab from "./Tab";

export default function TabLayout() {
    return (
        <>
            <div
                className={`flex items-center justify-center w-full gap-4 px-3 py-2 lg:py-4 lg:px-6 h-fit`}
            >
                <Tab
                    image={ProductIcon}
                    className={"bg-[#F39C10] h-12 rounded-l"}
                    href="/admin/dashboard/products"
                >
                    Products
                </Tab>
                <Tab
                    image={SupplierIcon}
                    className={"bg-[#1AD8D8] h-12 rounded-l"}
                    href="/admin/dashboard/suppliers"
                >
                    Suppliers
                </Tab>
                <Tab
                    image={SalesRecordIcon}
                    className={
                        "bg-[#034D0F] object-center object-cover h-12 w-12 rounded-l"
                    }
                    href="/admin/dashboard/sales"
                >
                    Sales Record
                </Tab>
                <Tab
                    image={DocumentText}
                    className={
                        "bg-[#FFFFFF] object-center object-cover h-14 w-14 rounded-l"
                    }
                    href="/admin/dashboard/logs"
                >
                    Activity Logs
                </Tab>
            </div>
        </>
    );
}
