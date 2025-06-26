"use client";

import { ADMIN_Designing_HERO } from "@/components/Admin/COMMON/Hero_ADMIN";
import { ADMIN_Designing_SERVICEs } from "@/components/Admin/Designing_ADMIN/ADMIN_Designing_SERVICEs";
import RouteProgress from "@/components/ui/RouteProgress";
import React from "react";

const Designing_Department = () => {
  return (
    <div className="m-0 p-0 w-full h-screen">
      <RouteProgress />
      <ADMIN_Designing_HERO />
      <ADMIN_Designing_SERVICEs />
    </div>
  );
};

export default Designing_Department;
