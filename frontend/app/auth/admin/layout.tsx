"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBrush,
  IconCards,
  IconCode,
  IconColorFilter,
  IconLogout,
  IconPageBreak,
  IconSettings,
  IconShoppingBag,
  IconSocial,
  IconUserBolt,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Sidebar links with correct hrefs:
  const links = [
    {
      label: "Dashboard",
      href: "/auth/admin",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Designing",
      href: "/auth/admin/designing",
      icon: (
        <IconBrush className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      sublinklinks: [
        {
          label: "Logo Designing",
          href: "/auth/admin/designing/logo-designing",
          icon: (
            <IconColorFilter className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
          ),
        },
        {
          label: "Business Card Designing",
          href: "/auth/admin/designing/business-card-designing",
          icon: (
            <IconCards className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
          ),
        },
        {
          label: "Social Media Designing",
          href: "/auth/admin/designing/social-media-designing",
          icon: (
            <IconSocial className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
          ),
        },
      ],
    },
    {
      label: "Development",
      href: "/auth/admin/development",
      icon: (
        <IconCode className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      sublinklinks: [
        {
          label: "Ecommerce Development",
          href: "/auth/admin/development/ecommerce-development",
          icon: (
            <IconShoppingBag className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
          ),
        },
        {
          label: "Custom Website Development",
          href: "/auth/admin/development/custom-website-development",
          icon: (
            <IconPageBreak className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
          ),
        },
      ],
    },
    {
      label: "Profile",
      href: "/auth/admin/profile",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/auth/admin/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    // {
    //   label: "Logout",
    //   href: "/logout",
    //   icon: (
    //     <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    //   ),
    // },
  ];

  const [open, setOpen] = useState(true);

  // Optional: highlight active link:
  function isActive(href: string) {
    return pathname === href;
  }

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        // Redirect to sign-in or home page
        window.location.href = "/auth/signin";
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-slate-800 rounded-e-3xl",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {/* Your Logo component */}
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={cn(
                    isActive(link.href) ? "font-bold text-blue-600" : ""
                  )}
                />
              ))}
            </div>
          </div>
          {open ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-700 text-white rounded-full"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center mx-auto p-3 bg-red-700 rounded-full">
              <IconLogout className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
            </div>
          )}
          <div>
            <SidebarLink
              link={{
                label: "Rajan Dhinoja",
                href: "#",
                icon: (
                  <Image
                    src="/images/dotr_white_big.png"
                    className="h-8 w-8 shrink-0 rounded-full mr-2 "
                    width={50}
                    height={50}
                    alt="Rajan Dhinoja's avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* Page content on the right */}
      <main className="flex flex-1 m-0 p-0 h-full w-full bg-slate-950 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <span className="font-medium whitespace-pre text-black dark:text-white">
        dotr - DHINOJA OmniTech Resolutions
      </span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <Image
      alt="DOTR Logo"
      width={100}
      height={100}
      src="/images/dotr_black_big.png"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white"
    />
  );
};
