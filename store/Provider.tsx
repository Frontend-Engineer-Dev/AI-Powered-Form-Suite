"use client";

import { Provider } from "react-redux";
import { AppStore } from "./AppStore";

// Store Provider
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={AppStore}>{children}</Provider>;
};
