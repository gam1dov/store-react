import { toast } from "react-toastify";
import { customFetch } from "./index";
import { redirect } from "react-router";

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
