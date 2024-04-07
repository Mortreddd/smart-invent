import { set } from "firebase/database";
import { useEffect, useState } from "react";

interface LinkProps {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
}

interface MetaProps {
    current_page?: number;
    from?: number;
    last_page?: number;
    links?: { url?: string; label?: string; active?: boolean }[];
}
export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [meta, setMeta] = useState<MetaProps | null>();
    const [links, setLinks] = useState<LinkProps | null>();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(route(url))
                .then((response) => response.json())
                .then((data) => {
                    setData(data.data);
                    setLinks(data.links);
                    setMeta(data.meta);
                    setIsError(false);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    setData([]);
                });
            return () => {};
        };
        fetchData();
    }, [url]);

    return { data, isLoading, isError, links, meta } as const;
}
