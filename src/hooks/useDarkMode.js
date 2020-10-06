import React from 'react';
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage(key);


    return [storedValue, setValue];
}

export default useDarkMode;
