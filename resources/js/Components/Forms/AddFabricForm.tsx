import React, { ChangeEvent, FormEvent } from "react";
import InputText from "../InputText";
import { useForm, usePage } from "@inertiajs/react";
import { Course } from "@/types/models/course";
import LoadingButton from "../LoadingButton";
import PrimaryButton from "../Buttons/PrimaryButton";

interface FabricFormProps {
    course_id: number;
    textile: string;
    image: File | null;
    stock: number;
    price: number;
}

export default function AddFabricForm() {
    const { courses } = usePage<{ courses: Array<Course> }>().props;
    const { data, setData, post, processing, errors, reset } =
        useForm<FabricFormProps>();
    const textiles = ["Blouse", "Pants", "Skirt", "Any"];
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        post(route("fabric.store"), {
            onSuccess: () =>
                reset("course_id", "image", "stock", "price", "textile"),
        });
        reset();
    }

    function handleProductImage(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        if (files && files.length > 0) {
            setData({ ...data, image: files[0] });
        }
    }

    return (
        <React.Fragment>
            <form
                onSubmit={handleSubmit}
                className="w-full rounded-lg bg-white space-y-4"
            >
                <div className="w-full flex justify-between items-center gap-3">
                    <div className="w-auto space-y-2">
                        {errors.course_id && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.course_id}
                            </span>
                        )}
                        <select
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                setData({
                                    ...data,
                                    course_id: parseInt(e.target.value),
                                })
                            }
                            className="  border focus:ring-1 focus:border-primary focus:ring-primary border-primary bg-white text-gray-500 focus:outline-none rounded-lg min-w-lg"
                        >
                            <option disabled selected>
                                Course
                            </option>
                            {courses.map((course: Course, index: number) => (
                                <option key={index} value={course.id}>
                                    {course.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-auto space-y-2">
                        {errors.textile && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.textile}
                            </span>
                        )}
                        <select
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                setData({
                                    ...data,
                                    textile: e.target.value,
                                })
                            }
                            className=" border focus:ring-1 focus:border-primary focus:ring-primary border-primary bg-white text-gray-500 focus:outline-none rounded-lg min-w-lg"
                        >
                            <option disabled selected>
                                Textile
                            </option>

                            {textiles.map((textile: string, index: number) => (
                                <option value={textile} key={index}>
                                    {textile}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="w-auto space-y-2">
                    {errors.price && (
                        <span className="block text-sm text-red-600 font-sans">
                            {errors.price}
                        </span>
                    )}
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
                        placeholder="Price"
                    />
                </div>
                <div className="w-auto space-y-2">
                    {errors.stock && (
                        <span className="block text-sm text-red-600 font-sans">
                            {errors.stock}
                        </span>
                    )}
                    <InputText
                        type="number"
                        id="stock"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData({
                                ...data,
                                stock: parseInt(e.target.value),
                            })
                        }
                        className="block w-full bg-white focus:border-none"
                        placeholder="Stock"
                    />
                </div>
                <div className="w-full space-y-2"></div>
                <div className="w-full space-y-2">
                    {errors.image && (
                        <span className="block text-sm text-red-600 font-sans">
                            {errors.image}
                        </span>
                    )}
                    <label htmlFor="product-name" className="text-lg">
                        Fabric Image
                    </label>
                    <div className="w-full space-y-2">
                        {data.image ? (
                            <div className="h-fit text-center">
                                <div className="h-32 w-32 rounded mx-auto">
                                    <img
                                        src={URL.createObjectURL(data.image)}
                                        className="object-center object-scale-down"
                                        alt="Fabric Image"
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
                            <div className="w-32 h-32 bg-gray-400 rounded mx-auto"></div>
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
