"use client";

import Image from "next/image";
import ProgressLink from "@/components/ui/ProgressLink";
import { useEffect, useState } from "react";

export const navItems = [
  {
    label: "Designing",
    href: "/coming-soon",
    // submenu: [
    //   // {
    //   //   title: "BRAND Designing",
    //   //   href: "/designing#brand-designing-services",
    //   //   services: [
    //   //     {
    //   //       label: "Logo Designing",
    //   //       href: "/designing/logo-designing",
    //   //     },
    //   //     {
    //   //       label: "Business Card Designing",
    //   //       href: "/designing/business-card-designing",
    //   //     },
    //   //   ],
    //   // },
    //   // {
    //   //   title: "CONTENT Designing",
    //   //   href: "/designing#content-designing-services",
    //   //   services: [
    //   //     {
    //   //       label: "Social Media Designing",
    //   //       href: "/designing/social-media-designing",
    //   //     },
    //   //   ],
    //   // },
    // ],
  },
  {
    label: "Development",
    href: "/development",

    submenu: [
      {
        title: "Web Development",
        href: "/development#web-development-services",
        services: [
          {
            label: "E-commerce Development",
            href: "/development/ecommerce-development",
          },
          {
            label: "Custom Website Development",
            href: "/development/custom-website-development",
          },
          // {
          //   label: "Frontend Development",
          //   // href: "/development/frontend-development",
          //   href: "/coming-soon",
          // },
          // {
          //   label: "Backend Development",
          //   // href: "/development/backend-development",
          //   href: "/coming-soon",
          // },
          // {
          //   label: "Full-Stack Development",
          //   // href: "/development/full-stack-development",
          //   href: "/coming-soon",
          // },
        ],
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      {
        title: "Designing Portfolio",
        href: "/coming-soon",
        // services: [
        //   {
        //     label: "Logo Designing Projects",
        //     href: "/portfolio/designing-portfolio#logo-designing-projects",
        //     // href: "/coming-soon",
        //   },
        //   {
        //     label: "Business Card Designing Projects",
        //     href: "/portfolio/designing-portfolio#business-card-designing-projects",
        //     // href: "/coming-soon",
        //   },
        //   {
        //     label: "Social Media Designing Projects",
        //     href: "/portfolio/designing-portfolio#social-media-designing-projects",
        //     // href: "/coming-soon",
        //   },
        // ],
      },
      {
        title: "Development Portfolio",
        href: "/portfolio/development-portfolio",
        services: [
          {
            label: "E-commerce Development Projects",
            href: "/portfolio/development-portfolio#ecommerce-development-projects",
            // href: "/coming-soon",
          },
          {
            label: "Custom Website Development Projects",
            href: "/portfolio/development-portfolio#custom-website-development-projects",
            // href: "/coming-soon",
          },
          // {
          //   label: "Frontend Development Projects",
          //   // href: "/portfolio/development-portfolio#frontend-development-projects",
          //   href: "/coming-soon",
          // },
          // {
          //   label: "Backend Development Projects",
          //   // href: "/portfolio/development-portfolio#backend-development-projects",
          //   href: "/coming-soon",
          // },
          // {
          //   label: "Full-Stack Development Projects",
          //   // href: "/portfolio/development-portfolio#full-stack-development-projects",
          //   href: "/coming-soon",
          // },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    submenu: [
      {
        title: "About Us",
        href: "/about",
        services: [
          { label: "Our Vision", href: "/about#dotr-goal" },
          { label: "Our Mission", href: "/about#dotr-goal" },
          { label: "Contact Us", href: "/about#contact-for-general" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const currentSubmenu = navItems.find(
    (item: { label: string | null }) => item.label === activeMenu
  )?.submenu;

  return (
    <div
      className={`fixed top-0 z-50 w-full ${
        scrolled ? "bg-black" : "bg-transparent"
      } `}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className=" z-50 flex pt-4 px-40 w-full justify-between h-[5px] bg-transparent text-white mx-auto">
        <p className="w-1/3 flex justify-start">श्री गणेशाय नमः।</p>
        <p className="w-1/3 flex justify-center">||श्री १||</p>
        <p className="w-1/3 flex justify-end">श्री कृष्णः शरणं मम।</p>
      </div>
      {/* Navbar Row */}
      <div className="flex justify-between items-center pt-5 h-[120px] bg-transparent text-white max-w-7xl mx-auto">
        {/* Logo */}
        <ProgressLink
          href="/"
          className="flex items-left pr-[300px] cursor-pointer"
        >
          <Image
            src="/images/dotr_white_big.png"
            alt="DOTR Logo"
            width={150}
            height={150}
            className="object-contain rounded-lg cursor-pointer"
          />
        </ProgressLink>
        <ul className="flex gap-10 cursor-pointer">
          {navItems.map((item: any, idx: number) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() =>
                item.submenu ? setActiveMenu(item.label) : setActiveMenu(null)
              }
            >
              <ProgressLink
                href={item.href || "#"}
                className="text-xl font-medium hover:text-gray-300 cursor-pointer"
              >
                {item.label}
              </ProgressLink>
            </li>
          ))}
        </ul>
        <ProgressLink
          href="/about#contact-for-general"
          className="relative hidden sm:block pl-[50px] cursor-pointer"
        >
          <button className="border text-sm font-bold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-3 rounded-full hover:bg-neutral-100 dark:hover:bg-white/[0.05]">
            <span className="relative">Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </ProgressLink>
      </div>

      {/* Mega Dropdown */}
      {currentSubmenu && (
        <div className="absolute top-[130px] left-0 w-full bg-black text-white shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-10 py-6 flex gap-12  cursor-pointer">
            {currentSubmenu.map((sub: any, idx: number) => (
              <div key={idx}>
                <ProgressLink href={sub.href}>
                  <div className="text-lg hover:text-xl font-semibold mb-3 border-b border-gray-300 pb-1  cursor-pointer">
                    {sub.title}
                  </div>
                </ProgressLink>
                <ul className="space-y-2">
                  {sub.services?.map((link: any, linkIdx: number) => (
                    <li key={linkIdx}>
                      <ProgressLink
                        href={link.href}
                        className="hover:underline hover:text-base text-sm cursor-pointer"
                      >
                        {link.label}
                      </ProgressLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* 👇 This makes space only when dropdown is visible */}
      {/* {currentSubmenu && <div className="h-[300px]" />} */}
    </div>
  );
}
