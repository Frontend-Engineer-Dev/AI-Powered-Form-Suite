import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-dvh w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex flex-1 flex-col min-h-0">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="flex flex-1 min-h-0 p-4 bg-gray-50">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}