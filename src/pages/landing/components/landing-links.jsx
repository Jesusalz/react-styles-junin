import React from "react";
import { PiNavigationArrowLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const links = [
  {
    path: "/auth",
    title: " Login / Register",
    description: [
      "Formulario de Login.",
      "Formulario de Register.",
      "Crear un diseño responsive.",
    ],
  },
  {
    path: "/products",
    title: " Productos",
    description: [
      "Listado de Productos.",
      "Aplicar estilos para crear una 'grilla' de productos.",
      "Crear un diseño responsive.",
    ],
  },
];
export function LandingLinks() {
  return (
    <div className="w-[60vw] h-full py-10 mx-auto flex flex-col   space-y-10 ">
      <div className=" w-full">
        <h2 className="text-3xl font-semibold">
          Tiempo de aplicar <span className="text-purple-600">estilos</span>{" "}
          sobre nuestra aplicación
        </h2>
      </div>
      <div>
        <p>
          Para este workshop se van a encontrar con{" "}
          <strong className="text-purple-500">2 páginas</strong> las cuales van
          a tener contenido HTML pero <strong>sin estilos</strong>.
        </p>
        <br />
        <p>
          Deberán aplicar estilos a cada una de las páginas de la forma que más
          cómodo les parezca. Es decir, pueden utilizar{" "}
          <span className="font-semibold text-sky-500">Taillwindcss</span> o{" "}
          <span className="font-semibold text-blue-800">CSS Puro</span> según lo
          que cada uno quiera.
        </p>

        <br />

        <p>
          <i> Aclaración: </i>
          <span className="font-semibold text-sky-500">Taillwindcss</span> ya se
          encuntra instalado y configurado en el proyecto, de hecho esta página{" "}
          <span className="font-semibold text-gray-500 text-sm">("/")</span>
          está estilada con esta librearía, asique pueden utilizarla como modelo
          para ver cómo se utilizan las clases de tailwind .
        </p>
      </div>

      <hr />
      <section className="space-y-4">
        <div>
          <p className="text-gray-600 font-medium">
            Las páginas que van a tener para estilar son las siguientes:
          </p>
        </div>
        <div className="flex  flex-col gap-4 ">
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
      </section>
    </div>
  );
}
