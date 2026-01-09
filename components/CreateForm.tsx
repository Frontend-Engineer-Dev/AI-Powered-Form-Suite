import { ArrowLeft } from "lucide-react";

export default function CreateForm() {
  return (
    <div className="flex items-stretch space-x-6 w-full">
      <ArrowLeft size={25} className="my-1.5 text-gray-500" />
      <form action="#" className="flex flex-col gap-y-3.5 w-full">
        <div>
          <input
            type="text"
            name="title"
            className="font-semibold text-3xl shrink-0 w-[60%] focus:outline-none"
            placeholder="Enter form title..."
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            className="text-lg shrink-0 w-[60%] focus:outline-none"
            placeholder="Add detailed description for this form"
          />
        </div>
      </form>
    </div>
  );
}
