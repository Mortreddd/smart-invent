import { Head, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import MailIcon from "@/Icons/MailIcon";

export default function Login({}) {
    const { errors } = usePage().props;
    const { data, setData, processing } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submitLoginForm(e) {
        e.preventDefault();
        router.post("/login", data);
    }
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main className="absolute top-0 left-0 h-full w-full flex justify-end items-center bg-white">
                <form action="" className="bg-none w-96 p-8">
                    <div className="mb-3">
                        <label
                            htmlFor=""
                            className="block text-gray-700 text-xl font-bold text mb-2"
                        >
                            Email Address
                        </label>

                        <TextInput
                            type="email"
                            value={data.email}
                            autocomplete="on"
                            name="email"
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="Enter Email"
                            className={`${
                                errors.email ? "border-red-500 " : "border-none"
                            }`}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor=""
                            className="block text-gray-700 text-xl font-bold text mb-2"
                        >
                            Password
                        </label>

                        <TextInput
                            type="password"
                            value={data.password}
                            autocomplete="off"
                            name="password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Enter Password"
                            className={`${
                                errors.password
                                    ? "border-red-500 "
                                    : "border-none"
                            }`}
                        />
                    </div>

                    <div className="mb-5 w-full">
                        <PrimaryButton
                            href="/"
                            method="get"
                            as="button"
                            type="submit"
                            className={"w-full"}
                        >
                            Login
                        </PrimaryButton>
                    </div>
                </form>
            </main>
        </>
    );
}
