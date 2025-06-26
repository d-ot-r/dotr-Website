"use client";

import React from "react";
import Footer from "@/components/ui/Footer";
import Promotion from "@/components/ui/Promotion";
import Navbar from "@/components/- ReUseable/Navbar";
import RouteProgress from "@/components/ui/RouteProgress";
import { FORM_Of_Custom_Website_Development } from "@/components/Development/FORMs_Of_Development_Services/CWD_Form";
import { FAQs_Of_Custom_Website_Development } from "@/components/COMMON/Faqs_CLIENT";
import { HERO_Of_Custom_Website_Development } from "@/components/COMMON/Hero_CLIENT";
import { IMPORTANCE_Of_Custom_Website_Development } from "@/components/COMMON/Importance_CLIENT";
import { OFFERINGs_Of_Custom_Website_Development } from "@/components/COMMON/Offerings_CLIENT";
import { Why_DOTR_For_Custom_Website_Development } from "@/components/COMMON/Why_DOTR_CLIENT";

const Custom_Website_Development = () => {
  return (
    <div className="bg-black-100">
      <Navbar />
      <RouteProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <HERO_Of_Custom_Website_Development />
          <IMPORTANCE_Of_Custom_Website_Development />
          <OFFERINGs_Of_Custom_Website_Development />
          <Why_DOTR_For_Custom_Website_Development />
          {/* <PROJECTs_Of_Custom_Website_Development /> */}
          <FAQs_Of_Custom_Website_Development />
          <FORM_Of_Custom_Website_Development />
          <Promotion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Custom_Website_Development;
