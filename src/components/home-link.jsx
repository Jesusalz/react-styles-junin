import React from "react";
import { BsBack } from "react-icons/bs";
import { Link } from "react-router-dom";

export function HomeLink() {
  return (
    <Link
      to={"/"}
      className="text-gray-500 flex items-center gap-2 hover:bg-gray-100 mr-auto px-2 rounded-md transition-all duration-150"
    >
      {" "}
      <BsBack />
      Go Back to Home
    </Link>
  );
}
