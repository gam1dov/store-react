import { Form, Link, useNavigate } from "react-router";
import { FormInput, SubmitBtn } from "../components";
import { useDispatch } from "react-redux";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginAsGuestUser() {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast("Добро пожаловать, Гость");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        "Ошибка входа гостевого пользователя. Пожалуйста попробуйте заново"
      );
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-2xl font-bold">
          Вход в личный кабинет
        </h4>
        <FormInput type="email" label="Электронный адрес" name="identifier" />
        <FormInput type="password" label="Пароль" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Войти" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
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
