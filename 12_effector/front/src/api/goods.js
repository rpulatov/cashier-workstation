import { fetchData } from "./fetchData";

export function searchGoods(params) {
  const searchString = new URLSearchParams(params).toString();
  return fetchData(`/goods/findAll${searchString ? `?${searchString}` : ""}`);
}
