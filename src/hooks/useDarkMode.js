import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (theme) => {
	const [mode, setMode] = useLocalStorage(theme);

	useEffect(() => {
		if (mode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [mode]);
	return [mode, setMode];
};
