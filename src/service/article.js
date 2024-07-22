import customAxios from "./api";

const ArticleService = {
  getArticles: async () => {
    const { data } = await customAxios.get("/articles");
    return data;
  },
  getArticleBySlug: async (slug) => {
    const { data } = await customAxios.get(`/articles/${slug}`);
    return data;
  },
  createArticle: async (article) => {
    const { data } = await customAxios.post(`/articles`, { article });
    return data;
  },
  editArticle: async (slug, article) => {
    const { data } = await customAxios.put(`/articles/${slug}`, { article });
    return data;
  },
  deleteArticle: async (slug) => {
    const { data } = await customAxios.delete(`/articles/${slug}`);
    return data;
  },
};

export default ArticleService;
