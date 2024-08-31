import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { navItems, adminItem } from "@/nav-items";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-earth-800 text-earth-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/shades-of-spring-logo.png" alt="Shades of Spring Logo" className="h-20 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button variant="ghost" className="text-earth-100 hover:bg-earth-700">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Button>
            </Link>
          ))}
          {user && user.isAdmin && (
            <Link to={adminItem.to}>
              <Button variant="ghost" className="text-earth-100 hover:bg-earth-700">
                {adminItem.icon}
                <span className="ml-2">{adminItem.title}</span>
              </Button>
            </Link>
          )}
          <Link to="/cart">
            <Button variant="ghost" className="text-earth-100 hover:bg-earth-700">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cart.length})
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="text-earth-100">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={toggleMenu}>
              <Button variant="ghost" className="text-earth-100 w-full justify-start mb-2 hover:bg-earth-700">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Button>
            </Link>
          ))}
          {user && user.isAdmin && (
            <Link to={adminItem.to} onClick={toggleMenu}>
              <Button variant="ghost" className="text-earth-100 w-full justify-start mb-2 hover:bg-earth-700">
                {adminItem.icon}
                <span className="ml-2">{adminItem.title}</span>
              </Button>
            </Link>
          )}
          <Link to="/cart" onClick={toggleMenu}>
            <Button variant="ghost" className="text-earth-100 w-full justify-start hover:bg-earth-700">
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
