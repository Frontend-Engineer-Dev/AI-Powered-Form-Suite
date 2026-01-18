import { z } from "zod";

// POST : To Create Form
export const CreateformSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  documentTitle: z
    .string()
    .max(200, "Document title must be less than 200 characters")
    .optional(),
});

// GET : To Get all created form
