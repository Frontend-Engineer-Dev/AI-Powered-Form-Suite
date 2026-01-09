import ActionButton from "@/components/Button";
import CreateForm from "@/components/CreateForm";

export default function FormBuilderPage() {
  return (
    <section className="max-w-[80%] mx-auto w-full my-5">
      <div className="w-full flex items-center justify-between">
        <CreateForm />
        <div className="flex items-end space-x-5">
          <ActionButton
            type="button"
            varient={"outline"}
            className="font-semibold"
          >
            Save Blueprint
          </ActionButton>
          <ActionButton type="button" className="bg-primary font-semibold">
            Sync to Google
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
