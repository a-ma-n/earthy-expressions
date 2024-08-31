import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { navItems } from "@/nav-items";
import { useAuth } from "@/contexts/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-stone-800 text-stone-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shades of Spring Logo" className="h-10 w-auto mr-2" />
          <span className="text-2xl font-bold">Shades of Spring</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            (item.title !== "Admin" || (user && user.isAdmin)) && (
              <Link key={item.to} to={item.to}>
                <Button variant="ghost" className="text-stone-100">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Button>
              </Link>
            )
          ))}
          {!user && (
            <Link to="/profile">
              <Button variant="ghost" className="text-stone-100">
                Login
              </Button>
            </Link>
          )}
          <Link to="/cart">
            <Button variant="ghost" className="text-stone-100">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cart.length})
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={toggleMenu}>
              <Button variant="ghost" className="text-stone-100 w-full justify-start mb-2">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Button>
            </Link>
          ))}
          {user && user.isAdmin && (
            <Link to="/admin" onClick={toggleMenu}>
              <Button variant="ghost" className="text-stone-100 w-full justify-start mb-2">
                Admin
              </Button>
            </Link>
          )}
          <Link to="/cart" onClick={toggleMenu}>
            <Button variant="ghost" className="text-stone-100 w-full justify-start">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cart.length})
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
