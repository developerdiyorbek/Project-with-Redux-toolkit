import { useState } from "react";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { createArticleStart, createArticleSuccess } from "../slice/article";
import ArticleService from "../service/article";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.article);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createArticleStart());
    const article = { title, description, body };
    try {
      const responce = await ArticleService.createArticle(article);
      dispatch(createArticleSuccess(responce.article));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="fs-2 mb-5">Create Article</h1>
      <div className="w-75 mx-auto">
        <form onSubmit={onSubmit}>
          <Input label={"Title"} state={title} setState={setTitle} />
          <TextArea
            label={"Description"}
            state={description}
            setState={setDescription}
          />
          <TextArea
            label={"Body"}
            state={body}
            setState={setBody}
            height="250px"
          />
          <button
            className="w-100 btn btn-lg btn-primary mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;
