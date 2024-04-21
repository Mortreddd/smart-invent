import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import ProductsTable from "@/Components/Tables/ProductsTable";

import { Head } from "@inertiajs/react";
import React from "react";

export default function ProductsLayout() {
    return (
        <React.Fragment>
            <Head>
                <title>Products</title>
            </Head>
            <Drawer current="Products">
                <Navbar />
                <section className="w-full min-h-[100vh] p-10 bg-white ">
                    <ProductsTable />
                </section>
            </Drawer>
        </React.Fragment>
    );
}
