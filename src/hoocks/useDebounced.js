import { useEffect, useState } from 'react';

function useDebounced(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [delay, value]);
    if (value !== debouncedValue) {
        return null;
    } else {
        return debouncedValue;
    }
}

export default useDebounced;
