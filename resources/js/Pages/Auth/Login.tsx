import { Head, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import InputText from "@/Components/InputText";
import { ChangeEvent, FormEvent, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Login() {
    const [success, setSuccess] = useState(false);
    const { data, setData, processing, post, errors, transform, reset } =
        useForm({
            email: "",
            password: "",
            remember: "",
        });

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        transform((data) => ({
            ...data,
            remember: data.remember ? "on" : "",
        }));
        post("/login", {
            preserveScroll: true,
            onError: () => reset("password"),
            onSuccess: () => setSuccess(true),
        });
    }
    return (
        <>
            <Head>
                <title>Smart Invent - Login</title>
            </Head>
            <main className="w-full h-[100vh] flex justify-evenly bg-white items-center md:px-10 px-5 ">
                <div className="md:block hidden md:w-[50vw] h-fit borde border-solid">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary  md:text-5xl lg:text-6xl text-center dark:text-white">
                        Smart Invent
                    </h1>
                    <p className="mb-6 text-lg text-center font-normal text-success lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nesciunt repellendus porro molestiae pariatur quae
                        doloremque quas ab nostrum aut adipisci et incidunt
                        repudiandae ipsa, quod eos tempore! Quaerat, laborum
                        voluptate.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="xl:w-96 md:72 space-y-5 xl:rounded-lg bg-secondary xl:p-10 md:p-6 p-3 h-fit w-full mx-2 md:mx-0 flex flex-col items-center"
                >
                    <div className="w-full">
                        <ApplicationLogo
                            className="mx-auto my-3"
                            xl="36"
                            lg="36"
                        />
                    </div>
                    {(errors.email || errors.password) && (
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
                                <span>{errors.email || errors.password}</span>
                            </div>
                        </div>
                    )}
                    {success && (
                        <div role="alert" className="alert alert-success">
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
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Login Successfully!</span>
                        </div>
                    )}
                    <div className="w-full space-y-2">
                        <InputText
                            type={"email"}
                            className={"block"}
                            value={data.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, email: e.target.value })
                            }
                            placeholder={"Enter Email"}
                        />
                        <InputText
                            type={"password"}
                            className={"block"}
                            value={data.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, password: e.target.value })
                            }
                            placeholder={"Enter Password"}
                        />

                        <div className="w-full flex space-x-3">
                            <label className="cursor-pointer flex justify-start items-center user-select-none py-1 gap-3">
                                <span className="label-text text-gray-600">
                                    Remember me
                                </span>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="w-full">
                        {processing ? (
                            <button className="btn btn-disabled btn-block">
                                <span className="loading loading-spinner"></span>
                            </button>
                        ) : (
                            <PrimaryButton
                                type={"submit"}
                                className={"btn-block text-white text-lg"}
                            >
                                Login
                            </PrimaryButton>
                        )}
                    </div>
                    <div className="divider">or</div>
                    <div className="w-full ">
                        <button className="text-lg mx-auto bg-transparent border border-solid border-red-700 text-red-700 hover:border-transparent hover:bg-red-700 hover:text-white transition-colors rounded px-3 py-1 flex items-center gap-2  duration-300 ease-in-out">
                            Google
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className=""
                                viewBox="0 0 16 16"
                            >
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}
