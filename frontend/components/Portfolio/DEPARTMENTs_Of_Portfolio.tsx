"use client";

import Image from "next/image";
import {
  ThreeDCardContainer,
  ThreeDCardBody,
  ThreeDCardItem,
} from "@/components/ui/Cards/3dCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import ProgressLink from "../ui/ProgressLink";
import { LampContainer } from "../ui/LampContainer";

export const different_portfolios = [
  {
    id: 1,
    title: "Designing Portfolio",
    description:
      "Take your business to new heights with DOTR, your one-stop tech partner! We offer Designing, Development, Marketing, and Creative Services, all tailored to elevate your brand. With cutting-edge technology and AI-powered solutions, we help your business stay ahead of the competition. Partner with us and unlock endless possibilities for growth and success—all under one roof!...",
    image: "/images/portfolio/designing_portfolio_bg.png",
    // link: "/portfolio/designing-portfolio",
    link: "/coming-soon",
  },
  {
    id: 2,
    title: "Development Portfolio",
    description:
      "Take your business to new heights with DOTR, your one-stop tech partner! We offer Designing, Development, Marketing, and Creative Services, all tailored to elevate your brand. With cutting-edge technology and AI-powered solutions, we help your business stay ahead of the competition. Partner with us and unlock endless possibilities for growth and success—all under one roof!...",
    image: "/images/portfolio/development_portfolio_bg.png",
    link: "/portfolio/development-portfolio",
  },
];

export const DEPARTMENTs_Of_Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<{
    image: string;
    title: string;
    description: string;
    link: string;
  } | null>(null);

  return (
    <section className="flex flex-col my-60 pt-40">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.2, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="heading bg-gradient-to-br from-slate-300 to-slate-500 pb-20 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
        >
          <span className="text-purple">
            <i>dotr&apos;s</i>
          </span>{" "}
          Portfolio of Different{" "}
          <span className="text-purple"> Departments</span>{" "}
        </motion.h1>
      </LampContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 -mt-32">
        {different_portfolios.map((project) => (
          <ProgressLink href={project.link} key={project.id}>
            <ThreeDCardContainer
              key={project.id}
              containerClassName="cursor-pointer"
            >
              <ThreeDCardBody className="bg-gradient-to-br space-x-5 from-gray-800 to-black shadow-lg rounded-lg">
                <ThreeDCardItem translateZ={20} className="p-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={500}
                    className="h-[400px] mx-auto rounded-lg hover:scale-105 transition-all duration-300 ease-in-out mb-5"
                    onClick={() =>
                      setSelectedProject({
                        image: project.image,
                        title: project.title,
                        description: project.description,
                        link: project.link,
                      })
                    }
                  />
                </ThreeDCardItem>
                <ThreeDCardItem translateZ={30}>
                  <motion.h1>
                    <span className=" pr-5 pl-2 text-4xl text-white font-semibold">
                      {project.title}
                    </span>
                  </motion.h1>
                  {/* {project.title} */}
                </ThreeDCardItem>
                <ThreeDCardItem
                  translateZ={40}
                  className="pr-5 pl-2 text-gray-400 text-sm mt-1"
                >
                  {project.description}
                </ThreeDCardItem>
                <div className="flex justify-end items-end  mt-8 pr-10">
                  <p className="flex lg:text-2xl md:text-lg text-base text-purple">
                    Check it out...
                  </p>
                  <FaLocationArrow
                    size={20}
                    className="ml-2 mb-2"
                    color="#CBACF9"
                  />
                </div>
              </ThreeDCardBody>
            </ThreeDCardContainer>
          </ProgressLink>
        ))}
      </div>
    </section>
  );
};
