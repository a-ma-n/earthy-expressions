import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">₹{item.price} x {item.quantity}</p>
                  <p className="text-lg">Subtotal: ₹{item.price * item.quantity}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: ₹{total}</p>
            <Button asChild className="mt-4">
              <Link to="/payment">Proceed to Payment</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
