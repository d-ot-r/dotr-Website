"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

//#region Content
export const dotr_information = [
  {
    title: "🌍 Our Vision 🌍",
    description: (
      <p>
        <h1 className="text-2xl font-bold">
          A World Powered by Smart Tech & Limitless Creativity
        </h1>
        <br />
        We envision a future where businesses, regardless of their size, can
        harness the power of AI and automation to scale faster, smarter, and
        more efficiently. Our goal is to revolutionize the way digital solutions
        are built, making technology-driven services affordable, accessible, and
        effortlessly innovative. <br />
        <br />
        As we expand our capabilities in Designing, Development, Marketing, and
        AI Automation, we strive to:
        <ul>
          <li>✔ Lead the global tech space with AI-driven solutions.</li>
          <li>
            ✔ Empower businesses with futuristic and affordable technology.
          </li>
          <li>
            ✔ Redefine creativity with automation while maintaining artistic
            excellence.
          </li>
          <li>
            ✔ Foster a digital ecosystem where innovation knows no bounds.
          </li>
        </ul>{" "}
        <br />
        At DOTR, we don’t just follow trends—we create them. Our vision is to
        become the ultimate tech powerhouse, setting new benchmarks in
        AI-powered digital transformation and revolutionizing the way businesses
        thrive in the modern world. <br />
        <br />
        💡 DOTR – Where Technology Meets Creativity, and Innovation Knows No
        Limits.
      </p>
    ),
    content: (
      <div className="flex h-full w-full items-end justify-end text-black">
        <Image
          src="/images/dotr_black_big.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "🚀 Our Mission 🚀",
    description: (
      <p>
        <h1 className="text-2xl font-bold">Innovate, Elevate, Dominate</h1>
        <br />
        At DOTR, our mission is to revolutionize the digital landscape by
        blending technology, creativity, and automation into powerful,
        game-changing solutions. We strive to empower businesses worldwide with
        cutting-edge, AI-driven services that are:
        <br />
        <br />
        As we expand our capabilities in Designing, Development, Marketing, and
        AI Automation, we strive to:
        <ul>
          <li>
            🔹 Innovative – We don’t follow trends; we create them. By
            harnessing AI and automation, we push the boundaries of technology
            to deliver futuristic digital solutions.{" "}
          </li>
          <li>
            🎨 Creative – We merge art and technology to design visually
            stunning, high-performance websites, branding assets, and digital
            experiences that captivate and convert.{" "}
          </li>
          <li>
            ⚡ Efficient – Speed and quality go hand in hand. Our AI-powered
            systems streamline development, ensuring top-tier results with
            unmatched efficiency.
          </li>
          <li>
            💡 Accessible – We believe every business deserves world-class tech.
            That’s why we make premium digital solutions affordable, scalable,
            and future-proof.
          </li>
          <li>
            🌎 Impactful – Our mission goes beyond just creating digital
            products. We aim to shape the future by helping businesses evolve,
            grow, and succeed in an ever-changing digital world.
          </li>
        </ul>{" "}
        <br />
        At DOTR, we are more than just a tech company—we are visionaries,
        disruptors, and problem-solvers committed to reshaping the future, one
        innovation at a time. <br />
        <br />
        🔗 DOTR – Where Technology Meets Creativity, and Innovation Has No
        Limits.
      </p>
    ),

    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/dotr_black_big.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
//#endregion

//#region ReUsable Content
const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f272a", // slate-900
    "#200000", // black
    "#171717", // neutral-900
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative mb-40 flex h-[600px] justify-start space-x-20 overflow-y-auto rounded-md p-3"
      ref={ref}
    >
      <div className="div relative flex items-start mt-14">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-40 mx-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-center text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-lg text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky left-20 top-14 hidden h-[400px] w-[400px] overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
//#endregion

export function DOTR_Info() {
  return (
    <section id="dotr-goal" className="h-[900px] w-full mt-20 mb-8">
      <StickyScroll content={dotr_information} />
    </section>
  );
}
