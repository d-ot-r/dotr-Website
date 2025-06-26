"use client";

import React from "react";
import Footer from "@/components/ui/Footer";
import Promotion from "@/components/ui/Promotion";
import Navbar from "@/components/- ReUseable/Navbar";
import RouteProgress from "@/components/ui/RouteProgress";
import { Development_Services } from "@/components/Development/Development_Services";
import { Development_Form } from "@/components/Development/Development_Form";
import { Development_HERO } from "@/components/COMMON/Hero_CLIENT";
import { Why_DOTR_For_Development } from "@/components/COMMON/Why_DOTR_CLIENT";
import { Development_FAQs } from "@/components/COMMON/Faqs_CLIENT";

const Development = () => {
  return (
    <div className="bg-black-100">
      <Navbar />
      <RouteProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Development_HERO />
          <Development_Services />
          {/* <DevelopmentRoles /> */}
          <Why_DOTR_For_Development />
          <Development_FAQs />
          <Development_Form />
          <Promotion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Development;
