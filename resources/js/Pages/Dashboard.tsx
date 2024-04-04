import { usePage, Head, Link } from "@inertiajs/react";
import { RecentSalesProps } from "@/types/models";
import Navbar from "@/Components/Navbar";
import { TotalEarnedEachProductProps } from "@/types/charts/TotaEarnedEachProduct";
import Drawer from "@/Components/Drawer";
import React from "react";
export default function Dashboard() {
    const { sales } = usePage<RecentSalesProps>().props;
    const { products } = usePage<TotalEarnedEachProductProps>().props;
    return (
        <React.Fragment>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className="bg-white w-full h-full min-h-[100vh]">
                <Drawer>
                    <Navbar />
                    <section className="p-10 grid grid-cols-4 gap-5 grid-rows-16 grid-flow-col w-full bg-white h-full">
                        <h1 className="text-2xl col-span-1 flex items-center justify-start row-span-1 text-gray-700 font-bold">
                            Dashboard
                        </h1>
                        <div className="col-span-4 row-span-2 grid-flow-col grid gap-5">
                            <div className="rounded col-span-1 h-full w-full row-span-1 bg-gray-100 items-center flex">
                                Income
                            </div>
                            <div className="rounded col-span-1 h-full w-full row-span-1 bg-gray-100 items-center flex">
                                Income
                            </div>
                            <div className="rounded col-span-1 h-full w-full row-span-1 bg-gray-100 items-center flex">
                                Income
                            </div>
                            <div className="rounded col-span-1 h-full w-full row-span-1 bg-gray-100 items-center flex">
                                Income
                            </div>
                        </div>
                        <div className="col-span-4 row-span-4 grid-flow-col grid gap-5">
                            <div className="col-span-2 h-full w-full bg-gray-100 row-span-4"></div>
                            <div className="col-span-2 h-full w-full bg-gray-100 row-span-4"></div>
                        </div>
                        <div className="grid col-span-4 bg-gray-100 row-span-9 gap-5 h-full"></div>
                    </section>
                </Drawer>
            </main>
        </React.Fragment>
    );
}
