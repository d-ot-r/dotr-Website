"use client";

import React from "react";
import Footer from "@/components/ui/Footer";
import Promotion from "@/components/ui/Promotion";
import Navbar from "@/components/- ReUseable/Navbar";
import RouteProgress from "@/components/ui/RouteProgress";
import { PROJECTs_Of_Development } from "@/components/Portfolio/PROJECTs_Of_Services";
import { HERO_Of_Development_Portfolio } from "@/components/Portfolio/HERO_Of_Portfolios";
import { Development_Form } from "@/components/Development/Development_Form";
import { Why_DOTR_For_Development } from "@/components/COMMON/Why_DOTR_CLIENT";

const Development_Portfolio = () => {
  return (
    <div className="bg-black-100">
      <Navbar />
      <RouteProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <HERO_Of_Development_Portfolio />
          <PROJECTs_Of_Development />
          <Why_DOTR_For_Development />
          <Development_Form />
          <Promotion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Development_Portfolio;
