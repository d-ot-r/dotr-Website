"use client";

import React from "react";
import Footer from "@/components/ui/Footer";
import { DOTR_Info } from "@/components/About/DOTRInfo";
import Promotion from "@/components/ui/Promotion";
import Navbar from "@/components/- ReUseable/Navbar";
import RouteProgress from "@/components/ui/RouteProgress";
import { Contact_Form } from "@/components/About/ContactForm";
import { About_Hero } from "@/components/About/AboutHero";

const About = () => {
  return (
    <div className="bg-black-100">
      <Navbar />
      <RouteProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <About_Hero />
          {/* <DOTRHistory /> */}
          <DOTR_Info />
          {/* <WhyChooseDOTR /> */}
          <Contact_Form />
          <Promotion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
