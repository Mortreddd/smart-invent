import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Product } from "@/types/charts/TotaEarnedEachProduct";
import { Sale } from "@/types/models/sale";
import { Size } from "@/types/models/size";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { ChangeEvent } from "react";
import { ConvertDate, ConvertIntoMonth } from "@/Utils/FormatDate";

export default function SalesLayout() {
    // const { sales } = usePage<{ sales: Array<Sale<Product, Size>> }>().props;
    const parameters = new URLSearchParams(window.location.search);
    const currentMonth: number | null = parseInt(
        parameters.get("month") || "0",
        10
    );

    const currentYear: number | null = parseInt(
        parameters.get("year") || "0",
        10
    );

    const { sales, years, months } = usePage<{
        sales: Array<Sale<Product, Size>>;
        years: Array<Sale<Product, Size>>;
        months: Array<Sale<Product, Size>>;
    }>().props;

    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `${currentMonth}-${currentYear} Product Sales`,
        sheet: "Product Sales",
    });

    return (
        <React.Fragment>
            <Head>
                <title>Product Sales</title>
            </Head>
            <Drawer current="Sales">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-gray-100 fade-in-early">
                    <div className="w-full flex justify-between items-center p-5 bg-white">
                        <div className="w-full h-fit flex items-center gap-3">
                            <select
                                onChange={(
                                    e: ChangeEvent<HTMLSelectElement>
                                ) => {
                                    router.get(
                                        `/sales?month=${parseInt(
                                            e.target.value
                                        )}&year=${currentYear}`
                                    );
                                }}
                                className="select w-fit max-w-xs"
                            >
                                <option disabled selected>
                                    {ConvertIntoMonth(currentMonth)}
                                </option>
                                {months.map(
                                    (
                                        sale: Sale<Product, Size>,
                                        index: number
                                    ) => (
                                        <option key={index} value={sale.month}>
                                            {ConvertIntoMonth(sale.month)}
                                        </option>
                                    )
                                )}
                            </select>
                            <select
                                onChange={(
                                    e: ChangeEvent<HTMLSelectElement>
                                ) => {
                                    router.get(
                                        `/sales?month=${currentMonth}&year=${parseInt(
                                            e.target.value
                                        )}`
                                    );
                                }}
                                className="select w-fit max-w-xs"
                            >
                                <option disabled selected>
                                    {currentYear}
                                </option>
                                {years.map(
                                    (
                                        sale: Sale<Product, Size>,
                                        index: number
                                    ) => (
                                        <option key={index} value={sale.year}>
                                            {sale.year}
                                        </option>
                                    )
                                )}
                            </select>
                            {/* <Link
                                
                                className="rounded px-4 py-2 bg-primary hover:bg-primarylight transition-colors text-center duration-200 ease-in-out text-white"
                            >
                                Search
                            </Link> */}
                        </div>
                        {sales.length === 0 ? (
                            <button className="btn btn-disabled">
                                Export Excel
                            </button>
                        ) : (
                            <button
                                onClick={onDownload}
                                className="btn btn-primary text-white"
                            >
                                Export Excel
                            </button>
                        )}
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
                                {sales.length === 0 ? (
                                    <tr className="bg-white divide-x-2 text-gray-700 w-full text-lg">
                                        <td colSpan={6}>
                                            <div className="flex h-32 w-full justify-center items-center">
                                                <h2>No Sales Available</h2>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    sales.map(
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
                                                    {ConvertDate(
                                                        sale.created_at
                                                    )}
                                                </td>
                                            </tr>
                                        )
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
