import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleError,
  getArticleStart,
  getArticleSuccess,
} from "../slice/article";
import ArticleService from "../service/article";
import Loader from "../ui/Loader";
import moment from "moment";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { isLoading, articleDetail } = useSelector((state) => state.article);

  const getArticle = async () => {
    dispatch(getArticleStart());
    try {
      const responce = await ArticleService.getArticleBySlug(slug);
      dispatch(getArticleSuccess(responce.article));
    } catch (error) {
      console.log(error);
      dispatch(getArticleError());
    }
  };

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5 mb-4 rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-6 fw-bold">{articleDetail?.title}</h1>
            <p className="col-md-8 fs-4 text-muted">
              {articleDetail?.description}
            </p>
            <div className="d-flex gap-3">
              <p>
                {" "}
                <span className="fw-bold">Created at: </span>
                <span className="text-muted">
                  {moment(articleDetail?.createdAt).format("DD MMM, YYYY")}
                </span>
              </p>
            </div>
            <div>{articleDetail?.body}</div>
            <div className="d-flex gap-4 align-items-center mt-5">
              <img
                src={articleDetail?.author?.image}
                alt="authorImage"
                width={50}
                className="rounded"
              />
              <p className="m-0 fw-bold text-muted">
                {articleDetail?.author?.username}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
