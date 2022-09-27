import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Страница не найдена!</h1>
      <p>Что-то пошло не так...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default NotFound;
