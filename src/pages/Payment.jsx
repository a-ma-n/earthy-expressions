import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const [upiId, setUpiId] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    toast.success("Payment successful!");
    clearCart();
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">UPI Payment</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="font-bold mt-4">
            Total: ₹{total}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Enter UPI Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <Label htmlFor="upi-id">UPI ID</Label>
              <Input
                id="upi-id"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi"
              />
            </div>
            <div>
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input id="amount" type="number" value={total} readOnly />
            </div>
            <Button type="submit">Proceed to Pay</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
