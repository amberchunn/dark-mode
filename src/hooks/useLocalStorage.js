import { useState } from 'react';

export const useLocalStorage = (key, initialVal) => {
	const [storedVal, setStoredVal] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialVal;
	});
	const setVal = (val) => {
		setStoredVal(val);
		window.localStorage.setItem(key, JSON.stringify(val));
	};
	return [storedVal, setVal];
};
