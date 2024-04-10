interface iconProps {
	fillColor: string;
	width: number;
	height: number;
}

const FacebookIcon: React.FC<iconProps> = ({ fillColor, width, height }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 20 20"
	>
		<path
			fill={fillColor}
			d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"
		/>
	</svg>
);
export default FacebookIcon;