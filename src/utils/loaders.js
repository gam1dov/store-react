import { redirect } from "react-router";
import { customFetch } from "./index";
import { toast } from "react-toastify";

const landingUrl = "/products?featured=true";
const productsUrl = "/products";

export async function landingLoader() {
  const response = await customFetch(landingUrl);
  const products = response.data.data;

  return { products };
}

export async function singleProductLoader({ params }) {
  const response = await customFetch(`/products/${params.id}`);
  const product = response.data.data;

  return { product };
}

export async function productsLoader({ request }) {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(productsUrl, {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
}

export function checkoutLoader(store) {
  return function () {
    const user = store.getState().userState.user;

    if (!user) {
      return redirect("/login");
    }

    return null;
  };
}

export function ordersLoader(store) {
  return async function ({ request }) {
    const user = store.getState().userState.user;

    if (!user) {
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Произошла ошибка при доступе к вашим заказам";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };
}
