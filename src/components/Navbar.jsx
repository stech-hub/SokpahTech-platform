import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-yellow-500 via-pink-500 to-yellow-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Akin S. Sokpah</h1>

      <div className="flex gap-4 font-medium">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/products" className="hover:underline">Products</NavLink>
        <NavLink to="/payments" className="hover:underline">Payments</NavLink>
        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        <NavLink to="/login" className="bg-white text-pink-600 px-3 py-1 rounded-lg">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
