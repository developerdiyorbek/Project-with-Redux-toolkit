import { useSelector } from "react-redux";
import Loader from "../ui/Loader";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const { articles, isLoading } = useSelector((state) => state.article);
  return (
    <div>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <ArticleCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
