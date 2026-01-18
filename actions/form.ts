"use server";

import { auth } from "@clerk/nextjs/server";
import FormAPI from "@/utils/axios.config";

// To create a form
async function createForm(prev: string, formdata: FormData) {
  try {
    // valid user
    const { isAuthenticated } = await auth();
    if (!isAuthenticated) {
      throw new Error("Unauthorized User");
    }

    // Accessing form field
    const title = formdata.get("title");
    const description = formdata.get("description");
    const userDTO = { title, description }; // DTO Form Object

    // To create form with goole form api
    const formRes = await FormAPI.post("", userDTO);

    // Store User Data
    // const res = await db

    return;
  } catch (error) {
    return error;
  }
}
