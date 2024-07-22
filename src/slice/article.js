import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
  articleDetail: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesFailed: (state, action) => {
      state.error = action.payload;
    },
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleError: (state) => {
      state.isLoading = false;
    },
    createArticleStart: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticleError,
  getArticleStart,
  getArticleSuccess,
  getArticlesFailed,
} = articleSlice.actions;

export default articleSlice.reducer;
