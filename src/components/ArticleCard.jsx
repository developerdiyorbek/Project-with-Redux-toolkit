import { Link } from "react-router-dom";

function ArticleCard(item) {
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
            <button type="button" className="btn btn-sm btn-outline-warning">
              Edit
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
          <small className="text-body-secondary">{item.author.username}</small>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
