import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <h1 className="text-xl">Welcome</h1>
        </>
    );
}
