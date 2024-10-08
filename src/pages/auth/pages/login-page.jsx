import React from "react";
import { message } from "antd";

export function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    message.success("Bienvenido!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="example@email.com" />
      <input type="password" placeholder="****" />
      <button>Login</button>
    </form>
  );
}
