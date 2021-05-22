import React from "react";

const Login = () => {
  return (
    <div className="auth__form">
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <div>
          <input type="checkbox" name="remember" />
          <span>Remember Me</span>
        </div>
        <small>Lost Your Password ?</small>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
