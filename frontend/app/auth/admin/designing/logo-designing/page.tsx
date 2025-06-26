"use client";

import { CONTENTs } from "@/components/- ReUseable/Contents_Of_SERVICEs";
import RouteProgress from "@/components/ui/RouteProgress";
import React from "react";

const ADMIN_Logo_Designing = () => {
  return (
    <div className="m-0 p-0 w-full">
      <RouteProgress />
      <CONTENTs department="designing" category="logo-designing" />
    </div>
  );
};

export default ADMIN_Logo_Designing;
