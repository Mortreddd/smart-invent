import { Head, Link } from "@inertiajs/react";
import Dashboard from "@/Pages/Dashboard";
import { usePage } from "@inertiajs/react";
export default function Product() {
    const { products } = usePage().props;
    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <Dashboard>
                <div className="w-full h-full p-3">
                    <div className="flex justify-end w-full">
                        <Link className="px-4 py-2 text-black transition-colors duration-300 ease-in-out bg-white rounded hover:bg-gray-200">
                            Add Product
                        </Link>
                    </div>
                    <table className="w-full shadow-lg table-fixed">
                        <caption className="font-sans text-lg text-center text-gray-600">
                            All purchasable products
                        </caption>
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
                            {products.map((product) => (
                                <tr
                                    key={product.id}
                                    className="text-black odd:bg-[#CFFFEE] even:bg-white"
                                >
                                    <td className="font-sans">
                                        {product.name}
                                    </td>
                                    <td className="w-auto">
                                        <img
                                            src={`/images/${product.image}`}
                                            className="object-cover object-center py-2 mx-auto rounded aspect-square w-28 h-28"
                                            alt={product.name}
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
            </Dashboard>
        </>
    );
}
