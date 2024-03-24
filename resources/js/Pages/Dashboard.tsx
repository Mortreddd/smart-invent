import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <h1>Hello World</h1>
            <Link
                href="/logout"
                method="post"
                className="btn btn-error text-white"
            >
                Logout
            </Link>
        </>
    );
}
