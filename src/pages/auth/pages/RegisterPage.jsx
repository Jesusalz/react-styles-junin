import React from "react";
import { message } from "antd";

export const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    message.success("Registrado!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Crear Cuenta</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <button className="bg-purple-600 text-white py-2 rounded w-full hover:bg-purple-700 transition duration-200">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
