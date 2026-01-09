"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FilePlus, FileUp, ChartPie, Zap } from "lucide-react";

const paths = [
  {
    path: "/dashboard",
    pathName: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/dashboard/form-builder",
    pathName: "Form Builder",
    icon: FilePlus,
  },
  {
    path: "/dashboard/upload",
    pathName: "CSV Injector",
    icon: FileUp,
  },
  {
    path: "/dashboard/insights",
    pathName: "Insights",
    icon: ChartPie,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-[#2e28d7] text-white min-h-screen w-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-lg">
          <Zap size={24} className="text-white" fill="white" />
        </div>
        <h1 className="text-xl font-bold">FormSuite</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2">
        {paths.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                isActive
                  ? "bg-white/10 text-white font-semibold"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.pathName}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-sm font-semibold">
            AG
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Alex Google
            </p>
            <p className="text-xs text-white/60 truncate">
              alex.google@example.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}