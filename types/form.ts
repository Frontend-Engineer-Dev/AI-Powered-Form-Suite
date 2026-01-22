import { z } from "zod";

// Zod Validation
import { CreateformSchema } from "@/schema/formValidation";

// Type : To create Form
export type CreateFormType = z.infer<typeof CreateformSchema>;