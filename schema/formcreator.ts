import { z } from "zod";

export const FormCreatorAPIResponseSchema = z.object({
  formId: z.string(),
  info: z.object({
    title: z.string(),
    documentTitle: z.string(),
  }),
  settings: z.object({
    emailCollectionType: z.enum(["DO_NOT_COLLECT", "COLLECT"]),
  }),
  revisionId: z.string(),
  responderUri: z.string().url(),
  publishSettings: z.object({
    publishState: z.object({
      isPublished: z.boolean(),
      isAcceptingResponses: z.boolean(),
    }),
  }),
});
