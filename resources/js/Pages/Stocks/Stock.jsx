import ManageStocks from "../ManageStocks";
import { usePage } from "@inertiajs/react";

export default function Stock({}) {
    const { stocks } = usePage().props;
    console.log(stocks);
    return (
        <>
            <ManageStocks>
                <div className="w-full h-auto p-3">
                    <table className="w-full shadow-lg table-fixed">
                        <thead className="text-xl text-white bg-primary">
                            <tr>
                                <th>Products</th>
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
                                    <td>{stock.size?.name}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.stock}</td>
                                    <td>{stock.stock * stock.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ManageStocks>
        </>
    );
}
