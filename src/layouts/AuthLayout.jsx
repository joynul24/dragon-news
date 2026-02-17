import { Outlet } from "react-router-dom";
import Navber from "../components/shared/Navber";

export default function AuthLayout() {
  return (
    <div className="bg-gray-200 min-h-screen font-poppins">
      <header className="container mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>
      </header>
    </div>
  )
}
