import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {

    const [debouncedVal, setDeboundedVal] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            setDeboundedVal(value)
        }, delay);

        return () => {
            clearTimeout(timer)
        }

    }, [value, delay])

    return debouncedVal

}