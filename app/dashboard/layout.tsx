import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-dvh w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r bg-white">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <section className="flex flex-col flex-1 h-full">
        {/* Header */}
        <div className="h-14 shrink-0">
          <Header />
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 bg-white border m-1.5 border-gray-200 rounded-2xl">
          {children}
        </div>
      </section>
    </main>
  );
}