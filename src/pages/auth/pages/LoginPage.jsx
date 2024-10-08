import React from "react";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <label className="block text-gray-700 mb-2">Email</label>
        <input type="email" className="border border-gray-300 rounded p-2 mb-4 w-full" />
        <label className="block text-gray-700 mb-2">Contraseña</label>
        <input type="password" className="border border-gray-300 rounded p-2 mb-4 w-full" />
        <button className="bg-purple-600 text-white py-2 rounded w-full hover:bg-purple-700 transition duration-200">Iniciar Sesión</button>
      </form>
    </div>
  );
};
