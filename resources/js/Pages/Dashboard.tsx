import { usePage, Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className="bg-white w-full h-full min-h-[100vh]">
                <Navbar />
            </main>
        </>
    );
}
