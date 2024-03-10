import { Head } from "@inertiajs/react";
import Layout from "@/Pages/Layout";
import { usePage } from "@inertiajs/react";
import ProductImage from "@/Components/ProductImage";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState, useEffect } from "react";

export default function Product() {
    const { products } = usePage().props;
    const [searchBar, setSearchBar] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(() =>
            products.filter((product) =>
                product.name.match(new RegExp(searchBar, "i"))
            )
        );
    }, [searchBar]);

    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <Layout activeLink={1}>
                <div className="w-full h-full p-3">
                    <div
                        className={`w-full h-fit py-5 px-3 flex items-center gap-3`}
                    >
                        <h3 className="font-sans text-xl transition-all duration-300 ease-in-out text-slate-700 hover:text-slate-800">
                            Dashboard
                        </h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className={`w-5 h-5`}
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                        <h3 className="font-sans text-xl transition-all duration-300 ease-in-out text-slate-700 hover:text-slate-800">
                            Products
                        </h3>
                    </div>
                    <div className="flex items-center justify-end w-full gap-5">
                        <input
                            type="text"
                            value={searchBar}
                            onChange={(e) => setSearchBar(e.target.value)}
                            id=""
                            placeholder={"Search product"}
                            className="placeholder-gray-400 transition-colors duration-300 ease-in-out bg-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        />

                        <PrimaryButton>Add Products</PrimaryButton>
                    </div>
                    <table className="w-full my-5 shadow-lg table-fixed">
                        <thead className="w-full text-xl text-white bg-primary">
                            <tr>
                                <th>Product</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Stocks</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="w-full text-center">
                            {filteredProducts.map((product) => (
                                <tr
                                    key={product.id}
                                    className="text-black odd:bg-[#CFFFEE] even:bg-white"
                                >
                                    <td className="font-sans">
                                        {product.name}
                                    </td>
                                    <td className="w-auto">
                                        <ProductImage
                                            image={product.image}
                                            name={product.name}
                                        />
                                    </td>
                                    <td className="text-center">
                                        {product.stocks.map((stock) => (
                                            <span
                                                className="block"
                                                key={stock.id}
                                            >
                                                {stock.size_id === null
                                                    ? stock.price
                                                    : `${stock.size.name} - ${stock.price}`}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="text-center">
                                        {product.stocks.map((stock) => (
                                            <span
                                                className="block"
                                                key={stock.id}
                                            >
                                                {stock.size_id === null
                                                    ? stock.stock
                                                    : `${stock.size.name} - ${stock.stock}`}
                                            </span>
                                        ))}
                                    </td>
                                    <td>
                                        <menu className="font-sans text-center">
                                            <button className="block px-3 py-1 mx-auto my-1 font-sans text-white transition-colors duration-300 ease-in-out rounded bg-amber-600 hover:bg-amber-700">
                                                Edit
                                            </button>
                                            <button className="block px-3 py-1 mx-auto my-1 font-sans text-white transition-colors duration-300 ease-in-out bg-red-600 rounded hover:bg-red-700">
                                                Delete
                                            </button>
                                        </menu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    );
}
