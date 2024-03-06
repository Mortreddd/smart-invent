import { Head } from "@inertiajs/react";
import Layout from "@/Pages/Layout";
import TabLayout from "@/Components/TabLayout";
export default function Product() {
    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <Layout>
                <div className="w-full h-full">
                    <TabLayout />
                    <div className="w-full h-full p-3">
                        <table className="w-full shadow-lg table-fixed">
                            <thead className="text-white bg-primary">
                                <tr>
                                    <th>Product</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Stocks</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="text-black odd:bg-[#CFFFEE] even:bg-white">
                                    <td>ID Laces</td>
                                    <td>ID Laces</td>
                                    <td>ID Laces</td>
                                    <td>ID Laces</td>
                                    <td>ID Laces</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
}
