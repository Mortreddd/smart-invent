import { Sale } from "@/types/models";
import React, { useTransition, useState, useEffect } from "react";
import LoadingTable from "../LoadingTable";
import { MonthNameDayYear } from "../Utils/FormatDate";
// interface FilterProps {
//     name?: string;
//     asc?: boolean;
// }
export default function OverallSalesChart() {
    const [sales, setSales] = useState<Sale[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchSales() {
            setIsLoading(true);
            const result = await fetch(route("sales.api.index"), {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });

            const data = await result.json();
            setSales(data.data);
            setIsLoading(false);
        }
        fetchSales();
    }, []);
    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingTable />
            ) : (
                <div className="overflow-x-hidden fade-in-early">
                    <div className="py-3 w-full">
                        <div className="w-full items-center flex  px-3 justify-between">
                            <h3 className="text-lg font-bold text-text-gray-800">
                                Recent Sales
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
                    <table className="table-fixed table">
                        <thead className="">
                            <tr>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Product
                                </th>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Quantity
                                </th>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Earning
                                </th>
                                <th className="text-sm border-solid border-2 border-gray-400">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales ? (
                                sales.map((sale: Sale, index: number) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                                    >
                                        <td className="border-solid border-2 border-gray-200">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={`images/${sale.product?.image}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {`${
                                                            sale.product?.name
                                                        }${
                                                            sale.size?.name ===
                                                            undefined
                                                                ? ""
                                                                : `(${sale.size?.name})`
                                                        }`}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-solid border-2 border-gray-200">
                                            {sale.quantity}
                                        </td>
                                        <td className="border-solid border-2 border-gray-200">
                                            {sale.earned}
                                        </td>
                                        <td className="border-solid border-2 border-gray-200">
                                            {MonthNameDayYear(sale.created_at)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        rowSpan={2}
                                        className="h-32 flex text-gray-700 items-center justify-center"
                                    >
                                        No Current Sales
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </React.Fragment>
    );
}
