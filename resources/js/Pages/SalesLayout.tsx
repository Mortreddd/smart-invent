import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Product } from "@/types/charts/TotaEarnedEachProduct";
import { Sale } from "@/types/models/sale";
import { Size } from "@/types/models/size";
import { Stock } from "@/types/models/stock";
import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";

export default function SalesLayout() {
    const { sales } = usePage<{ sales: Array<Sale<Product, Size>> }>().props;
    const tableRef = useRef(null);
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    function convertDate(datetime: EpochTimeStamp): string {
        var now = new Date(datetime);
        return (
            days[now.getDay()] +
            " " +
            months[now.getMonth()] +
            " " +
            now.getDate() +
            " " +
            now.getFullYear()
        );
    }
    return (
        <React.Fragment>
            <Head>
                <title>Product Sales</title>
            </Head>
            <Drawer current="Sales">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-gray-100 fade-in-early">
                    <div className="w-full flex justify-end p-5 bg-white">
                        <DownloadTableExcel
                            filename="Product Sales"
                            sheet="Product Sales"
                            currentTableRef={tableRef.current}
                        >
                            <button className="btn btn-primary text-white">
                                Export Excel
                            </button>
                        </DownloadTableExcel>
                    </div>
                    <div className="overflow-x-auto bg-white">
                        <table
                            ref={tableRef}
                            className="table table-fixed table-md"
                        >
                            <thead>
                                <tr className="bg-primary divide-x-2 text-gray-50 text-lg">
                                    <th>No.</th>
                                    <th>Product</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total Amount</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map(
                                    (
                                        sale: Sale<Product, Size>,
                                        index: number
                                    ) => (
                                        <tr
                                            key={index}
                                            className={
                                                "odd:bg-secondary transition-colors duration-300 ease-in-out hover:bg-gray-200"
                                            }
                                        >
                                            <th>{index + 1}</th>
                                            <td>{sale.product?.name}</td>
                                            <td>{sale.size?.name}</td>
                                            <td>{sale.quantity}</td>
                                            <td>{sale.earned}</td>
                                            <td>
                                                {convertDate(sale.created_at)}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </Drawer>
        </React.Fragment>
    );
}
