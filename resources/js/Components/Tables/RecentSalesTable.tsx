import { Sale } from "@/types/models";

export default function RecentSalesTable({ sales }: { sales: Sale[] }) {
    return (
        <>
            <div className="h-full p-3 bg-white overflow-y-hidden">
                <table className="table-fixed w-full">
                    <caption className="caption-top text-left text-xl text-gray-800 py-2">
                        Recent Sales
                    </caption>
                    <thead className="text-black border-b-2 border-bottom border-black">
                        <tr>
                            <th>Sales ID</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Earned</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-300 ">
                        {sales.map((sale: Sale, index: number) => (
                            <tr key={index} className="">
                                <td className="text-center">{sale.id}</td>
                                <td>
                                    <div className="flex justify-evenly items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded h-14 w-14">
                                                <img
                                                    src={`images/${sale.product.image}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        {sale.product.name}
                                    </div>
                                </td>
                                <td className="text-center">{sale.quantity}</td>
                                <td className="text-center">{sale.earned}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
