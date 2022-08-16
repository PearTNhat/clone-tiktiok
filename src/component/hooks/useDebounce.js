import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const hanle = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(hanle);
    }, [value]);
    return debounce;
}

export default useDebounce;
