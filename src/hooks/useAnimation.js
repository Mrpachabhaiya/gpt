const { default: gsap } = require("gsap");
const { useRef, useEffect } = require("react");

export const useGsapAnimation = () => {
	const secondTimeline = useRef(null);
	const thirdTimeline = useRef(null);

	useEffect(() => {
		const tll = gsap.timeline({ paused: true });
		tll
			.to(".header-card", {
				y: -800,
				opacity: 0,
				duration: 2,

				ease: "power2.out",
			})
			.to(
				".left-card",
				{
					x: -300,
					opacity: 0,
					duration: 2,

					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".right-card",
				{
					x: 300,
					opacity: 1,

					duration: 2,

					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".headerTitle",
				{
					y: -200,
					opacity: 0,

					duration: 2,

					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(
				".footer",
				{
					y: 300,
					opacity: 0,

					duration: 2,

					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(".screen-three", {
				display: "flex",
				delay: -2,
				// opacity: 0,
				ease: "back.out(1.7)",
			})
			.from(".top-text", {
				y: -500,
				delay: -2,
				opacity: 0,
				duration: 2,
				ease: "back.out(1.7)",
			})
			.from(".buttons", {
				y: 200,
				delay: -2,
				opacity: 0,
				duration: 2,
				ease: "back.out(1.7)",
			});

		secondTimeline.current = tll;
	}, []);

	useEffect(() => {
		gsap.set(".top-title", {
			y: 100,
			opacity: 0,
		});
		gsap.set(".main-content", {
			y: 100,
			opacity: 0,
		});
		gsap.set(".footer-fourth", {
			y: 300,
			// opacity: 0,
		});
		gsap.set(".screen-four", {
			height: 0,
			y: -100,
			opacity: 0,
		});
		gsap.set(".animated-circle", {
			x: -200,
			y: -650,
			height: "150px",
			width: "150px",
			zIndex: 100,
			opacity: 0,
		});
		const thirdTl = gsap.timeline({ paused: true });
		thirdTl
			.to(".top-text", {
				y: -800,
				opacity: 0,
				duration: 2,

				ease: "power2.out",
			})
			.to(
				".buttons",
				{
					y: 400,
					opacity: 0,

					ease: "back.out(1.7)",
				},
				"<"
			)
			.to(".screen-four", {
				height: 300,
				duration: 1,
				y: 0,
				opacity: 1,
				delay: -10,
				stagger: 0.5,
			})
			.to(".top-title", {
				y: 0,
				opacity: 1,
				delay: -1.5,

				duration: 1,

				ease: "back.out(1.7)",
			})
			.to(".main-content", {
				y: 0,
				opacity: 1,
				delay: -1.5,

				ease: "back.out(1.7)",
			})
			.to(".footer-fourth ", {
				y: 0,
				opacity: 1,
				delay: -1.5,

				ease: "back.out(1.7)",
			})
			.to(".animated-circle", {
				x: 0,
				y: 0,
				height: 20,
				width: 20,
				duration: 2,
				delay: -1,
				ease: "back.out(1.7)",
			});

		thirdTimeline.current = thirdTl;
	}, []);

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
					gsap.to(".animated-circle", {
						opacity: 1,
					});
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
	const startSecondTimeline = () => {
		console.log("clickeed");
		secondTimeline.current.play();
	};
	const startThirdTimeline = (e) => {
		e.preventDefault();
		console.log("clickeed");
		thirdTimeline.current.play();
	};

	return { startSecondTimeline, startThirdTimeline };
};
