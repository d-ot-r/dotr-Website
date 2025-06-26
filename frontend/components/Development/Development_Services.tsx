import React from "react";
import { SERVICEs } from "../- ReUseable/SERVICEs";

// const staticLinks = {
//   "E-comommerce Development": "/development/ecommerce-development",
//   "Custom Website Development": "/development/custom-website-development",
// };

const staticLinks = [
  {
    title: "E-commerce Development",
    url: "/development/ecommerce-development",
  },
  {
    title: "Custom Website Development",
    url: "/development/custom-website-development",
  },
];

export const Development_Services = () => {
  return (
    <section className="pt-20 h-full mb-20">
      <SERVICEs
        department="development"
        group="WEB-Development"
        heading="WEB Development"
        gradientColors={["slate-300", "slate-500"]}
        linksMap={staticLinks}
      />
      {/* <SERVICEs
        department="development"
        group="MOBILE-APP-Development"
        heading="MOBILE-APP Development"
        gradientColors={["slate-300", "slate-500"]}
        linksMap={staticLinks}
      /> */}
    </section>
  );
};
