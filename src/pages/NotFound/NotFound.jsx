import "./NotFound.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header/Header";

const NotFound = () => {
  useEffect(() => {
    document.title = "Страница не найдена...";
  }, []);
  return (
    <section className="not-found">
      <Header>Страница не найдена!</Header>
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
