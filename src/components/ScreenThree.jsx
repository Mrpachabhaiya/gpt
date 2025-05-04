import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

export const ScreenThree = ({ onClick }) => {
	return (
		<div className="screen-three absolute top-0 left-0 h-full w-full  flex-col justify-between items-center flex z-100 opacity-0">
			<h1 className="top-text  text-white text-4xl text-center w-[70%] font-semibold mt-12">
				What Can I Do for you Today
			</h1>
			<div className="buttons flex justify-evenly items-center  mb-16 gap-16">
				<div className="iconWrapper p-4 rounded-full bg-gray-800">
					<IoSettingsOutline color="white" size={15} />
				</div>
				<div
					onClick={(e) => onClick(e)}
					className="iconWrapper p-5 rounded-full bg-white relative bottom-6 flex justify-center items-center z-10"
				>
					{/* <Image
						src={"/chatgptlogo.png"}
						height={30}
						width={30}
						className=" relative flex justify-center items-center "
					/> */}
					<BsSoundwave color="black" size={20} />
				</div>
				<div className="iconWrapper p-4 rounded-full bg-gray-800">
					{/* <Image
						src={"/logo_white.png"}
						height={30}
						width={30}
						className=" absolute flex justify-center items-center"
					/> */}
					<MdCancel color="white" size={15} />
				</div>
			</div>
		</div>
	);
};
