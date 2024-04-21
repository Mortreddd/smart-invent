import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Product } from "@/types/models/product";
import { Stock } from "@/types/models/stock";
import EditProductForm from "@/Components/Forms/EditProductForm";

export default function EditProduct() {
    const { stock } = usePage<{ stock: Stock<Product> }>().props;
    return (
        <React.Fragment>
            <Head>
                <title>Edit Product</title>
            </Head>
            <Drawer current="Products">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-white ">
                    <EditProductForm />
                </section>
            </Drawer>
        </React.Fragment>
    );
}
