"use client";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";
import { Social_Platforms } from "@/data";

export const footerItems = [
  {
    title: "Designing",
    links: [
      {
        name: "Logo Designing",
        href: "/designing/logo-designing",
      },
      {
        name: "Business Card Designing",
        href: "/designing/business-card-designing",
        // href: "/coming-soon",
      },
      {
        name: "Social Media Designing",
        href: "/designing/social-media-designing",
      },
    ],
  },
  {
    title: "Development",
    links: [
      {
        name: "E-commerce Development",
        href: "/development/ecommerce-development",
      },
      {
        name: "Custom Website Development",
        href: "/development/custom-website-development",
      },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Designing Portfolio", href: "/portfolio/designing-portfolio" },
      {
        name: "Development Portfolio",
        href: "/portfolio/development-portfolio",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Vision", href: "/about#dotr-goal" },
      { name: "Our Mission", href: "/about#dotr-goal" },
      { name: "Contact Us", href: "/about#contact-for-general" },
    ],
  },

  // {
  //   title: "Support",
  //   links: [
  //     { name: "FAQ", href: "#" },
  //     { name: "Contact", href: "#" },
  //   ],
  // },
  // {
  //   title: "Legal",
  //   links: [
  //     { name: "Privacy Policy", href: "#" },
  //     { name: "Terms of Service", href: "#" },
  //   ],
  // },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full mt-20 mx-auto pt-20 pb-10 bg-black text-white"
      id="contact"
    >
      {/* Background Grid */}
      <div className="absolute inset-y-3 bottom-0 w-full min-h-96 opacity-50">
        <Image
          width={100}
          height={100}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12">
        {/* Left Section - Logo & Info (30%) */}
        <div className="md:w-1/3 w-full flex flex-col gap-4 mr-5">
          <Image
            width={100}
            height={100}
            src="/images/dotr_white_big.png"
            alt="DOTR Logo"
            className="w-36 rounded-lg"
          />
          <p className="text-sm text-justify pr-20 md:text-base text-gray-300">
            Elevating businesses with cutting-edge tech solutions. From design
            to development, we got you covered!
          </p>
          <Link href="https://wa.me/+919023680848">
            <MagicButton
              title="Contact Us"
              icon={<FaPhone />}
              position={"left"}
            />
          </Link>
        </div>

        {/* Right Section - Links (70%) */}
        <div className=" md:w-2/3 w-full flex flex-wrap justify-end mt-8 md:mt-0">
          {footerItems?.map((category) => (
            <div key={category.title} className="w-1/2 md:w-1/4 mb-6">
              <h4 className="text-lg font-semibold px-4">{category.title}</h4>
              <ul className="mt-2 space-y-2 px-4">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons at Bottom */}
      <div className="relative mt-5 mr-40 flex justify-end items-center gap-6">
        {Social_Platforms.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-600 bg-black/75 backdrop-blur-lg hover:scale-110 transition">
              <Image
                width={100}
                height={100}
                src={info.image}
                className="object-contain"
                alt={"Social Icons"}
              />
            </div>
          </a>
        ))}
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      {/* Copyright Text */}
      <div className="relative mt-5 text-center text-sm text-gray-400">
        © 2025 | All Rights Reserved | dotr - DHINOJA OmniTech Resolutions
      </div>
    </footer>
  );
}
