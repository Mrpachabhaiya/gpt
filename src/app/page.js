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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		const leftElements = document.querySelectorAll(".left-card > *");
		const rightElements = document.querySelectorAll(".right-card > *");

		const allElements = [...leftElements, ...rightElements];
		gsap.set(".left-card", {
			y: 100,
			opacity: 0,
			height: 0,
		});
		gsap.set(".right-card", {
			y: 100,
			opacity: 0,
			height: 0,
		});
		gsap.set(".header-card", {
			y: -100,
			opacity: 0,
			height: 0,
		});
		const timeline = gsap.timeline();
		timeline
			.to(".screen-one", {
				// opacity: 0,
				duration: 3,
				onComplete: () => {
					// gsap.to(".fader", {
					// 	y: 600,
					// });
					// gsap.to(".screen-one", {
					// 	opacity: 0,
					// });
					gsap.to(".screen-one", {
						y: 1000,
						ease: "power2.out",
						duration: 1.5,
					});
				},
			})
			.to(".fader", {
				y: 1900,
				duration: 1.5,
				delay: -0.1,
				ease: "power2.out",
			})
			.from(".headerTitle", {
				opacity: 0,
				y: 50,
				delay: -1.2,
				duration: 0.6,
				stagger: 0.2,
				ease: "power2.out",
			})
			.from(".titleText", {
				opacity: 0,
				y: 50,
				delay: -1.2,
				duration: 0.6,
				stagger: 0.2,
				ease: "power2.out",
			})
			.to(".screen-two", {
				opacity: 1,
				delay: -1.4,
			})
			.to(".header-card", {
				y: 0,
				opacity: 1,
				delay: -1.5,
				duration: 0.5,
				height: 250,
				ease: "power2.out",
			})
			.to(".left-card", {
				y: 0,
				opacity: 1,
				duration: 0.5,
				height: 250,
				delay: -1.5,
				ease: "back.out(1.7)",
			})
			.to(".right-card", {
				y: 0,
				opacity: 1,
				height: 250,
				delay: -1.5,
				duration: 0.5,

				ease: "back.out(1.7)",
			})
			.from(leftElements, {
				opacity: 0,
				y: 20,
				delay: -1.4,
				duration: 0.6,
				stagger: 0.2,
				ease: "power2.out",
			})
			.from(rightElements, {
				opacity: 0,
				y: 20,
				delay: -1.4,
				duration: 0.6,
				stagger: 0.2,
				ease: "power2.out",
			})
			.from(".logo", {
				opacity: 0,
				y: 50,
				delay: -1.2,
				duration: 0.6,
				stagger: 0.2,
				ease: "power2.out",
			});
	}, []);

	return (
		<div className="bg-black">
			<IPhoneFrame>
				<ScreenOne />
				<Fader />
				<ScreenTwo />
			</IPhoneFrame>
			{/* <Fader /> */}
		</div>
	);
}
