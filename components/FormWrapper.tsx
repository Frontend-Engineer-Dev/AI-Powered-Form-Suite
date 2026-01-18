"use client";

import { Activity } from "react";
import EmptyQuestion from "./EmptyQuestion";
import QuentionList from "./QuentionList";
import QuestionTools from "@/components/QuentionTools";

export default function FormWrapper() {
  const form = {
    questions: [],
  };

  // Valid question
  const hasQuestions = form.questions.length > 0;

  return (
    <>
      {/* Form Builder Body */}
      <section className="flex gap-12">
        <div className="w-4/4">
          {/* Empty State */}
          <Activity mode={hasQuestions ? "hidden" : "visible"}>
            <EmptyQuestion />
          </Activity>

          {/* Question List */}
          <Activity mode={hasQuestions ? "visible" : "hidden"}>
            <QuentionList />
          </Activity>
        </div>

        {/* Question Tools (always visible) */}
        <div className="1/4">
          <QuestionTools />
        </div>
      </section>
    </>
  );
}
