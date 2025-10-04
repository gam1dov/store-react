import { Form, Link } from "react-router";
import { FormInput, SubmitBtn } from "../components";

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-2xl font-bold">
          Вход в личный кабинет
        </h4>
        <FormInput
          type="email"
          label="Электронный адрес"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Пароль"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Войти" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          Гостевой пользователь
        </button>
        <p className="text-center text-sm">
          Вы еще не зарегистрированы?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Регистрация
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
