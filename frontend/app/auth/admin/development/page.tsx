"use client";

import React from "react";
import { ADMIN_Development_SERVICEs } from "@/components/Admin/Development_ADMIN/ADMIN_Development_SERVICEs";
import RouteProgress from "@/components/ui/RouteProgress";
import { ADMIN_Development_HERO } from "@/components/Admin/COMMON/Hero_ADMIN";

const Development_Department = () => {
  return (
    <div className="m-0 p-0 w-full">
      <RouteProgress />
      <ADMIN_Development_HERO />
      <ADMIN_Development_SERVICEs />
    </div>
  );
};

export default Development_Department;
