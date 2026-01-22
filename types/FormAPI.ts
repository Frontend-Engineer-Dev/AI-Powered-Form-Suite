// Form API Response
export type CreateFormResponse = {
  formId: string;

  info: {
    title: string;
    documentTitle: string;
  };

  settings: {
    emailCollectionType: "DO_NOT_COLLECT" | "VERIFIED" | "RESPONDER_INPUT";
  };

  revisionId: string;

  responderUri: string;

  publishSettings: {
    publishState: {
      isPublished: boolean;
      isAcceptingResponses: boolean;
    };
  };
};
