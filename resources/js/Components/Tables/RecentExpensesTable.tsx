import React, { useEffect, useState, useTransition } from "react";
import { Expense, Fabric } from "@/types/models";
import LoadingTable from "../LoadingTable";
import { MonthNameDayYear } from "../Utils/FormatDate";
interface LinkProps {
    first: string;
    last: string;
    prev: null | string;
    next: null | string;
}
export default function MonthlyExpenseLineChart() {
    const [expenses, setExpenses] = useState<Expense<Fabric>[]>([]);
    const [links, setLinks] = useState<LinkProps>();
    const [isLoading, startFetching] = useTransition();

    useEffect(() => {
        startFetching(() => {
            const fetchExpenses = async () => {
                const result = await fetch(route("expenses.api.index"), {
                    headers: {
                        Accept: "application/json",
                    },
                });

                const data = await result.json();
                const expenses: Expense<Fabric>[] = data.data;
                const links: LinkProps = data.links;
                setLinks(links);
                setExpenses(expenses);
            };
            fetchExpenses();
        });
    }, []);

    console.log(expenses);
    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingTable />
            ) : (
                <div className="overflow-x-hidden fade-in-early">
                    <div className="py-3 w-full">
                        <div className="w-full items-center flex  px-3 justify-between">
                            <h3 className="text-lg font-bold text-text-gray-800">
                                Recent Expense
                            </h3>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost rounded-full m-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                        />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-50 menu p-2 shadow bg-white  rounded-box w-52"
                                >
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <table className="table-auto table">
                        <thead>
                            <tr>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Fabric
                                </th>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Quantity
                                </th>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Price
                                </th>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(
                                (expense: Expense<Fabric>, index: number) => (
                                    <tr
                                        key={index}
                                        className="hover transition-colors duration-200 ease-in-out"
                                    >
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={`images/${expense.fabric?.image}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {expense.textile}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{expense.quantity}</td>
                                        <td>{expense.price}</td>
                                        <td>
                                            {MonthNameDayYear(
                                                expense.created_at
                                            )}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </React.Fragment>
    );
}
