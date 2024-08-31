import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Profile = () => {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the credentials are for admin
    if (email === "admin@example.com" && password === "admin123") {
      login({ email, isAdmin: true });
      navigate("/admin");
      toast.success("Logged in as admin");
    } else {
      // Regular user login
      login({ email });
      toast.success("Logged in successfully");
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const mockOrders = [
    { id: 1, date: "2023-03-15", total: 450 },
    { id: 2, date: "2023-04-02", total: 300 },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">User Profile</h1>
      {user ? (
        <>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Email: {user.email}</p>
              <p>Role: {user.isAdmin ? 'Admin' : 'User'}</p>
              <Button onClick={handleLogout} className="mt-4">Logout</Button>
              {user.isAdmin && (
                <Button onClick={() => navigate('/admin')} className="mt-4 ml-4">Go to Admin Page</Button>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              {mockOrders.map((order) => (
                <div key={order.id} className="mb-4">
                  <p>Order ID: {order.id}</p>
                  <p>Date: {order.date}</p>
                  <p>Total: ₹{order.total}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                />
              </div>
              <Button type="submit">Login</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Profile;
