import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Payment = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">UPI Payment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter UPI Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="upi-id">UPI ID</Label>
              <Input id="upi-id" placeholder="yourname@upi" />
            </div>
            <div>
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
            <Button type="submit">Proceed to Pay</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;