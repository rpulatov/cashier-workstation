import { UserStorage } from "storage";

const API_URL = "http://localhost:3001/api/v1";

type MethodParam = "GET" | "POST";

type ResponseData<TData> =
  | {
      status: "success";
      data: TData;
    }
  | {
      status: "fail";
      data: TData;
    }
  | {
      status: "error";
      message: string;
      code?: number;
    };

export function fetchData<TData>(
  resource: string,
  method: MethodParam = "GET",
  data?: object
) {
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
    .then((response: ResponseData<TData>) => {
      if (response) {
        if (response.status === "fail") {
          throw new Error("Ошибка валидации");
        } else if (response.status === "error") {
          throw new Error(response.message);
        }
      }
      return response;
    });
}
