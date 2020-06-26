import { UserStorage } from "storage";

const API_URL = "http://localhost:3001/api/v1";

export function fetchData(resource, method = "GET", data) {
  const { token } = UserStorage.load();
  return fetch(`${API_URL}${resource}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((response) => {
      if (response.status !== 200) throw new Error("Ошибка запроса");
      return response.json();
    })
    .then((response) => {
      if (response && response.status !== "success") {
        throw new Error(response.message);
      }
      return response;
    });
}
