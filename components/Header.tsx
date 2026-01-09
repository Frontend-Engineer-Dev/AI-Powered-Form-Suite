"use client";

import DynamicBreadcrumb from "@/components/BreadCrumb";
import { Bell, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 flex items-center px-4 h-14 justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle */}
        <SidebarTrigger>
          <Menu size={18} />
        </SidebarTrigger>

        <DynamicBreadcrumb />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5">
        <Bell size={18} />
      </div>
    </header>
  );
}
