import { useRouteError } from "react-router";

function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return <h4 className="font-bold text-4xl">Произошла ошибка...</h4>;
}

export default ErrorElement;
