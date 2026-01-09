"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
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

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      {/* Logo */}
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center gap-3">
          <div className="bg-sidebar-primary/10 backdrop-blur-sm p-2.5 rounded-xl shadow-md ring-1 ring-sidebar-primary/20">
            <Zap
              size={24}
              className="text-sidebar-primary"
              fill="currentColor"
            />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground tracking-tight">
            Form Suite
          </span>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-3 py-6">
        <SidebarMenu className="space-y-1.5">
          {paths.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={`
                    group relative overflow-hidden rounded-lg transition-all duration-200
                    text-sidebar-foreground/70 hover:text-sidebar-foreground
                    hover:bg-sidebar-accent hover:shadow-sm
                    data-[active=true]:bg-sidebar-primary 
                    data-[active=true]:text-sidebar-primary-foreground
                    data-[active=true]:shadow-md
                  `}
                >
                  <Link
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-2.5"
                  >
                    <Icon
                      className={`
                      h-5 w-5 transition-transform duration-200
                      group-hover:scale-110
                      ${isActive ? "scale-110" : ""}
                    `}
                    />
                    <span className="font-medium text-sm">{item.pathName}</span>
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-sidebar-primary-foreground rounded-r-full opacity-80" />
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* User Profile */}
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-all duration-200 cursor-pointer group">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary via-chart-2 to-accent flex items-center justify-center text-sm font-bold shrink-0 shadow-md ring-2 ring-sidebar-border">
            <span className="text-primary-foreground">AG</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold truncate text-sidebar-foreground group-hover:text-sidebar-accent-foreground transition-colors">
              Alex Google
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              alex.google@example.com
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
