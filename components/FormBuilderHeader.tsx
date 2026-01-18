import { ArrowLeft } from "lucide-react";

export default function FormBuilderHeader() {
  return (
    <form className="flex items-center space-x-3.5">
      <div>
        <ArrowLeft size={26} className="text-gray-500 cursor-pointer" />
      </div>

      <div className="container flex flex-col gap-y-2">
        <input
          type="text"
          placeholder="Untitled form"
          required
          className="text-2xl font-semibold focus:outline-none placeholder:text-gray-400"
        />

        <input
          type="text"
          placeholder="Form description"
          className="text-md font-medium text-gray-700 focus:outline-none placeholder:text-gray-400"
        />
      </div>
    </form>
  );
}