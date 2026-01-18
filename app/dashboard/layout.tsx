import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
  formBuilder,
}: {
  children: React.ReactNode;
  formBuilder: React.ReactNode;
}) {
  return (
    <>
      {/* Sidebar Provider */}
      <SidebarProvider>
        <div className="flex h-dvh w-full">
          {/* Sidebar Section */}
          <AppSidebar />

          {/* Main Content */}
          <div className="flex flex-1 flex-col min-h-0">
            <Header />

            <main className="relative flex flex-1 min-h-0 p-4 bg-blue-50/30">
              {/* Dashboard content */}
              <section className="flex-1">{children}</section>

              {/* Modal overlay */}
              {formBuilder}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
