import ActionButton from "@/components/Button";
import FormModal from "@/components/FormModel";

export default function page() {
  return (
    <section className="p-8 w-full">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Alex </h1>
          <p className="text-gray-400 text-md">
            Here's what happening with your forms today.
          </p>
        </div>
        <FormModal />
      </div>
    </section>
  );
}
