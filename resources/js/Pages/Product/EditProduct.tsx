import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Product } from "@/types/charts/TotaEarnedEachProduct";

export default function EditProduct() {
    const { product } = usePage<{ product: Product }>().props;
    return (
        <React.Fragment>
            <Head>
                <title>Edit Product</title>
            </Head>
            <Drawer current="Products">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-white "></section>
            </Drawer>
        </React.Fragment>
    );
}
