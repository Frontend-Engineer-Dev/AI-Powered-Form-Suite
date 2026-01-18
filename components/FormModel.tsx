import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateForm from "./CreateForm";

export default function FormModal() {
  return (
    <div className="p-8">
      <Dialog>
        <DialogTrigger className="bg-blue-600 text-white px-4 py-2.5 font-semibold hover:bg-blue-700 transition-colors duration-150 ease-in cursor-pointer rounded-md shadow-sm">
          Create Form
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Create New Entry
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Fill in the details below to create a new entry. All fields are
              required and will be validated before submission.
            </DialogDescription>
          </DialogHeader>
          <CreateForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
