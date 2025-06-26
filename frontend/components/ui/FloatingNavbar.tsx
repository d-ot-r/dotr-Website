"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    dropdown?: {
      name: string;
      link: string;
    }[];
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto pl-4 pr-10 py-2 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center space-x-2",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Link href="/" className="flex items-left pr-[300px]">
          <Image
            src="/images/dotr_white_big.png" // Replace with your actual logo path
            alt="DOTR Logo"
            width={120}
            height={120}
            className=" object-contain rounded-lg" // Adjust size as needed
          />
        </Link>

        {/* Nav Items */}
        {navItems.map((navItem: any, idx: number) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Main Link */}

            <Link
              href={navItem.link}
              key={`button=${idx}`}
              // onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
              className={cn(
                "relative dark:text-neutral-50 items-center font-medium font-serif flex space-x-10 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-lg !cursor-pointer">{navItem.name}</span>
            </Link>
            {/* Dropdown Menu (if exists) */}
            {navItem.dropdown?.length && (
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-4 w-60 text-white bg-black shadow-lg rounded-lg py-2"
                  >
                    {navItem.dropdown.map((item: any, subIdx: number) => (
                      <Link
                        key={subIdx}
                        href={item.link}
                        className="block px-5 py-2 text-white hover:bg-gray-100 hover:text-black"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}

        {/* remove this login btn */}
        <Link
          href="/about#contact"
          className="relative hidden sm:block pl-[50px] "
        >
          <button className="border text-sm font-bold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-3 rounded-full hover:bg-neutral-100 dark:hover:bg-white/[0.05]">
            <span className="relative">Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
