import { toast } from "react-toastify";
import { customFetch, formatPrice } from "./index";
import { redirect } from "react-router";
import { loginUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

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

export function checkoutAction(store) {
  return async function ({ request }) {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      store.dispatch(clearCart());
      toast("Заказ успешно резмещен");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Произошла ошибка при размещении заказа";

      toast.error(errorMessage);
      if (error.response.status === 401) return redirect("/login");
      return null;
    }
  };
}
