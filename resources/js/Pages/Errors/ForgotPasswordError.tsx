import { Head } from "@inertiajs/react";

export default function ForgotPasswordError() {
    return (
        <>
            <Head>
                <title>Can't Process Reset Password Request</title>
            </Head>
            <main className="w-full bg-white min-h-[100vh] flex items-center justify-center">
                <div className="w-fit items-center flex flex-col p-6 rounded bg-gray-100 text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-20 h-20 text-white bg-red-500"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                    </svg>
                    <h1 className="text-2xl text-center">Request Failed</h1>
                    <p className="text-md">
                        Can't process your current request right now
                    </p>
                </div>
            </main>
        </>
    );
}
