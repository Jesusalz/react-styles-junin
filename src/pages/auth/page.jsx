import { Link, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages";
import { AuthLinks } from "./components";
import { BsBack } from "react-icons/bs";
import { HomeLink } from "../../components";

export function AuthPage() {
  return (
    <div>
      <HomeLink />
      <Routes>
        <Route path="/" element={<AuthLinks />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
