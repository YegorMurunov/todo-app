import { useState, useRef, useEffect } from 'react';

export const useOutside = initialVisible => {
	const [isShow, setIsShow] = useState(initialVisible);
	const ref = useRef(null);

	const handleClickOutside = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isShow, setIsShow };
};
