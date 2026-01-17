"use client";
import React from "react";
import { LayoutDashboard, Bell, FileText, LogsIcon } from "lucide-react";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import localFont from "next/font/local";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const redwing = localFont({
  src: "../../fonts/Redwing/Redwing-medium.otf",
  display: "swap",
  variable: "--font-redwing",
});

// sidebar.config.ts
const sidebarItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    imgSrc: "/images/overview.svg",
    href: "/dashboard",
  },
  {
    label: "Service Requests",
    icon: FileText,
    imgSrc: "/images/services.svg",
    href: "/service-requests",
  },
  {
    label: "Tenancy Applications",
    icon: FileText,
    imgSrc: "/images/tenancy.png",
    href: "/tenancy-applications",
  },
  {
    label: "My Properties",
    icon: Bell,
    imgSrc: "/images/properties.png",
    children: [
      {
        label: "Duplex",
        icon: FileText,
        href: "/users/viewles",
      },
    ],
  },
  {
    label: "My Tenants",
    icon: Bell,
    imgSrc: "/images/tenants.png",
    children: [
      {
        label: "Story",
        icon: FileText,
        href: "/users/roles",
      },
    ],
  },
  {
    label: "Payments",
    icon: Bell,
    imgSrc: "/images/payments.svg",
    children: [
      {
        label: "Bungalow",
        icon: FileText,
        href: "/users/rols",
      },
    ],
  },

  {
    label: "Users",
    icon: Bell,
    imgSrc: "/images/users.png",
    children: [
      {
        label: "Roles",
        icon: FileText,
        href: "/users/viewroles",
      },
      {
        label: "Members",
        icon: FileText,
        href: "/users/members",
      },
    ],
  },
  {
    label: "Roles",
    icon: Bell,
    imgSrc: "/images/roles.svg",
    children: [
      {
        label: "View Roles",
        icon: SubdirectoryArrowRightIcon,
        href: "/roles/viewroles",
      },
      {
        label: "Members",
        icon: SubdirectoryArrowRightIcon,
        href: "/roles/members",
      },
    ],
  },
  {
    label: "Notification",
    icon: LogsIcon,
    href: "/audit-logs",
    imgSrc: "/images/notification.svg",
  },
  {
    label: "Audit Logs",
    icon: LogsIcon,
    href: "/audit-logs",
    imgSrc: "/images/audit.svg",
  },
];

const index = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between gap-6">
      <div>
        <header className="py-4 border-b border-[#D3D3D340] mb-3 flex gap-3 ">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={27}
            className="object-cover"
            height={40}
          ></Image>{" "}
          <span
            className={`${redwing.className} font-medium text-[18px] text-white mt-1`}
          >
            10Ants
          </span>
        </header>
        <nav className="w-64 space-y-2 text-[#FFFFFF8C] text-[14px] font-medium font-inter">
          {sidebarItems.map((item) => {
            return <SidebarItem key={item.label} item={item} />;
          })}
        </nav>
      </div>
      <footer className="my-3 border-t pt-4 border-[#D3D3D340] ">
        <div className="bg-white rounded-lg p-2 flex w-full justify-between ">
          <aside className="flex gap-2 item-center">
            <Image
              src={"/images/avatar.png"}
              alt=""
              className="object-contain"
              width={31}
              height={31}
            ></Image>
            <div className="flex flex-col font-inter ">
              <p className="text-[12px] font-medium">Paterson Paul</p>
              <span className="text-[10px]">Landlord</span>
            </div>
          </aside>
          <div className="p-2 h-max cursor-pointer flex items-center justify-center border-[#36363633] rounded-md border ">
            <Image
              src={"/images/menu.png"}
              alt=""
              className="cursor-pointer"
              width={14}
              height={14}
            ></Image>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
