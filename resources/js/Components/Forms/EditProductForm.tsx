import React, { ChangeEvent } from "react";
import InputText from "../InputText";
import { useForm, usePage } from "@inertiajs/react";
import { Product } from "@/types/models/product";
import { Size } from "@/types/models/size";
import PrimaryButton from "../PrimaryButton";
import LoadingButton from "../LoadingButton";
import { Stock } from "@/types/models/stock";

export default function EditProductForm() {
    const { sizes, stock } = usePage<{
        sizes: Array<Size>;
        stock: Stock<Product>;
    }>().props;

    const { data, setData, processing, errors } = useForm<{
        name: string | undefined;
        price: number;
        stock: number;
        image: File | null;
        size: number | null;
    }>({
        name: stock.product?.name,
        price: stock.price,
        stock: stock.stock,
        image: null,
        size: stock.size_id || null,
    });

    function handleProductImage(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        if (files && files.length > 0) {
            setData({ ...data, image: files[0] });
        }
    }
    return (
        <React.Fragment>
            <form className="w-[30rem] rounded-lg bg-white space-y-4">
                <div className="w-full space-y-2">
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
                        <label htmlFor="product-name" className="text-lg">
                            Product Price
                        </label>
                        <InputText
                            type="number"
                            id="product-name"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                        <label htmlFor="product-name" className="text-lg">
                            Stocks
                        </label>
                        <InputText
                            type="number"
                            id="product-name"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                    <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            setData({ ...data, size: parseInt(e.target.value) })
                        }
                        className=" ring-secondary focus:ring-1 focus:border-none border-secondary bg-white focus:outline-none rounded-lg w-full max-w-xs"
                    >
                        <option disabled>Size</option>
                        {sizes.map((size: Size, index: number) =>
                            size.id === stock.size_id ? (
                                <option
                                    key={index}
                                    value={size.id}
                                    selected
                                ></option>
                            ) : (
                                <option key={index} value={size.id}>
                                    {size.name}
                                </option>
                            )
                        )}
                    </select>
                </div>
                <div className="w-full space-y-2">
                    <label htmlFor="product-name" className="text-lg">
                        Product Image
                    </label>
                    <div className="w-full space-y-2">
                        {data.image ? (
                            <div className="h-fit text-center">
                                <div className="h-32 w-32 rounded mx-auto">
                                    <img
                                        src={URL.createObjectURL(data.image)}
                                        className="object-center object-scale-down"
                                        alt="Product Image"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-error mx-auto text-white"
                                    onClick={(): void => {
                                        setData({ ...data, image: null });
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        ) : (
                            <img
                                className="w-32 h-32 bg-gray-400 rounded object-center object-scale-down mx-auto"
                                src={`images/${stock.product?.image}`}
                            />
                        )}
                    </div>
                    <input
                        type="file"
                        accept="jpg,png,jpeg"
                        onChange={handleProductImage}
                        className="file-input file-input-bordered file-input-primary w-full focus:border-none"
                    />
                </div>
                <div className="w-full space-y-2">
                    {processing ? (
                        <LoadingButton />
                    ) : (
                        <PrimaryButton
                            type={"submit"}
                            className="text-white w-full"
                        >
                            Create
                        </PrimaryButton>
                    )}
                </div>
            </form>
        </React.Fragment>
    );
}
