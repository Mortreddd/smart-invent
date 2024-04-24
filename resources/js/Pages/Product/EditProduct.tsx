import { Head, usePage, useForm, Link } from "@inertiajs/react";
import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import React, { ChangeEvent, FormEvent } from "react";
import InputText from "@/Components/InputText";
import { Product } from "@/types/models/product";
import { Size } from "@/types/models/size";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import LoadingButton from "@/Components/LoadingButton";
import { Stock } from "@/types/models/stock";

export default function EditProduct() {
    const { sizes, stock } = usePage<{
        sizes: Array<Size>;
        stock: Stock<Product>;
    }>().props;

    const { data, setData, processing, put, errors } = useForm<{
        name: string;
        price: number;
        stock: number;
        product_id: number;
        size_id: null | number;
    }>({
        name: stock.product?.name || "",
        price: stock.price || 0,
        stock: stock.stock || 0,
        product_id: stock.product_id,
        size_id: stock.size_id || null,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        put(route("product.update"));
    }
    return (
        <React.Fragment>
            <Head>
                <title>Edit Product</title>
            </Head>
            <Drawer current="Products">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-white flex justify-center fade-in-early">
                    <form
                        onSubmit={handleSubmit}
                        className="w-[30rem] rounded-lg bg-white space-y-4"
                    >
                        <div className="w-full space-y-2">
                            {errors.name && (
                                <span className="block text-sm text-red-600 font-sans">
                                    {errors.name}
                                </span>
                            )}
                            <label htmlFor="product-name" className="text-lg">
                                Product Name
                            </label>
                            <InputText
                                type="text"
                                id="product-name"
                                value={data.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setData({ ...data, name: e.target.value })
                                }
                                className="block w-full bg-white focus:border-none"
                                placeholder="Product Name"
                            />
                        </div>

                        <div className="w-full flex justify-between items-center gap-3">
                            <div className="w-auto space-y-2">
                                {errors.price && (
                                    <span className="block text-sm text-red-600 font-sans">
                                        {errors.price}
                                    </span>
                                )}
                                <label
                                    htmlFor="product-name"
                                    className="text-lg"
                                >
                                    Product Price
                                </label>
                                <InputText
                                    type="number"
                                    id="product-name"
                                    value={data.price}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) =>
                                        setData({
                                            ...data,
                                            price: parseInt(e.target.value),
                                        })
                                    }
                                    className="block w-full bg-white focus:border-none"
                                    placeholder="Product Price"
                                />
                            </div>
                            <div className="w-auto space-y-2">
                                {errors.stock && (
                                    <span className="block text-sm text-red-600 font-sans">
                                        {errors.stock}
                                    </span>
                                )}
                                <label
                                    htmlFor="product-name"
                                    className="text-lg"
                                >
                                    Stocks
                                </label>
                                <InputText
                                    type="number"
                                    id="product-name"
                                    value={data.stock}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) =>
                                        setData({
                                            ...data,
                                            stock: parseInt(e.target.value),
                                        })
                                    }
                                    className="block w-full bg-white focus:border-none"
                                    placeholder="Stocks"
                                />
                            </div>
                        </div>
                        <div className="w-full space-y-2">
                            {processing ? (
                                <LoadingButton />
                            ) : (
                                <PrimaryButton
                                    type={"submit"}
                                    className="text-white w-full"
                                >
                                    Save
                                </PrimaryButton>
                            )}
                            <Link
                                href={route("products.index")}
                                as="button"
                                method="get"
                                className="w-full rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors duration-200 ease-in-out py-3 text-white"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </section>
            </Drawer>
        </React.Fragment>
    );
}
