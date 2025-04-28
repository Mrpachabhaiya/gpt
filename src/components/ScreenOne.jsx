import Image from "next/image";

export const ScreenOne = () => {
	return (
		<div className="z-50 screen-one absolute w-full h-screen bg-black flex items-center justify-center ">
			<Image
				alt="logog"
				src={"/logo_white.png"}
				height={100}
				width={100}
				className="  absolute top-[40%] -translate-y-1/2 "
			/>
		</div>
	);
};
