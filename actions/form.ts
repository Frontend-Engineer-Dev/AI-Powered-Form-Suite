"use server";

import { auth } from "@clerk/nextjs/server";
import FormAPI from "@/utils/axios.config";
import prisma from "@/lib/prisma";
import { CreateFormResponse } from "@/types/FormAPI";
import { CreateFormType } from "@/types/form";

type ActionResult =
  | { success: true; formId: string }
  | { success: false; error: string };

export async function createForm(
  formdata: CreateFormType,
): Promise<ActionResult> {
  try {
    // valid user before access
    const { userId } = await auth();
    if (!userId) {
      return { success: false, error: "Unauthorized User" };
    }

    // Accessing form field
    const { title, description, documentTitle } = formdata;
    const userDTO = { info: { title, description, documentTitle } };

    // To create form with google form api
    const formRes: CreateFormResponse = await FormAPI.post(
      "/v1/forms",
      userDTO,
    );

    // Store Form Data in db
    const res = await prisma.form.create({
      data: {
        googleFormId: formRes.formId,
        title: formRes.info.title,
        documentTitle: formRes.info.documentTitle,
        responderUri: formRes.responderUri,
        settings: formRes.settings,
        status: "PUBLISHED",
        isPublished: true,
        isAcceptingResponses: true,
        createdById: userId,
      },
    });

    console.log("Form Created & Saved:", res);
    return { success: true, formId: res.id };
  } catch (error) {
    console.error("Create form error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create form",
    };
  }
}
