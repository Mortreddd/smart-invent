import { Head } from "@inertiajs/react";
import DashboardLayout from "./DashboardLayout";
export default function Welcome() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <DashboardLayout>
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-4xl text-gray-800">
                        Welcome to your dashboard
                    </h1>
                </div>
            </DashboardLayout>
        </>
    );
}
