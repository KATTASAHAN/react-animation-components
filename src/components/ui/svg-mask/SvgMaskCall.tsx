import SvgMask from './SvgMask';

const SvgMaskCall = () => {
	return (
		<SvgMask
			revealText={
				<div>
					<p className="text-sm">your name</p>
					<div>
						<p>Making</p>
						<p className="text-lime-500">Good</p>
						<p className="text-lime-500">Shit</p>
						<p>Since</p>
						<p>2024</p>
					</div>
				</div>
			}
		>
			<div>
				<p className="text-sm">your name</p>
				<div>
					<p>Hiding</p>
					<p>Bad</p>
					<p>Shit</p>
					<p>Since</p>
					<p>2024</p>
				</div>
			</div>
		</SvgMask>
	);
};

export default SvgMaskCall;
