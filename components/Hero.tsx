import React from "react";
import { Spotlight } from "./ui/spotlight";
import { WavyBackground } from "../ui/wavy-background.tsx";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth,TypewriterEffect } from "@/ui/typewriter-effect"; // Assuming this is the correct import path

const Hero = () => {
    const word = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "apps",
        },
        {
          text: "with",
        },
        {
          text: "Aceternity.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
      const words = `Passionate full stack developer crafting digital solutions with innovation and creativity. Let's build together.`;
  return (
    <div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="grey"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="black" />
      </div>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth words={word} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"> 
        <TextGenerateEffect words={words} />
      </div>
      <button style={{ top: "30px" }} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Give a Call
  </span>
</button>
      
      
    </div>

    

       
      </WavyBackground>
    </div>
  );
}

export default Hero;
