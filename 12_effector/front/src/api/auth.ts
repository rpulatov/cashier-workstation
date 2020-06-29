import { fetchData } from "./fetchData";

export interface IUser {
  id: number;
  username: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export type LoginResponse = {
  user: IUser;
  token: string;
};

export function login(username: string, password: string) {
  return fetchData<LoginResponse>("/auth/login", "POST", {
    username,
    password,
  });
}
