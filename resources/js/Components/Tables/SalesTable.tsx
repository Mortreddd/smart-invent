import { Sale } from "@/types/models/sale";
import React, { useTransition, useState, useEffect } from "react";
import LoadingTable from "../LoadingTable";
import { MonthNameDayYear } from "../../Utils/FormatDate";
import { Product } from "@/types/models/product";
import { Size } from "@/types/models/size";
import ErrorTable from "../Errors/ErrorTable";
import { usePage } from "@inertiajs/react";
import { Stock } from "@/types/models/stock";
import Modal from "../Modal";
import InputText from "../InputText";

// const { isLoading, isError, data } =
//     useFetch<Sale<Product, Size>>("sales.api.index");
// const sales: Sale<Product, Size>[] | null = data;

export default function SalesTables() {
    const { stocks } = usePage<{ stocks: Stock<Product>[] | null }>().props;
    const [search, setSearch] = useState<string>("");
    return (
        <React.Fragment>
            {stocks && (
                <section className="w-full h-full">
                    <div className="justify-between flex items-center py-3 w-full h-fit">
                        <div className="flex items-center gap-2 w-72">
                            <InputText
                                type="text"
                                value={search}
                                placeholder={"Search..."}
                                className="bg-white focus:ring-1 focus:ring-primary focus:outline-0"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-6 h-6 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* The button to open modal */}
                        <label
                            htmlFor="modal"
                            className="btn bg-amber-500 text-lg text-white hover:bg-amber-600 transition-colors duration-200 ease-in-out border-none items-center flex gap-2"
                        >
                            Add Product
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
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </label>

                        {/* Put this part before </body> tag */}
                        <Modal>div.w-full.</Modal>
                    </div>
                    <div className="overflow-x-auto fade-in-early">
                        <table className="table table-auto">
                            {/* head */}
                            <thead>
                                <tr
                                    className={
                                        " bg-primary divide-x-2 text-gray-50 text-lg"
                                    }
                                >
                                    <th className="rounded-tl-xl"></th>
                                    <th className="text-center" colSpan={2}>
                                        Product
                                    </th>
                                    <th>Size</th>
                                    <th>Unit Price</th>
                                    <th>Stock</th>
                                    <th className="rounded-tr-xl">
                                        Total Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-50">
                                {/* row 1 */}
                                {stocks.map(
                                    (stock: Stock<Product>, index: number) => (
                                        <tr
                                            className="hover odd:bg-secondary"
                                            key={index}
                                        >
                                            <th className="text-center">
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="h-fit w-auto py-1">
                                                    <img
                                                        src={`images/${stock.product?.image}`}
                                                        alt={
                                                            stock.product?.name
                                                        }
                                                        className="mx-auto h-20 object-scale-down object-center rounded-xl"
                                                    />
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                {stock.product?.name}
                                            </td>
                                            <td className="text-md">
                                                {stock.size?.name}
                                            </td>
                                            <td className="text-md">
                                                {stock.price}
                                            </td>
                                            <td className="text-md">
                                                {stock.stock}
                                            </td>
                                            <td className="text-md">
                                                {stock.price * stock.stock}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
        </React.Fragment>
    );
}
