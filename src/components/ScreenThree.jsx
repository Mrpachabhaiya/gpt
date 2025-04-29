import Image from "next/image";

export const ScreenThree = ({ onClick }) => {
	return (
		<div className="screen-three absolute top-0 left-0 h-full w-full flex flex-col justify-between items-center hidden z-100">
			<h1 className="top-text  text-white text-4xl text-center w-[70%] font-semibold mt-12">
				What Can I Do for you Today
			</h1>
			<div className="buttons flex justify-evenly  mb-10 gap-8">
				<div className="iconWrapper h-10 w-10 rounded-full bg-black/10">
					<Image
						src={"/logo_white.png"}
						height={30}
						width={30}
						className=" absolute flex justify-center items-center"
					/>
				</div>
				<div
					onClick={(e) => onClick(e)}
					className="iconWrapper h-12 w-12 rounded-full bg-white relative bottom-10 flex justify-center items-center z-10"
				>
					<Image
						src={"/chatgptlogo.png"}
						height={30}
						width={30}
						className=" relative flex justify-center items-center "
					/>
				</div>
				<div className="iconWrapper h-10 w-10 rounded-full bg-black/10">
					<Image
						src={"/logo_white.png"}
						height={30}
						width={30}
						className=" absolute flex justify-center items-center"
					/>
				</div>
			</div>
		</div>
	);
};
