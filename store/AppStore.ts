import { configureStore } from "@reduxjs/toolkit";

//Imports

// App Store Config
export const AppStore = configureStore({
  devTools: true,
  reducer: {},
});

// Root State
export type RootState = ReturnType<typeof AppStore.getState>;
// Dispatch type
export type AppDispatch = typeof AppStore.dispatch;