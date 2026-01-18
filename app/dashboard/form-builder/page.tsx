import ActionButton from "@/components/Button";
import CreateForm from "@/components/FormModel";
import FormBuilderHeader from "@/components/FormBuilderHeader";
import FormWrapper from "@/components/FormWrapper";

export default function FormBuilder() {
  return (
    <main className="max-w-[80%] mx-auto w-full my-5 space-y-10 animate-in fade-in duration-500">
      {/* Form Builder Header */}
      <header className="w-full flex items-center justify-between mb-20 gap-3">
        <div className="w-3/4">
          <FormBuilderHeader />
        </div>
        <div className="flex items-end space-x-5 w-1/4">
          <ActionButton
            type="button"
            variant={"outline"}
            className="font-semibold"
          >
            Save Blueprint
          </ActionButton>
          <ActionButton type="button" className="bg-primary font-semibold">
            Sync to Google
          </ActionButton>
        </div>
      </header>
      {/* Form Editor */}
      <FormWrapper />
    </main>
  );
}