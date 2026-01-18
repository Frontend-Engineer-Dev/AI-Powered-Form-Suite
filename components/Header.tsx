"use client";

import DynamicBreadcrumb from "@/components/BreadCrumb";
import { Bell, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

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
        <Link
          href={
            "https://developers.google.com/workspace/forms/api/reference/rest"
          }
          className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
        >
          Help Docs
        </Link>
      </div>
    </header>
  );
}
