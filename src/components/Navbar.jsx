import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { navItems } from "@/nav-items";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-stone-800 text-stone-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Shades of Spring</Link>
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button variant="ghost" className="text-stone-100">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Button>
            </Link>
          ))}
          <Link to="/cart">
            <Button variant="ghost" className="text-stone-100">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cart.length})
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;