import { useEffect, useState } from 'react';
import { MousePositionType } from './types';

const useMousePosition = (): MousePositionType => {
	const [mousePosition, setMousePosition] = useState<MousePositionType>({
		x: 0,
		y: 0,
	});
	const updateMousePosition = (e: MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener('mousemove', updateMousePosition);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return mousePosition;
};

export default useMousePosition;
