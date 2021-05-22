import React from "react";

const Registration = () => {
  return (
    <div className="auth__form">
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="re_password"
          placeholder="Repeat Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
