export class UserStorage {
  static load() {
    let data = localStorage.getItem("user");
    data = data ? JSON.parse(data) : null;
    return {
      userName: data ? data.userName : null,
      token: data ? data.token : null,
    };
  }

  static clear() {
    localStorage.removeItem("user");
  }

  static save(userName, token) {
    localStorage.setItem("user", JSON.stringify({ userName, token }));
  }
}
