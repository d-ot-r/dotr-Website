import React from "react";
import { SERVICEs } from "../- ReUseable/SERVICEs";

export const Designing_Services = () => {
  return (
    <section className="pt-20 h-full mb-20">
      {/* <SERVICEs
        department="designing"
        group="brand-designing"
        heading="BRAND Designing"
        gradientColors={["slate-300", "slate-500"]}
      /> */}
      <SERVICEs
        department="DESIGNING"
        group="content-designing"
        heading="CONTENT Designing"
        gradientColors={["slate-300", "slate-500"]}
      />
    </section>
  );
};
