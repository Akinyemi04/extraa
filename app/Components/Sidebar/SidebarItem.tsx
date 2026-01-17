"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type IconType = React.ElementType;

type SidebarChild = {
  href: string;
  label: string;
  icon: IconType;
  imgSrc?: string;
};

type Item = {
  href?: string;
  label: string;
  icon: IconType;
  imgSrc?: string;
  children?: SidebarChild[];
};

interface SidebarItemProps {
  item: Item;
}

function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const hasChildren = !!item.children;

  const isActive =
    item.href === pathname ||
    item.children?.some((child) => pathname.startsWith(child.href));

  const [open, setOpen] = useState(isActive);

  if (!hasChildren) {
    return (
      <button
        onClick={() => router.push(item.href!)}
        className={`sidebar-link ${isActive ? "active" : ""}`}
      >
        {item.imgSrc && (
          <Image src={item.imgSrc} alt={item.label} width={14} height={14} />
        )}
        {item.label}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={` items-center flex gap-2 w-full p-2 text-left text-[13px] ${
          item.label === "Roles"
            ? "hover:text-white transition-all  cursor-pointer duration-100 ease-in-out"
            : "cursor-not-allowed"
        }
        ${isActive ? "dropdown-active" : ""}`}
      >
        <span className="scale-90">
          {" "}
          {item.imgSrc && (
            <Image src={item.imgSrc} alt={item.label} width={14} height={14} />
          )}
          {}
        </span>

        {item.label}
        <ChevronDown
          className={`ml-auto transition-transform scale-90 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className=" mt-1 space-y-1 ">
          {item.children?.map((child) => (
            <button
              key={child.href}
              onClick={() => router.push(child.href)}
              className={`sub-link cursor-pointer rounded-xl ${
                pathname === child.href ? "active" : ""
              }`}
            >
              <span className="scale-90">
                {/* <child.icon /> */}
                {child.imgSrc ? (
                  <Image
                    src={child.imgSrc}
                    alt={child.label}
                    width={14}
                    height={14}
                  />
                ) : (
                  <child.icon />
                )}
              </span>
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
