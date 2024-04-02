import ApplicationLogo from "@/Components/ApplicationLogo";
import InputText from "@/Components/InputText";
import TextInputError from "@/Components/TextInputError";
import { Head, useForm, usePage } from "@inertiajs/react";
import { FormEvent, ChangeEvent } from "react";
import LoadingButton from "@/Components/LoadingButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ResetPassword() {
    const { token, email } = usePage().props;
    const { data, setData, post, processing, errors, transform, reset } =
        useForm({
            email: email,
            password: "",
            password_confirmation: "",
            token: token,
        });
    function handleSubmit(e: FormEvent) {
        post(route("password.update"), {
            preserveScroll: true,
            onError: () => reset("password", "password_confirmation"),
        });
    }
    return (
        <>
            <Head>
                <title>Reset Password</title>
            </Head>
            <main className="bg-white min-h-[100vh] w-full flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="xl:w-96 fade-in-early md:72 xl:rounded-lg space-y-4 bg-secondary xl:p-10 md:p-6 p-3 h-fit w-full mx-2 md:mx-0 flex flex-col items-center"
                >
                    <div className="w-full py-2">
                        <ApplicationLogo
                            className="mx-auto my-3"
                            xl="28"
                            lg="28"
                        />
                    </div>
                    <div className="w-full text-center h-fit">
                        <h2 className="block text-2xl text-gray-700">
                            Reset Password
                        </h2>
                        <p className="text-gray-600 block">
                            Enter a new password for your email
                        </p>
                    </div>
                    <div className="w-full space-y-2">
                        {errors.password ? (
                            <TextInputError
                                type={"password"}
                                value={data.password}
                                placeholder={"Invalid Password"}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        ) : (
                            <InputText
                                type={"password"}
                                placeholder={"Enter Password"}
                                value={data.password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        )}
                    </div>
                    <div className="w-full space-y-2">
                        {errors.password_confirmation ? (
                            <TextInputError
                                type={"password"}
                                value={data.password}
                                placeholder={"Password is not match"}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        ) : (
                            <InputText
                                type={"password"}
                                placeholder={"Enter Confirmation Password"}
                                value={data.password_confirmation}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setData({
                                        ...data,
                                        password_confirmation: e.target.value,
                                    })
                                }
                            />
                        )}
                    </div>
                    {processing ? (
                        <LoadingButton />
                    ) : (
                        <PrimaryButton
                            type={"submit"}
                            className={"w-full text-white"}
                        >
                            Save
                        </PrimaryButton>
                    )}
                </form>
            </main>
        </>
    );
}
