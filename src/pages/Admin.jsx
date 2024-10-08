import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", quantity: 0 });

  useEffect(() => {
    // In a real app, fetch products from an API
    setProducts([
      { id: 1, name: "Painted Bookmark", price: 150, quantity: 10 },
      { id: 2, name: "Vintage Letterpaper Set", price: 300, quantity: 5 },
      { id: 3, name: "Handmade Customized Envelope", price: 200, quantity: 15 },
      { id: 4, name: "Postcard Collection", price: 250, quantity: 8 },
    ]);
  }, []);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.quantity > 0) {
      const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
      setProducts(updatedProducts);
      setNewProduct({ name: "", price: "", quantity: 0 });
      toast.success("Product added successfully");
    } else {
      toast.error("Please enter name, price, and quantity for the product");
    }
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    toast.success("Product removed successfully");
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedProducts = products.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
    toast.success("Product quantity updated");
  };

  if (!user || !user.isAdmin) {
    toast.error("Unauthorized access");
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <Button onClick={() => navigate('/profile')} className="mb-4">Back to Profile</Button>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            />
            <Input
              type="number"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={(e) => setNewProduct({ ...newProduct, quantity: Number(e.target.value) })}
            />
            <Button onClick={handleAddProduct}>Add Product</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manage Products</CardTitle>
        </CardHeader>
        <CardContent>
          {products.map((product) => (
            <div key={product.id} className="flex justify-between items-center mb-4">
              <span>{product.name} - ₹{product.price} - Quantity: {product.quantity}</span>
              <div>
                <Input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleUpdateQuantity(product.id, Number(e.target.value))}
                  className="w-20 mr-2"
                />
                <Button variant="destructive" onClick={() => handleRemoveProduct(product.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
