import { Head, useForm, usePage, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Login() {
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
            <main
                className={`relative flex items-center justify-center md:justify-end md:pr-20 w-full h-[100vh] bg-white lg:bg-login lg:bg-contain md:bg-no-repeat`}
            >
                <form className="p-8 bg-none w-96">
                    <div className="mb-3">
                        <label
                            htmlFor=""
                            className="block mb-2 text-xl font-bold text-gray-700 text"
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
                            className="block mb-2 text-xl font-bold text-gray-700 text"
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

                    <div className="w-full mb-5">
                        <PrimaryButton
                            href="/admin/dashboard"
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
