import { z } from "zod";
import { FormCreatorAPIResponseSchema } from "@/schema/formcreator";

//* Form creator responses */
export type FormCreatorAPIResponse = z.infer<
  typeof FormCreatorAPIResponseSchema
>;