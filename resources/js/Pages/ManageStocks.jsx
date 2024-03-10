import { Head } from "@inertiajs/react";
import Layout from "./Layout";
import TabLayout from "@/Components/TabLayout";
export default function ManageStocks({ children }) {
    return (
        <>
            <Head>
                <title>Manage Stock</title>
            </Head>
            <Layout activeLink={2}>
                <div className="w-full h-full">{children}</div>
            </Layout>
        </>
    );
}
