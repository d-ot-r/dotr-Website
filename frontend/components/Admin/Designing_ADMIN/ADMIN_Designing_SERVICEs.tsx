"use client";
import { SERVICEs } from "@/components/- ReUseable/SERVICEs";
import React from "react";

const designing_services = [
  {
    title: "Logo Designing",
    url: "/admin/designing/logo-designing",
  },
  {
    title: "Business Card Designing",
    url: "/admin/designing/bususiness-card-designing",
  },
  {
    title: "Social Media Designing",
    url: "/admin/designing/social-media-designing",
  },
];

export const ADMIN_Designing_SERVICEs = () => {
  return (
    <section className=" h-full overflow-x-hidden bg-slate-950">
      <SERVICEs
        department="designing"
        group="brand-designing"
        heading="BRAND designing"
        gradientColors={["slate-300", "slate-500"]}
        linksMap={designing_services}
        admin={true}
      />
      <SERVICEs
        department="designing"
        group="content-designing"
        heading="CONTENT Designing"
        gradientColors={["slate-300", "slate-500"]}
        linksMap={designing_services}
        admin={true}
      />
    </section>
  );
};
