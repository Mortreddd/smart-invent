import { Head } from "@inertiajs/react";
import Layout from "./Layout";
import TabLayout from "@/Components/TabLayout";
export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Layout>
                <div className="w-full h-full">
                    <TabLayout />
                </div>
            </Layout>
        </>
    );
}
