import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Head, Link, router } from "@inertiajs/react";
import React, { ChangeEvent, useRef } from "react";
import Table from "@/Components/Tables/Table";
import TableData from "@/Components/Tables/TableData";
import TableHeadData from "@/Components/Tables/TableHeadData";
import TableHeadRow from "@/Components/Tables/TableHeadRow";
import TableRow from "@/Components/Tables/TableRow";
import TableBody from "@/Components/Tables/TableBody";
import DisabledButton from "@/Components/Buttons/DisabledButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { ConvertDate, ConvertIntoMonth } from "@/Utils/FormatDate";
import { usePage } from "@inertiajs/react";
import { Expense } from "@/types/models/expense";
import { useDownloadExcel } from "react-export-table-to-excel";

export default function ExpensesLayout() {
    const parameters = new URLSearchParams(window.location.search);
    const currentMonth: number | null = parseInt(
        parameters.get("month") || "0",
        10
    );

    const currentYear: number | null = parseInt(
        parameters.get("year") || "0",
        10
    );
    const { expenses, months, years } = usePage<{
        expenses: Array<Expense>;
        months: Array<Expense>;
        years: Array<Expense>;
    }>().props;

    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `${currentMonth}-${currentYear} Overall Expenses`,
        sheet: "Overall Expenses",
    });
    return (
        <React.Fragment>
            <Head>
                <title>Expenses</title>
            </Head>
            <Drawer current="Expenses">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-gray-200 ">
                    <section className="w-full h-full bg-white rounded">
                        <div className="w-full flex justify-between items-center p-5 bg-white">
                            <div className="w-full h-fit flex items-center gap-3">
                                <select
                                    onChange={(
                                        e: ChangeEvent<HTMLSelectElement>
                                    ) => {
                                        router.get(
                                            `/expenses?month=${parseInt(
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
                                        (month: Expense, index: number) => (
                                            <option
                                                key={index}
                                                value={month.month}
                                            >
                                                {month.month !== undefined
                                                    ? ConvertIntoMonth(
                                                          month.month
                                                      )
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
                                        (year: Expense, index: number) => (
                                            <option
                                                key={index}
                                                value={year.year}
                                            >
                                                {year.year}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            {expenses.length === 0 ? (
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
                        <div className="overflow-x-auto fade-in-early px-10 pb-5">
                            <Table
                                className="table table-fixed"
                                tableRef={tableRef}
                            >
                                <TableHeadRow>
                                    <TableHeadData className="rounded-tl-xl text-center text-md font-semibold">
                                        {""}
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold">
                                        Category
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold">
                                        Amount
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold rounded-tr-xl">
                                        Created At
                                    </TableHeadData>
                                </TableHeadRow>
                                <TableBody className="bg-gray-50">
                                    {expenses.length !== 0 ? (
                                        expenses.map(
                                            (
                                                expense: Expense,
                                                index: number
                                            ) => (
                                                <TableRow key={index}>
                                                    <TableData>
                                                        {index + 1}
                                                    </TableData>
                                                    <TableData>
                                                        {expense.category}
                                                    </TableData>
                                                    <TableData>
                                                        {expense.amount}
                                                    </TableData>
                                                    <TableData>
                                                        {ConvertDate(
                                                            expense.created_at
                                                        )}
                                                    </TableData>
                                                </TableRow>
                                            )
                                        )
                                    ) : (
                                        <tr className="bg-white divide-x-2 text-gray-700 w-full text-lg">
                                            <TableData colSpan={4}>
                                                <div className="flex h-32 w-full justify-center items-center">
                                                    <h2>
                                                        No Expense Available
                                                    </h2>
                                                </div>
                                            </TableData>
                                        </tr>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </section>
                </section>
            </Drawer>
        </React.Fragment>
    );
}
