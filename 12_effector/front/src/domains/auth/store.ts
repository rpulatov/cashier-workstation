import { createDomain ,forward } from "effector";

import { login as loginApi, LoginResponse } from "../../api/auth";

const domain = createDomain("auth");

export const $username = domain.createStore("");
export const $token = domain.createStore("");
export const $isAuth = $token.map((token) => !!token)
export const userAuthorized = domain.createEvent<{
  userName: string;
  token: string;
}>();

export const userLogout = domain.createEvent();
export const userSetted = domain.createEvent<string>();

$username.on(userAuthorized, (_, payload) => payload.userName);
$username.on(userSetted, (_, payload) => payload);
$username.reset(userLogout);

$token.on(userAuthorized, (_, payload) => payload.token);
$token.reset(userLogout);


export const loginFx = domain
  .createEffect<{ login: string; password: string }, LoginResponse>()
  .use(({ login, password }) =>
    loginApi(login, password).then((response) => response.data)
  );

  $username.on(loginFx.doneData, (_, payload) => payload.user.username);
  $token.on(loginFx.doneData, (_, payload) => payload.token);

  