import { Form } from "lucide-react";

export default function EmptyQuestion() {
  return (
    <div className="bg-white rounded-4xl p-24 text-center border-2 border-dashed border-slate-200 group hover:border-indigo-300 transition-colors">
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-50 transition-colors">
        <Form className="fa-solid fa-list-ul text-3xl text-slate-300 group-hover:text-indigo-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        No questions defined
      </h3>
      <p className="text-slate-500 max-w-xs mx-auto">
        Click on a component in the toolbox to start building your form.
      </p>
    </div>
  );
}
