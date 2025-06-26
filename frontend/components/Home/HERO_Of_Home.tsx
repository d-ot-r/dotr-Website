import { FaPhone } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

export const HERO_Of_Home = () => {
  return (
    <div className=" h-[500px] mb-32 mt-64">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center "
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mb-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            OmniTech Services Providing only Tech Company
          </p>

          <TextGenerateEffect
            words="Get your Business Skyrocket!!..."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Take your business to new heights with DOTR, your one-stop tech
            partner! We offer Designing, Development, Marketing, and Creative
            Services, all tailored to elevate your brand. With cutting-edge
            technology and AI-powered solutions, we help your business stay
            ahead of the competition. Partner with us and unlock endless
            possibilities for growth and success—all under one roof!...
          </p>

          <a href="#about">
            <MagicButton
              title="Contact Now!..."
              icon={<FaPhone />}
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
