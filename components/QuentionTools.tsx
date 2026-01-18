import {
  TextAlignStart,
  CircleDot,
  SquareCheck,
  SquareChevronDown,
  FileSpreadsheet,
} from "lucide-react";
import { QuestionComponent } from "@/types/form";

const QUENTIONCOMPONENT: QuestionComponent[] = [
  { value: "TEXT", label: "Short Answer", icon: TextAlignStart },
  { value: "MULTIPLE_CHOICE", label: "Multiple Choice", icon: CircleDot },
  { value: "CHECKBOX", label: "Checkboxes", icon: SquareCheck },
  { value: "DROPDOWN", label: "Dropdown", icon: SquareChevronDown },
];

export default function QuentionTools() {
  return (
    <>
      {/* Floating Sidebar Toolbox */}
      <aside className="lg:col-span-4 sticky top-32 space-y-6">
        <div className="bg-white rounded-[28px] p-8 border border-slate-200/60 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">
              Components
            </h4>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {QUENTIONCOMPONENT.map((type) => (
              <button
                key={type.value}
                // onClick={() => addQuestion(type.value)}
                className="group w-full flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200 text-left"
              >
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all duration-300 shadow-sm group-hover:shadow-indigo-100 group-hover:scale-110">
                  <type.icon className="text-lg" />
                </div>
                <div className="flex-1">
                  <span className="block text-sm font-bold text-slate-900 leading-none mb-1 group-hover:text-indigo-600 transition-colors">
                    {type.label}
                  </span>
                  <span className="block text-[11px] text-slate-400 font-medium">
                    Click to insert
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Integrations
            </p>
            <button
              // onClick={() => navigate(`/import/${formId}`)}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-slate-200"
            >
              <FileSpreadsheet className="text-indigo-400 text-md" />
              CSV Injection
            </button>
          </div>
        </div>

        <div className="bg-linear-to-br from-indigo-600 to-purple-700 rounded-[28px] p-8 text-white shadow-xl shadow-indigo-200/50">
          <i className="fa-solid fa-lightbulb text-2xl mb-4 text-indigo-200"></i>
          <h5 className="font-bold text-lg mb-2">Pro Tip</h5>
          <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
            Large forms are best handled via CSV injection. You can map up to
            1000 questions in seconds.
          </p>
        </div>
      </aside>
    </>
  );
}
