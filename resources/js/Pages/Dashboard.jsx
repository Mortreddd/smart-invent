import { Head } from "@inertiajs/react";
import Layout from "./Layout";
import TabLayout from "@/Components/TabLayout";
export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Layout activeLink={1}>
                <div className="w-full h-full">
                    <TabLayout />
                </div>
            </Layout>
        </>
    );
}
