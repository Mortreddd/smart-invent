import InputText from "@/Components/InputText";
import { useForm, Head, Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import React, { ChangeEvent, FormEvent } from "react";
import LoadingButton from "@/Components/LoadingButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ForgotPassword() {
    const { data, setData, processing, post, errors, reset } = useForm({
        email: "",
    });

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        post(route("password.email"), {
            preserveScroll: true,
            onError: () => reset("email"),
        });
    }
    return (
        <React.Fragment>
            <Head>
                <title>Forgot Password</title>
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
                            Enter your email to reset your password
                        </p>
                    </div>
                    {errors.email && (
                        <div className="w-full">
                            <div role="alert" className="alert alert-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{errors.email}</span>
                            </div>
                        </div>
                    )}
                    <div className="w-full py-2 space-y-2">
                        <InputText
                            type={"email"}
                            placeholder={"example@dummy.com"}
                            value={data.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </div>
                    {processing ? (
                        <LoadingButton />
                    ) : (
                        <PrimaryButton
                            type={"submit"}
                            className={"w-full text-white"}
                        >
                            Reset Password
                        </PrimaryButton>
                    )}

                    <div className="divider">OR</div>
                    <div className="w-full">
                        {processing ? (
                            <Link
                                href={route("login")}
                                disabled={true}
                                className="text-white w-full btn-warning btn"
                            >
                                Go back to Login
                            </Link>
                        ) : (
                            <Link
                                href={route("login")}
                                disabled={false}
                                className="text-white w-full btn-warning btn"
                            >
                                Go back to Login
                            </Link>
                        )}
                    </div>
                </form>
            </main>
        </React.Fragment>
    );
}
