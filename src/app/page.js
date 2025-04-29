"use client";
import Orb from "../components/Orb";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ScreenOne } from "@/components/ScreenOne";
import ScreenTwo from "@/components/ScreenTwo";
import { Fader } from "@/components/Fader";
import iPhoneFrame, { IPhoneFrame } from "@/components/IphoneFrame";
import { ScreenThree } from "@/components/ScreenThree";
import ScreenFour from "@/components/ScreenFour";
import { useGsapAnimation } from "@/hooks/useAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const router = useRouter();
	const { startSecondTimeline, startThirdTimeline } = useGsapAnimation();

	return (
		<div className="bg-black">
			<IPhoneFrame>
				<ScreenOne />
				<Fader />
				<ScreenTwo onClick={startSecondTimeline} />
				<ScreenThree onClick={startThirdTimeline} />
				<ScreenFour />
			</IPhoneFrame>
			{/* <Fader /> */}
		</div>
	);
}
