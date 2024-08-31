import { HomeIcon, ShoppingBagIcon, UserIcon, CreditCardIcon, ShoppingCartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import Profile from "./pages/Profile.jsx";
import Payment from "./pages/Payment.jsx";
import Cart from "./pages/Cart.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <Products />,
  },
  {
    title: "Cart",
    to: "/cart",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    page: <Cart />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Payment",
    to: "/payment",
    icon: <CreditCardIcon className="h-4 w-4" />,
    page: <Payment />,
  },
];
