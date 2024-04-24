import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Product } from "@/types/charts/TotaEarnedEachProduct";
import { Sale } from "@/types/models/sale";
import { Size } from "@/types/models/size";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useRef, ChangeEvent } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { ConvertDate, ConvertIntoMonth } from "@/Utils/FormatDate";
import Table from "@/Components/Tables/Table";
import TableHeadRow from "@/Components/Tables/TableHeadRow";
import TableHeadData from "@/Components/Tables/TableHeadData";
import TableBody from "@/Components/Tables/TableBody";
import TableRow from "@/Components/Tables/TableRow";
import TableData from "@/Components/Tables/TableData";
import DisabledButton from "@/Components/Buttons/DisabledButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function SalesLayout() {
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
                                            {sale.month !== undefined
                                                ? ConvertIntoMonth(sale.month)
                                                : ""}
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
                        </div>
                        {sales.length === 0 ? (
                            <DisabledButton>Export Excel</DisabledButton>
                        ) : (
                            <PrimaryButton
                                type="button"
                                onClick={onDownload}
                                className=" text-white"
                            >
                                Export Excel
                            </PrimaryButton>
                        )}
                    </div>
                    <div className="overflow-x-auto bg-white">
                        <Table
                            className={"table table-fixed table-md"}
                            tableRef={tableRef}
                        >
                            <TableHeadRow>
                                <TableHeadData>No.</TableHeadData>
                                <TableHeadData>Product</TableHeadData>
                                <TableHeadData>Size</TableHeadData>
                                <TableHeadData>Quantity</TableHeadData>
                                <TableHeadData>Total Amount</TableHeadData>
                                <TableHeadData>Created At</TableHeadData>
                            </TableHeadRow>
                            <TableBody>
                                {sales.length === 0 ? (
                                    <tr className="bg-white divide-x-2 text-gray-700 w-full text-lg">
                                        <TableData colSpan={6}>
                                            <div className="flex h-32 w-full justify-center items-center">
                                                <h2>No Sales Available</h2>
                                            </div>
                                        </TableData>
                                    </tr>
                                ) : (
                                    sales.map(
                                        (
                                            sale: Sale<Product, Size>,
                                            index: number
                                        ) => (
                                            <TableRow key={index}>
                                                <th>{index + 1}</th>
                                                <TableData>
                                                    {sale.product?.name}
                                                </TableData>
                                                <TableData>
                                                    {sale.size?.name}
                                                </TableData>
                                                <TableData>
                                                    {sale.quantity}
                                                </TableData>
                                                <TableData>
                                                    {sale.earned}
                                                </TableData>
                                                <TableData>
                                                    {ConvertDate(
                                                        sale.created_at
                                                    )}
                                                </TableData>
                                            </TableRow>
                                        )
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </Drawer>
        </React.Fragment>
    );
}
