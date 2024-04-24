import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Product } from "@/types/models/product";
import { Link, usePage } from "@inertiajs/react";
import { Stock } from "@/types/models/stock";
import Modal from "@/Components/Modal";
import InputText from "@/Components/InputText";
import AddProductForm from "@/Components/Forms/AddProductForm";
import Table from "@/Components/Tables/Table";
import TableHeadRow from "@/Components/Tables/TableHeadRow";
import TableHeadData from "@/Components/Tables/TableHeadData";
import TableBody from "@/Components/Tables/TableBody";
import TableRow from "@/Components/Tables/TableRow";
import TableData from "@/Components/Tables/TableData";

export default function ProductsLayout() {
    const { stocks } = usePage<{
        stocks: Array<Stock<Product>> | null;
    }>().props;
    const [filteredStocks, setFilteredStocks] = useState<Array<
        Stock<Product>
    > | null>(stocks);
    const [search, setSearch] = useState<string>("");

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        if (stocks) {
            const filtered = stocks.filter((stock: Stock<Product>) =>
                stock.product?.name.toLowerCase().includes(value)
            );
            setFilteredStocks(filtered);
        }
    }

    useEffect(() => {
        if (stocks) {
            const filtered = stocks.filter((stock: Stock<Product>) =>
                stock.product?.name.toLowerCase().includes(search)
            );
            setFilteredStocks(filtered);
        }
    }, [search, stocks]);
    console.log(stocks);
    return (
        <React.Fragment>
            <Head>
                <title>Products</title>
            </Head>
            <Drawer current="Products">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-gray-200 ">
                    <section className="w-full h-full bg-white rounded">
                        <div className="justify-between flex items-center rounded py-3 w-full h-fit px-5 bg-white">
                            <div className="flex items-center gap-2 w-72">
                                <InputText
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
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
                            <label
                                htmlFor="modal"
                                className="btn bg-blue-500 text-lg text-white hover:bg-blue-600 transition-colors duration-200 ease-in-out border-none items-center flex gap-2"
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
                            <Modal>
                                <AddProductForm />
                            </Modal>
                        </div>
                        <div className="overflow-x-auto fade-in-early">
                            <Table className="table table-auto">
                                <TableHeadRow>
                                    <TableHeadData className="rounded-tl-xl text-center text-md font-semibold">
                                        {""}
                                    </TableHeadData>
                                    <TableHeadData
                                        className="text-center text-md font-semibold"
                                        colSpan={2}
                                    >
                                        Product
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold">
                                        Size
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold">
                                        Unit Price
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold">
                                        Stock
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold">
                                        Total Amount
                                    </TableHeadData>
                                    <TableHeadData className="text-center text-md font-semibold rounded-tr-xl">
                                        Actions
                                    </TableHeadData>
                                </TableHeadRow>
                                <TableBody className="bg-gray-50">
                                    {filteredStocks?.length !== 0 ? (
                                        filteredStocks?.map(
                                            (
                                                stock: Stock<Product>,
                                                index: number
                                            ) => (
                                                <TableRow
                                                    className="hover odd:bg-secondary transition-colors duration-200 ease-"
                                                    key={index}
                                                >
                                                    <th className="text-center">
                                                        {index + 1}
                                                    </th>
                                                    <TableData>
                                                        <div className="h-fit w-auto py-1">
                                                            <img
                                                                src={`storage/images/${stock.product?.image}`}
                                                                alt={
                                                                    stock
                                                                        .product
                                                                        ?.name
                                                                }
                                                                className="mx-auto h-20 object-scale-down object-center rounded-xl"
                                                            />
                                                        </div>
                                                    </TableData>
                                                    <TableData className="text-center text-md font-semibold">
                                                        {stock.product?.name}
                                                    </TableData>
                                                    <TableData className="text-md text-center font-semibold">
                                                        {stock.size?.name}
                                                    </TableData>
                                                    <TableData className="text-md text-center font-semibold">
                                                        {stock.price}
                                                    </TableData>
                                                    <TableData className="text-md text-center font-semibold">
                                                        {stock.stock}
                                                    </TableData>
                                                    <TableData className="text-md text-center font-semibold">
                                                        {stock.price *
                                                            stock.stock}
                                                    </TableData>
                                                    <TableData>
                                                        <div className="flex justify-center gap-2">
                                                            <Link
                                                                href={route(
                                                                    "product.edit",
                                                                    {
                                                                        product_id:
                                                                            stock
                                                                                .product
                                                                                ?.id,
                                                                        size_id:
                                                                            stock.size_id,
                                                                    }
                                                                )}
                                                                htmlFor="modal-edit-product"
                                                                className="bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-200 ease-in-out rounded text-lg px-4 py-2"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <div className="dropdown dropdown-top dropdown-end">
                                                                <div
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    className=" bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 ease-in-out rounded text-lg px-4 py-2"
                                                                >
                                                                    Delete
                                                                </div>
                                                                <ul
                                                                    tabIndex={0}
                                                                    className="dropdown-content z-[1] menu p-2 bg-white shadow rounded-box w-52"
                                                                >
                                                                    <li>
                                                                        <Link
                                                                            href={route(
                                                                                "product.destroy",
                                                                                {
                                                                                    product_id:
                                                                                        stock
                                                                                            .product
                                                                                            ?.id,
                                                                                    size_id:
                                                                                        stock.size_id,
                                                                                }
                                                                            )}
                                                                            className={
                                                                                "text-black hover:text-white bg-white hover:bg-red-600 transition-colors duration-200 ease-in-out"
                                                                            }
                                                                            method="delete"
                                                                            as="button"
                                                                        >
                                                                            Confirm
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </TableData>
                                                </TableRow>
                                            )
                                        )
                                    ) : (
                                        <tr className="bg-white divide-x-2 text-gray-700 w-full text-lg">
                                            <TableData colSpan={8}>
                                                <div className="flex h-32 w-full justify-center items-center">
                                                    <h2>
                                                        No Products Available
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
