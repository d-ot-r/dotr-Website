"use client";
import { SERVICEs } from "@/components/- ReUseable/SERVICEs";
import React from "react";

const development_services = [
  {
    title: "E-commerce Development",
    url: "/admin/development/ecommerce-development",
  },
  {
    title: "Custom Website Development",
    url: "/admin/development/custom-website-development",
  },
];

export const ADMIN_Development_SERVICEs = () => {
  return (
    <section className=" overflow-x-hidden bg-slate-950">
      <SERVICEs
        department="development"
        group="WEB-Development"
        heading="WEB Development"
        gradientColors={["slate-300", "slate-500"]}
        linksMap={development_services}
        admin={true}
      />
      {/* <SERVICEs
        department="development"
        group="MOBILE-APP-Development"
        heading="MOBILE-APP Development"
        gradientColors={["slate-300", "slate-500"]}
        linksMap={development_services}
        admin={true}
      /> */}
    </section>
  );
};
