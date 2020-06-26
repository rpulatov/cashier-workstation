import React from "react";

import { connect } from "react-redux";

import { loginAction } from "reduxStore/reducers/auth";

import styles from "./Auth.module.css";

type AuthProps = {
  loginAction: (login: string, password: string) => void;
};

type AuthState = {
  login: string;
  password: string;
};

class Auth extends React.Component<AuthProps, AuthState> {
  state = {
    login: "",
    password: "",
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.loginAction(login, password);
  };

  onChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name === "login") this.setState({ login: e.target.value });
    if (name === "password") this.setState({ password: e.target.value });
  };

  render() {
    const { login, password } = this.state;

    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.item}>
            <label>
              <span>Login</span>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.onChange("login")}
              />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.onChange("password")}
              />
            </label>
          </div>
          <div className={styles.item}>
            <button type="submit" className={styles.button}>
              Войти
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { loginAction })(Auth);
