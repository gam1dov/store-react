import { customFetch } from "./index";

const url = "/products?featured=true";

export async function landingLoader() {
  const response = await customFetch(url);
  const products = response.data.data;

  return { products };
}

export async function loaderSingleProduct({ params }) {
  const response = await customFetch(`/products/${params.id}`);
  const product = response.data.data;

  return { product };
}
