import Link from "next/link";

export default function FormCard() {
  const forms: any = [];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form: any) => (
          <div
            key={form.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group relative flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-file-lines text-lg"></i>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${form.googleFormId ? "bg-green-50 text-green-600" : "bg-slate-50 text-slate-400"}`}
              >
                {form.googleFormId ? "Active" : "Draft"}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
              {form.title}
            </h3>
            <p className="text-slate-500 text-xs mb-8">
              {form.questions.length} total questions
            </p>

            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400">
                {form.createdAt} ago
              </span>
              <Link
                href={`/builder/${form.id}`}
                className="text-indigo-600 text-[10px] font-bold uppercase hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
