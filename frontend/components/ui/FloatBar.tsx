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

export const FloatBar = ({
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
      description?: string;
      subItems?: { name: string; link: string }[];
    }[];
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number>(0);

  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleMouseEnter = (idx: number) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 200);
    setDropdownTimeout(timeout);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-2 rounded-lg border border-black/.1 shadow-md items-center space-x-10",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-left pr-[300px]">
          <Image
            src="/images/dotr_white_big.png"
            alt="DOTR Logo"
            width={120}
            height={120}
            className="object-contain rounded-lg"
          />
        </Link>

        {/* Nav Items */}
        {navItems.map((navItem, idx) => (
          <div
            key={idx}
            className="relative group"
            // onMouseEnter={() => setOpenDropdown(idx)}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Link */}
            <Link
              href={navItem.link}
              className="relative dark:text-neutral-50 font-medium font-serif flex space-x-10 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="text-lg !cursor-pointer">{navItem.name}</span>
            </Link>

            {/* Dropdown Menu */}
            {navItem.dropdown?.length && openDropdown === idx && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-4 z-[9999] bg-black text-white shadow-lg rounded-lg p-4 flex"
                  style={{
                    width: "100%", // Match navbar width
                    minWidth: "700px", // Optional fallback
                    maxWidth: "1000px",
                  }}
                >
                  {/* LEFT: Dropdown List */}
                  <div className="flex flex-col w-1/2 border-r border-white/20 pr-2">
                    {navItem.dropdown.map((item, subIdx) => (
                      <div
                        key={subIdx}
                        onMouseEnter={() => setHoveredItemIndex(subIdx)}
                        className={cn(
                          "px-4 py-2 cursor-pointer hover:bg-white hover:text-black rounded-md",
                          hoveredItemIndex === subIdx && "bg-white text-black"
                        )}
                      >
                        <Link href={item.link}>{item.name}</Link>
                        {/* {item.name} */}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT: SubItem Area */}
                  <div className="flex flex-col w-1/2 pl-4">
                    {navItem.dropdown[hoveredItemIndex]?.description ? (
                      <p className="text-sm">
                        {navItem.dropdown[hoveredItemIndex].description}
                      </p>
                    ) : navItem.dropdown[hoveredItemIndex]?.subItems?.length ? (
                      navItem.dropdown[hoveredItemIndex].subItems!.map(
                        (subItem, i) => (
                          <Link
                            key={i}
                            href={subItem.link}
                            className="block px-4 py-2 hover:bg-gray-200 text-black rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        )
                      )
                    ) : (
                      <p className="text-sm text-neutral-300">
                        No additional info.
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ))}

        {/* Contact Button */}
        <Link
          href="/about#contact"
          className="relative hidden sm:block pl-[50px] "
        >
          <button className="border text-sm font-bold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-3 rounded-full hover:bg-neutral-100 dark:hover:bg-white/[0.05]">
            <span className="relative">Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
