import { toast } from "react-toastify";
import { customFetch } from "./index";
import { redirect } from "react-router";
import { loginUser } from "../features/user/userSlice";

export async function registerAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast("Профиль создан успешно");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Пожалуйста, проверьте еще раз свои учетные данные";

    toast.error(errorMessage);
    return null;
  }
}

export function loginAction(store) {
  return async function ({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast("Вы вошли в систему");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Пожалуйста, проверьте еще раз свои учетные данные";

      toast.error(errorMessage);
      return null;
    }
  };
}
