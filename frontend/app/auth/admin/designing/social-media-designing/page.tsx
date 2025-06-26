"use client";

import { CONTENTs } from "@/components/- ReUseable/Contents_Of_SERVICEs";
import { FAQs_Of_SMD_ADMIN } from "@/components/Admin/COMMON/Faqs_ADMIN";
import { HERO_Of_SMD_ADMIN } from "@/components/Admin/COMMON/Hero_ADMIN";
import { IMPORTANCE_Of_SMD_ADMIN } from "@/components/Admin/COMMON/Importance_ADMIN";
import { Offerings_Of_SMD_ADMIN } from "@/components/Admin/COMMON/Offerings_ADMIN";
import { Why_DOTR_For_SMD_ADMIN } from "@/components/Admin/COMMON/Why_DOTR_ADMIN";
import RouteProgress from "@/components/ui/RouteProgress";
import React from "react";

const ADMIN_Social_Media_Designing = () => {
  return (
    <div className="m-0 p-0 w-full">
      <RouteProgress />
      {/* <CONTENTs department="designing" category="social-media-designing" /> */}
      <HERO_Of_SMD_ADMIN />
      <IMPORTANCE_Of_SMD_ADMIN />
      <Offerings_Of_SMD_ADMIN />
      <Why_DOTR_For_SMD_ADMIN />
      <FAQs_Of_SMD_ADMIN />
      {/* <SMD_Form_Data /> */}
    </div>
  );
};

export default ADMIN_Social_Media_Designing;
