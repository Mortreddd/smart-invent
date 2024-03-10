import { usePage } from "@inertiajs/react";
import ProductImage from "@/Components/ProductImage";
import Layout from "../Layout";
export default function Stock({}) {
    const { stocks } = usePage().props;
    return (
        <>
            <Layout activeLink={2}>
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
                            Stocks
                        </h3>
                    </div>
                    <div className="w-full h-auto p-3">
                        <table className="w-full shadow-lg table-fixed">
                            <thead className="text-xl text-white bg-primary">
                                <tr>
                                    <th>Products</th>
                                    <th>Image</th>
                                    <th>Size</th>
                                    <th>Unit Price</th>
                                    <th>Qty in Stock</th>
                                    <th>Inventory Value</th>
                                </tr>
                            </thead>
                            <tbody className="w-full text-center">
                                {stocks.map((stock) => (
                                    <tr
                                        key={stock.id}
                                        className="text-black odd:bg-[#CFFFEE] even:bg-white text-lg my-auto"
                                    >
                                        <td>{stock.product.name}</td>
                                        <td className="w-auto">
                                            <ProductImage
                                                image={stock.product.image}
                                                name={stock.product.name}
                                            />
                                        </td>
                                        <td>{stock.size?.name}</td>
                                        <td>{stock.price}</td>
                                        <td>{stock.stock}</td>
                                        <td>{stock.stock * stock.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
}
