import { Form, Link } from "react-router";
import { FormInput, SubmitBtn } from "../components";

// export const action = async () => {
//   return null;
// };

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Регистрация</h4>
        <FormInput type="input" label="Имя пользователя" name="username" />
        <FormInput type="email" label="Электронный адрес" name="email" />
        <FormInput type="password" label="Пароль" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Регистрация" />
        </div>
        <p className="text-center text-sm">
          Уже зарегистрированы?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Войти
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
