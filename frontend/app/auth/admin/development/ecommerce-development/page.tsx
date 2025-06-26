"use client";

import { CONTENTs } from "@/components/- ReUseable/Contents_Of_SERVICEs";
import { FAQs_Of_ED_ADMIN } from "@/components/Admin/COMMON/Faqs_ADMIN";
import { HERO_Of_ED_ADMIN } from "@/components/Admin/COMMON/Hero_ADMIN";
import { IMPORTANCE_Of_ED_ADMIN } from "@/components/Admin/COMMON/Importance_ADMIN";
import { Offerings_Of_ED_ADMIN } from "@/components/Admin/COMMON/Offerings_ADMIN";
import { Why_DOTR_For_ED_ADMIN } from "@/components/Admin/COMMON/Why_DOTR_ADMIN";
import { ED_Form_Data } from "@/components/Admin/Development_ADMIN/ED_Form_Data";
import RouteProgress from "@/components/ui/RouteProgress";
import React from "react";

const ADMIN_Ecommerce_Development = () => {
  return (
    <div className="m-0 p-0 w-full">
      <RouteProgress />
      {/* <CONTENTs department="development" category="ecommerce-development" /> */}
      <HERO_Of_ED_ADMIN />
      <IMPORTANCE_Of_ED_ADMIN />
      <Offerings_Of_ED_ADMIN />
      <Why_DOTR_For_ED_ADMIN />
      <FAQs_Of_ED_ADMIN />
      <ED_Form_Data />
    </div>
  );
};

export default ADMIN_Ecommerce_Development;
