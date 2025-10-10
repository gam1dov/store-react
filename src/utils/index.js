import axios from "axios";

const BASE_URL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});

export function formatPrice(price) {
  const rublesAmount = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return rublesAmount;
}

export function generateArrayElements(number) {
  return Array.from({ length: number }, (_, index) => index + 1);
}
