import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArticleService from "../service/article";
import { deleteArticle } from "../slice/article";

function ArticleCard(item) {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onDelete = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      dispatch(deleteArticle(slug));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col" key={item.title}>
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text fw-bold">{item.title}</p>
          <p className="card-text">
            {item.description.length > 40
              ? `${item.description.slice(0, 40)}...`
              : item.description}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center card-footer">
          <div className="btn-group">
            <Link
              type="button"
              to={`/article/${item.slug}`}
              className="btn btn-sm btn-outline-success"
            >
              View
            </Link>
            {loggedIn && user.username === item.author.username && (
              <>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(item.slug)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
          <small className="text-body-secondary">{item.author.username}</small>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
