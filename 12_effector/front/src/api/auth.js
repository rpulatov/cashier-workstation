import { fetchData } from "./fetchData";

export function login(username, password) {
  return fetchData("/auth/login", "POST", {
    username,
    password,
  });
}
