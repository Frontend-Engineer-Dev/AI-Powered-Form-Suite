"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateformSchema } from "@/schema/formValidation";
import { type CreateFormType } from "@/types/form";

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormType>({
    resolver: zodResolver(CreateformSchema),
  });

  const onSubmit = (data: CreateFormType) => {
    console.log("Form data:", data);
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className={`w-full px-4 py-2.5 text-gray-900 border rounded-md transition-colors focus:outline-none focus:border-blue-500  ${
            errors.title
              ? "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500"
              : "border-gray-400 bg-white"
          }`}
          placeholder="Enter a descriptive title"
        />
        {errors.title && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.title.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Document Title (Optional)
        </label>
        <input
          type="text"
          id="category"
          {...register("documentTitle")}
          className={`w-full px-4 py-2.5 text-gray-900 border rounded-md transition-colors focus:outline-none focus:border-blue-500 ${
            errors.documentTitle
              ? "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500"
              : "border-gray-400 bg-white"
          }`}
          placeholder="Enter category"
        />
        {errors.documentTitle && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.documentTitle.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description (Optional)
        </label>
        <textarea
          id="description"
          {...register("description")}
          rows={6}
          className={`w-full px-4 py-2.5 text-gray-900 border rounded-md transition-colors focus:outline-none focus:border-blue-500 resize-none ${
            errors.description
              ? "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500"
              : "border-gray-400 bg-white"
          }`}
          placeholder="Provide a detailed description..."
        />
        {errors.description && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
