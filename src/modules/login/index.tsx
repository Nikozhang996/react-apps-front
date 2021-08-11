import React, { FC, useRef } from "react";
import { BrowserRouterProps } from "react-router-dom";

interface IProps extends BrowserRouterProps {}

const Login: FC<IProps> = (props) => {
  const formRef = useRef<HTMLFormElement | null>();

  function handleLogin() {
    const [usernameInput, passwordInput] = formRef.current && formRef.current.elements;
    console.log(usernameInput.value, passwordInput.value);
  }

  return (
    <div>
      <form action="" ref={formRef}>
        <label htmlFor="username">
          <span>账号</span>
          <input type="text" name="username" />
        </label>
        <label htmlFor="password">
          <span>密码</span>
          <input type="password" name="password" />
        </label>
      </form>

      <section className="button-group">
        <button type="button" className="login-btn" onClick={handleLogin}>
          登录
        </button>
      </section>
    </div>
  );
};

export default Login;
