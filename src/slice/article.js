import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
  articleDetail: null,
  index: null,
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
    createArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.articles.unshift(action.payload);
    },
    editArticleStart: (state, action) => {
      state.index = state.articles.findIndex(
        (item) => item.slug === action.payload
      );
    },
    editArticleSuccess: (state, action) => {
      state.articles = state.articles.with(state.index, action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(
        (item) => item.slug !== action.payload
      );
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
  createArticleStart,
  createArticleSuccess,
  deleteArticle,
  editArticleStart,
  editArticleSuccess,
} = articleSlice.actions;

export default articleSlice.reducer;
