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
};

export default ArticleService;
