"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScreenOne } from "@/components/ScreenOne";
import ScreenTwo from "@/components/ScreenTwo";
import { Fader } from "@/components/Fader";
import { IPhoneFrame } from "@/components/IphoneFrame";
import { ScreenThree } from "@/components/ScreenThree";
import ScreenFour from "@/components/ScreenFour";
import { useGsapAnimation } from "@/hooks/useAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { startSecondTimeline, startThirdTimeline } = useGsapAnimation();

  return (
    <div className="bg-black">
      <IPhoneFrame>
        <ScreenOne />
        {/* <Fader /> */}
        <ScreenTwo onClick={startSecondTimeline} />
        <ScreenThree onClick={startThirdTimeline} />
        <ScreenFour />
      </IPhoneFrame>
      {/* <Fader /> */}
    </div>
  );
}
