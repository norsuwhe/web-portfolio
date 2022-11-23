import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found__header">Страница не найдена!</h1>
      <p className="not-found__text">Что-то пошло не так...</p>
      <button className="not-found__button">
        <Link to="about" className="not-found__link">
          На главную страницу
        </Link>
      </button>
    </section>
  );
};

export default NotFound;
