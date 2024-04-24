import React, { ChangeEvent, FormEvent } from "react";
import InputText from "../InputText";
import { useForm } from "@inertiajs/react";
import LoadingButton from "../LoadingButton";
import PrimaryButton from "../Buttons/PrimaryButton";

interface EmployeeFormProps {
    first_name: string;
    middle_name: string;
    last_name: string;
    role: string;
    image: File | null;
    phone: string;
    gender: string;
    email: string;
    password: string;
}
export default function AddEmployeeForm() {
    const { data, setData, processing, post, errors, reset } =
        useForm<EmployeeFormProps>({
            first_name: "",
            middle_name: "",
            last_name: "",
            role: "",
            image: null,
            phone: "",
            gender: "",
            email: "",
            password: "",
        });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post(route("employee.store"), {
            onSuccess: () =>
                reset(
                    "first_name",
                    "middle_name",
                    "last_name",
                    "role",
                    "image",
                    "phone",
                    "gender",
                    "email",
                    "password"
                ),
        });
    }
    function handleProductImage(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        if (files && files.length > 0) {
            setData({ ...data, image: files[0] });
        } else {
            setData({ ...data, image: null });
        }
    }
    return (
        <React.Fragment>
            <form
                onSubmit={handleSubmit}
                className="w-full rounded-lg bg-white space-y-4"
            >
                <div className="w-full flex gap-3 justify-between items-center">
                    <div className="w-auto space-y-2">
                        {errors.first_name && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.first_name}
                            </span>
                        )}
                        <InputText
                            type="text"
                            id="first-name"
                            value={data.first_name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, first_name: e.target.value })
                            }
                            className="block w-full bg-white focus:border-none"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="w-auto space-y-2">
                        {errors.middle_name && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.middle_name}
                            </span>
                        )}
                        <InputText
                            type="text"
                            id="middle-name"
                            value={data.middle_name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({
                                    ...data,
                                    middle_name: e.target.value,
                                })
                            }
                            className="block w-full bg-white focus:border-none"
                            placeholder="Middle Name"
                        />
                    </div>
                    <div className="w-auto space-y-2">
                        {errors.last_name && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.last_name}
                            </span>
                        )}
                        <InputText
                            type="text"
                            id="last-name"
                            value={data.last_name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, last_name: e.target.value })
                            }
                            className="block w-full bg-white focus:border-none"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center gap-3">
                    <div className="w-auto space-y-2">
                        {errors.phone && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.phone}
                            </span>
                        )}
                        <InputText
                            type="number"
                            id="phone"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({
                                    ...data,
                                    phone: e.target.value,
                                })
                            }
                            className="block w-full bg-white focus:border-none"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="w-auto space-y-2">
                        {errors.gender && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.gender}
                            </span>
                        )}
                        <select
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                setData({ ...data, gender: e.target.value })
                            }
                            className=" border focus:ring-1 focus:border-primary focus:ring-primary border-primary bg-white text-gray-500 focus:outline-none rounded-lg min-w-lg"
                        >
                            <option disabled selected>
                                Gender
                            </option>
                            <option value={"M"}>{"Male"}</option>
                            <option value={"F"}>{"Female"}</option>
                        </select>
                    </div>
                    <div className="w-auto space-y-2">
                        {errors.role && (
                            <span className="block text-sm text-red-600 font-sans">
                                {errors.role}
                            </span>
                        )}
                        <select
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                setData({ ...data, role: e.target.value })
                            }
                            className=" border focus:ring-1 focus:border-primary focus:ring-primary border-primary bg-white text-gray-500 focus:outline-none rounded-lg min-w-lg"
                        >
                            <option disabled selected>
                                Gender
                            </option>
                            <option value={"Admin"}>{"Admin"}</option>
                            <option value={"Staff"}>{"Staff"}</option>
                        </select>
                    </div>
                </div>
                <div className="w-auto space-y-2">
                    {errors.email && (
                        <span className="block text-sm text-red-600 font-sans">
                            {errors.email}
                        </span>
                    )}
                    <InputText
                        type="email"
                        id="email"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData({
                                ...data,
                                email: e.target.value,
                            })
                        }
                        className="block w-full bg-white focus:border-none"
                        placeholder="Email"
                    />
                </div>
                <div className="w-auto space-y-2">
                    {errors.password && (
                        <span className="block text-sm text-red-600 font-sans">
                            {errors.password}
                        </span>
                    )}
                    <InputText
                        type="password"
                        id="password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData({
                                ...data,
                                password: e.target.value,
                            })
                        }
                        className="block w-full bg-white focus:border-none"
                        placeholder="Password"
                    />
                </div>
                <div className="w-full space-y-2">
                    {errors.image && (
                        <span className="block text-sm text-red-600 font-sans">
                            {errors.image}
                        </span>
                    )}
                    <label htmlFor="product-name" className="text-lg">
                        Employee Image
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
