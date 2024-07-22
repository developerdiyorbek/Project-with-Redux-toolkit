import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleService from "../service/article";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { useDispatch } from "react-redux";
import { editArticleStart, editArticleSuccess } from "../slice/article";

function EditArticle() {
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getArticle = async () => {
    setIsLoading(true);
    try {
      const responce = await ArticleService.getArticleBySlug(slug);
      setTitle(responce.article.title);
      setBody(responce.article.body);
      setDescription(responce.article.description);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const onEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const article = { title, description, body };
    dispatch(editArticleStart(slug));
    try {
      const responce = await ArticleService.editArticle(slug, article);
      dispatch(editArticleSuccess(responce.article));
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="fs-2">Edit Article</h2>
      <div className="w-75 mx-auto">
        <form onSubmit={onEdit}>
          <Input label={"title"} setState={setTitle} state={title} />
          <TextArea
            label={"description"}
            setState={setDescription}
            state={description}
          />
          <TextArea label={"body"} setState={setBody} state={body} />
          <button
            className="w-100 btn btn-lg btn-primary mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditArticle;
