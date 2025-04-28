// iPhoneFrame.tsx
import React from "react";

// type iPhoneFrameProps = {
//   children: React.ReactNode;
// };

export const IPhoneFrame = ({ children }) => {
	return (
		<div style={styles.wrapper}>
			<div style={styles.iphone}>
				<div style={styles.notch}></div>
				<div style={styles.screen}>{children}</div>
				<div style={styles.button}></div>
				<div style={styles.volumeButtons}></div>
			</div>
		</div>
	);
};

const styles = {
	wrapper: {
		background: "#f0f0f0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		margin: 0,
	},
	iphone: {
		width: "390px", // iPhone 14 Plus width
		height: "844px", // iPhone 14 Plus height
		background: "#000000",
		border: "12px solid #000",
		borderRadius: "50px",
		position: "relative",
		boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
		overflow: "hidden",
	},
	notch: {
		width: "210px",
		height: "30px",
		background: "#000",
		borderRadius: "0 0 20px 20px",
		position: "absolute",
		top: 0,
		left: "50%",
		transform: "translateX(-50%)",
	},
	screen: {
		// padding: "50px 20px 20px 20px",
		height: "100%",
		boxSizing: "border-box",
		// overflow: "auto",
	},
	button: {
		width: "5px",
		height: "50px",
		background: "#000",
		position: "absolute",
		right: "-15px",
		top: "120px",
		borderRadius: "5px",
	},
	volumeButtons: {
		width: "5px",
		height: "100px",
		background: "#000",
		position: "absolute",
		left: "-15px",
		top: "100px",
		borderRadius: "5px",
	},
};
