import { customFetch } from "./index";

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
