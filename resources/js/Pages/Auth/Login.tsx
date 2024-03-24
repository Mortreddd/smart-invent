import { Head, useForm, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import InputText from "@/Components/InputText";
import { ChangeEvent } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Login() {
    const { error } = usePage().props;
    const { data, setData, processing } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    return (
        <>
            <Head>
                <title>Smart Invent - Login</title>
            </Head>
            <main className="w-full h-[100vh] flex justify-evenly bg-white items-center md:px-10 px-5 ">
                <div className="md:block hidden md:w-[50vw] h-fit borde border-solid">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary  md:text-5xl lg:text-6xl text-center dark:text-white">
                        We invest in the world’s potential
                    </h1>
                    <p className="mb-6 text-lg text-center font-normal text-success lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nesciunt repellendus porro molestiae pariatur quae
                        doloremque quas ab nostrum aut adipisci et incidunt
                        repudiandae ipsa, quod eos tempore! Quaerat, laborum
                        voluptate.
                    </p>
                </div>
                <form className="xl:w-96 md:72 space-y-5 xl:rounded-lg bg-secondary xl:p-10 md:p-6 p-3 h-fit w-full mx-2 md:mx-0 flex flex-col items-center">
                    <div className="w-full">
                        <ApplicationLogo className="mx-auto" lg="40" md="32" />
                    </div>
                    <div className="w-full">
                        <InputText
                            type={"email"}
                            value={data.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, email: e.target.value })
                            }
                            placeholder={"Enter Email"}
                        />
                    </div>
                    <div className="w-full">
                        <InputText
                            type={"password"}
                            value={data.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setData({ ...data, password: e.target.value })
                            }
                            placeholder={"Enter Password"}
                        />
                    </div>
                    <div className="w-full">
                        <PrimaryButton
                            type={"submit"}
                            className={"btn-block text-white"}
                        >
                            Login
                        </PrimaryButton>
                    </div>
                </form>
            </main>
        </>
    );
}
