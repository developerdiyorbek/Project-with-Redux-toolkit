import { Routes, Route } from "react-router-dom";
import { ArticleDetail, CreateArticle, Home, Login, Register } from "./pages";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserError, signUserStart, signUserSuccess } from "./slice/auth";
import ArticleService from "./service/article";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";
import EditArticle from "./pages/EditArticle";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    dispatch(signUserStart());
    try {
      const responce = await AuthService.getUser();
      dispatch(signUserSuccess(responce.user));
    } catch (error) {
      console.log(error);
      dispatch(signUserError());
    }
  };

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const responce = await ArticleService.getArticles();
      dispatch(getArticlesSuccess(responce.articles));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/edit-article/:slug" element={<EditArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
