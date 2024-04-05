import { usePage, Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Drawer from "@/Components/Drawer";
import React from "react";
import MonthlyExpenseLineChart from "@/Components/Tables/RecentExpensesTable";
import { PageProps } from "@/types";
import RecentSalesTable from "@/Components/Tables/RecentSalesTable";
export default function Dashboard() {
    interface DashboardProps extends PageProps {
        income: number;
        expense: number;
        profit: number;
        monthlyExpense: number;
    }
    // &#8369; is the HTML entity for the Philippine Peso sign
    const { income, expense, profit, monthlyExpense } =
        usePage<DashboardProps>().props;
    const formatter = new Intl.NumberFormat("en-US");
    return (
        <React.Fragment>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className="bg-white w-full h-full min-h-[100vh]">
                <Drawer>
                    <Navbar />
                    <section className="p-10 fade-in-early grid grid-cols-4 gap-5 grid-rows-16 grid-flow-col w-full bg-white h-full">
                        <h1 className="text-2xl col-span-1 flex items-center justify-start row-span-1 text-gray-700 font-bold">
                            Dashboard
                        </h1>
                        <div className="col-span-4 row-span-2 grid-flow-col grid gap-5">
                            <div className="rounded shadow-lg col-span-1 h-full w-full justify-around row-span-1 bg-blue-100 items-center flex">
                                <div className="flex  px-6 py-3 justify-center h-full items-start flex-col">
                                    <div className="flex gap-2 items-center">
                                        <span className="rounded-full h-2 w-2 bg-blue-500"></span>
                                        <h2 className="text-gray-500 text-md">
                                            Total Income
                                        </h2>
                                    </div>
                                    <h4 className="text-gray-700 font-bold text-xl">
                                        &#8369; {formatter.format(income)}
                                    </h4>
                                </div>
                                <div className="h-full items-center text-blue-700 flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="w-9 h-9"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="rounded shadow-lg col-span-1 h-full w-full justify-around row-span-1 bg-red-100 items-center flex">
                                <div className="flex  px-6 py-3 justify-center h-full items-start flex-col">
                                    <div className="flex gap-2 items-center">
                                        <span className="rounded-full h-2 w-2 bg-red-500"></span>
                                        <h2 className="text-gray-500 text-md">
                                            Total Expense
                                        </h2>
                                    </div>
                                    <h4 className="text-gray-700 font-bold text-xl">
                                        &#8369; {formatter.format(expense)}
                                    </h4>
                                </div>
                                <div className="h-full items-center text-red-700 flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="w-9 h-9"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="rounded shadow-lg col-span-1 h-full w-full justify-around row-span-1 bg-green-100 items-center flex">
                                <div className="flex  px-6 py-3 justify-center h-full items-start flex-col">
                                    <div className="flex gap-2 items-center">
                                        <span className="rounded-full h-2 w-2 bg-green-500"></span>
                                        <h2 className="text-gray-500 text-md">
                                            Total Profit
                                        </h2>
                                    </div>
                                    <h4 className="text-gray-700 font-bold text-xl">
                                        &#8369; {formatter.format(profit)}
                                    </h4>
                                </div>
                                <div className="h-full items-center text-green-700 flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="h-9 w-9"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="rounded shadow-lg col-span-1 h-full w-full justify-around row-span-1 bg-orange-100 items-center flex">
                                <div className="flex  px-6 py-3 justify-center h-full items-start flex-col">
                                    <div className="flex gap-2 items-center">
                                        <span className="rounded-full h-2 w-2 bg-orange-500"></span>
                                        <h2 className="text-gray-500 text-md">
                                            Monthly Expense
                                        </h2>
                                    </div>
                                    <h4 className="text-gray-700 font-bold text-xl">
                                        &#8369;{" "}
                                        {formatter.format(monthlyExpense)}
                                    </h4>
                                </div>
                                <div className="h-full items-center text-orange-700 flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="h-9 w-9"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 w-full row-span-6 grid-flow-col grid gap-5">
                            <div className="col-span-2 max-w-50 min-w-100 min-h-64 max-h-72 overflow-y-scroll shadow-lg bg-gray-100 row-span-6">
                                <RecentSalesTable />
                            </div>
                            <div className="col-span-2 max-w-50 min-w-100 min-h-64 max-h-72 overflow-y-scroll shadow-lg bg-gray-100 row-span-6">
                                <MonthlyExpenseLineChart />
                            </div>
                        </div>
                        <div className="grid col-span-4 shadow-lg bg-gray-100 row-span-7 gap-5 h-full"></div>
                    </section>
                </Drawer>
            </main>
        </React.Fragment>
    );
}
