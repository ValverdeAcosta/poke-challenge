import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<undefined | null | T | any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })

    }, [url])

    return { data, loading };
}