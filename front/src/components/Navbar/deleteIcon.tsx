interface iconProps {
	fillColor: string;
}

const deleteIcon: React.FC<iconProps> = ({ fillColor }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="23"
		height="24"
		viewBox="0 0 23 24"
		fill="none"
	>
		<path
			d="M9 3.85714V4.28571H13.2857V3.85714C13.2857 3.28882 13.0599 2.74378 12.6581 2.34191C12.2562 1.94005 11.7112 1.71429 11.1429 1.71429C10.5745 1.71429 10.0295 1.94005 9.62763 2.34191C9.22576 2.74378 9 3.28882 9 3.85714ZM7.28571 4.28571V3.85714C7.28571 2.83417 7.69209 1.85309 8.41545 1.12973C9.1388 0.406376 10.1199 0 11.1429 0C12.1658 0 13.1469 0.406376 13.8703 1.12973C14.5936 1.85309 15 2.83417 15 3.85714V4.28571H21.4286C21.6559 4.28571 21.8739 4.37602 22.0347 4.53677C22.1954 4.69751 22.2857 4.91553 22.2857 5.14286C22.2857 5.37019 22.1954 5.5882 22.0347 5.74895C21.8739 5.90969 21.6559 6 21.4286 6H20.136L18.5143 20.2011C18.3947 21.247 17.8944 22.2123 17.1087 22.9129C16.323 23.6135 15.307 24.0005 14.2543 24H8.03143C6.97874 24.0005 5.96269 23.6135 5.17702 22.9129C4.39134 22.2123 3.89101 21.247 3.77143 20.2011L2.14971 6H0.857143C0.629814 6 0.411797 5.90969 0.251051 5.74895C0.0903058 5.5882 0 5.37019 0 5.14286C0 4.91553 0.0903058 4.69751 0.251051 4.53677C0.411797 4.37602 0.629814 4.28571 0.857143 4.28571H7.28571ZM9.42857 9.85714C9.42857 9.62981 9.33827 9.4118 9.17752 9.25105C9.01677 9.09031 8.79876 9 8.57143 9C8.3441 9 8.12608 9.09031 7.96534 9.25105C7.80459 9.4118 7.71429 9.62981 7.71429 9.85714V18.4286C7.71429 18.6559 7.80459 18.8739 7.96534 19.0347C8.12608 19.1954 8.3441 19.2857 8.57143 19.2857C8.79876 19.2857 9.01677 19.1954 9.17752 19.0347C9.33827 18.8739 9.42857 18.6559 9.42857 18.4286V9.85714ZM13.7143 9C13.487 9 13.2689 9.09031 13.1082 9.25105C12.9474 9.4118 12.8571 9.62981 12.8571 9.85714V18.4286C12.8571 18.6559 12.9474 18.8739 13.1082 19.0347C13.2689 19.1954 13.487 19.2857 13.7143 19.2857C13.9416 19.2857 14.1596 19.1954 14.3204 19.0347C14.4811 18.8739 14.5714 18.6559 14.5714 18.4286V9.85714C14.5714 9.62981 14.4811 9.4118 14.3204 9.25105C14.1596 9.09031 13.9416 9 13.7143 9Z"
			fill={fillColor}
		/>
	</svg>
);
export default deleteIcon;