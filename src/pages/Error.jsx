import { useRouteError, Link } from "react-router";

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Страница не найдена!
          </h1>
          <p className="mt-6 text-lg leading-7">
            Извините, мы не смогли найти страницу, которую вы ищете.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary uppercase">
              Вернуться назад
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">Произошла ошибка!</h4>
    </main>
  );
}

export default Error;
