import { configureStore } from "@reduxjs/toolkit";
import AuthRegisterSlice from "../slice/auth";
import ArticleRegisterSlice from "../slice/article";

export const store = configureStore({
  reducer: {
    auth: AuthRegisterSlice,
    article: ArticleRegisterSlice,
  },
});
