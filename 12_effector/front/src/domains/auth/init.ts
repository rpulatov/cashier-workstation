import { UserStorage } from "storage";
import { userAuthorized, userLogout } from "./store";
const data = UserStorage.load();

if (data) {
  userAuthorized(data);
}

userLogout.watch(() => UserStorage.clear());
