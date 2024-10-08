import React from "react";
import { BsBack } from "react-icons/bs";
import { PiNavigationArrowLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const links = [
  {
    path: "/auth/login",
    title: " Login",
    description: ["Formulario de Login.", "Crear un diseño responsive."],
  },
  {
    path: "/auth/register",
    title: " Register",
    description: ["Formulario de Register.", "Crear un diseño responsive."],
  },
];
export function AuthLinks() {
  return (
    <div className="w-[50vw] mx-auto h-screen flex flex-col justify-center  gap-4">
      <div className="flex  flex-col gap-4 w-full ">
        {links.map((link) => (
          <div className="border p-4 rounded-md">
            <h2 className="font-semibold text-purple-600">{link.title}</h2>
            <div className="flex justify-between p-0">
              <ul>
                {link.description.map((value) => (
                  <li className="font-light"> - {value}</li>
                ))}
              </ul>
              <Link
                to={link.path}
                className="    px-6 flex justify-center items-center  border rounded-md bg-purple-500 text-slate-100 hover:bg-purple-800 transition-all duration-200"
              >
                ir <PiNavigationArrowLight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
