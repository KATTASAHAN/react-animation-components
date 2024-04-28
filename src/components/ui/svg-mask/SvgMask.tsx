import { useState } from 'react';
import styles from './SvgMask.module.css';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import useMousePosition from './useMousePosition';
import { SvgMaskProps } from './types';

const SvgMask = ({ children, revealText, containerStyles }: SvgMaskProps) => {
	const { x, y } = useMousePosition();
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const size: number = isHovered ? 400 : 40;

	return (
		<>
			<div className={cn(styles.container, containerStyles)}>
				<motion.div
					className={cn(
						// styles.mask
						`h-full w-full flex items-center justify-center text-black text-8xl font-extrabold text-center absolute [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat] cursor-default uppercase ${
							isHovered ? 'bg-white' : 'bg-slate-600'
						}`
					)}
					animate={{
						WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
						WebkitMaskSize: `${size}px`,
					}}
					transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
				>
					<p
						onMouseEnter={() => {
							setIsHovered(true);
						}}
						onMouseLeave={() => {
							setIsHovered(false);
						}}
					>
						{children}
					</p>
				</motion.div>
				<div
					className={cn(
						// styles.revealText
						'h-full w-full flex items-center justify-center text-white text-8xl font-extrabold text-center uppercase'
					)}
				>
					{revealText}
				</div>
			</div>
		</>
	);
};

export default SvgMask;
