import ActionButton from "@/components/Button";
import FormCard from "@/components/FormCard";
import FormModal from "@/components/FormModel";

export default function DashboardPage() {
  return (
    <section className="p-8 w-full">
      {/* Dashboard Header*/}
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Alex </h1>
          <p className="text-gray-400 text-md">
            Here's what happening with your forms today.
          </p>
        </div>
        <FormModal />
      </div>

      {/* Form List */}
      <div>
        <FormCard />
        {/* Bulk Injection Banner */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Try Bulk Importing</h3>
              <p className="text-indigo-100 text-sm max-w-sm opacity-90 leading-relaxed">
                Have dozens of questions in a spreadsheet? Inject them into a
                Google Form in seconds with our CSV tool.
              </p>
            </div>
          </div>
          <ActionButton
            type="button"
            // action={()=>navigate("")}
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-50 transition-colors relative z-10"
          >
            Get Started
          </ActionButton>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}