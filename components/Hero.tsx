import React from "react";
import { Spotlight } from "./ui/spotlight";
import { WavyBackground } from "../ui/wavy-background.tsx";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth,TypewriterEffect } from "@/ui/typewriter-effect"; // Assuming this is the correct import path

const Hero = () => {
  const word = [
    {
      text: "Creating",
    },
    {
      text: "Innovative",
    },
    {
      text: "Web Solutions",
    },
    {
      text: "To Level Up You're",
    },
    {
      text: "Digital Presence",
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
        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts Into Seamless Experiences">
        </TextGenerateEffect>
        <p className="text-center md:tracking-wider mb-4 text-sm md-text-lg lg-text-2xl">
          Hi, I'm Amaljith T A, a passionate web developer based in India. I specialize in creating dynamic and responsive full-stack applications using the latest technologies. Let's build something amazing together!
          </p>
      </WavyBackground>
    </div>
  );
}

export default Hero;
