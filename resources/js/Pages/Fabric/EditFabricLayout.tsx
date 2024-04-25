import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Drawer from "@/Components/Drawer";
import InputText from "@/Components/InputText";
import LoadingButton from "@/Components/LoadingButton";
import Navbar from "@/Components/Navbar";
import { Course } from "@/types/models/course";
import { Fabric } from "@/types/models/fabric";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { ChangeEvent, FormEvent } from "react";

interface FabricProps {
    course_id: number | null;
    textile: string;
    stock: number;
    price: number;
}
export default function EditFabricLayout() {
    const { courses, fabric } = usePage<{
        courses: Array<Course>;
        fabric: Fabric;
    }>().props;
    const { data, setData, patch, processing, errors, reset } =
        useForm<FabricProps>({
            course_id: fabric.course_id,
            textile: fabric.textile,
            stock: fabric.stock,
            price: fabric.price,
        });
    const textiles = ["Blouse", "Pants", "Skirt", "Any"];
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        patch(route("fabric.update"), {
            onSuccess: () => reset("course_id", "stock", "price", "textile"),
        });
    }

    return (
        <React.Fragment>
            <Head>
                <title>Edit {fabric.course?.name}</title>
            </Head>
            <Drawer current="Products">
                <Navbar />
                <section className="w-full min-h-[90vh] p-10 bg-white flex justify-center fade-in-early">
                    <form
                        onSubmit={handleSubmit}
                        className="w-[30rem]  rounded-lg bg-white space-y-4"
                    >
                        <div className="w-full flex justify-between items-center gap-3">
                            <div className="w-auto space-y-2">
                                {errors.course_id && (
                                    <span className="block text-sm text-red-600 font-sans">
                                        {errors.course_id}
                                    </span>
                                )}
                                <select
                                    onChange={(
                                        e: ChangeEvent<HTMLSelectElement>
                                    ) =>
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
                                    {courses.map(
                                        (course: Course, index: number) =>
                                            fabric.course_id === course.id ? (
                                                <option
                                                    key={index}
                                                    value={course.id}
                                                    selected
                                                >
                                                    {course.name}
                                                </option>
                                            ) : (
                                                <option
                                                    key={index}
                                                    value={course.id}
                                                >
                                                    {course.name}
                                                </option>
                                            )
                                    )}
                                </select>
                            </div>
                            <div className="w-auto space-y-2">
                                {errors.textile && (
                                    <span className="block text-sm text-red-600 font-sans">
                                        {errors.textile}
                                    </span>
                                )}
                                <select
                                    onChange={(
                                        e: ChangeEvent<HTMLSelectElement>
                                    ) =>
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

                                    {textiles.map(
                                        (textile: string, index: number) =>
                                            fabric.textile === textile ? (
                                                <option
                                                    key={index}
                                                    value={textile}
                                                    selected
                                                >
                                                    {textile}
                                                </option>
                                            ) : (
                                                <option
                                                    key={index}
                                                    value={textile}
                                                >
                                                    {textile}
                                                </option>
                                            )
                                    )}
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
                                value={data.price}
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
                                value={data.stock}
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
                                href={route("fabrics.index")}
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
