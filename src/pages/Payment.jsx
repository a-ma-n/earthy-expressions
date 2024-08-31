import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const [upiId, setUpiId] = useState("");
  const [email, setEmail] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    toast.success("Payment successful!");
    generateReceipt();
    clearCart();
  };

  const generateReceipt = () => {
    const receipt = document.getElementById("receipt");
    html2canvas(receipt).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">UPI Payment</h1>
      <Card className="mb-8" id="receipt">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Enter Payment Details</CardTitle>
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
                <Label htmlFor="email">Email (for receipt)</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
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
        <Card>
          <CardHeader>
            <CardTitle>Scan QR Code to Pay</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              alt="UPI QR Code"
              className="w-64 h-64"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
