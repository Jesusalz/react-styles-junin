import React from "react";
import { message } from "antd";

export function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    message.success("Registrado!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Registarse</button>
    </form>
  );
}
