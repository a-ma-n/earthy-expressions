import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    // In a real app, fetch products from an API
    setProducts([
      { id: 1, name: "Painted Bookmark", price: 150 },
      { id: 2, name: "Vintage Letterpaper Set", price: 300 },
      { id: 3, name: "Handmade Customized Envelope", price: 200 },
      { id: 4, name: "Postcard Collection", price: 250 },
    ]);
  }, []);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
      setProducts(updatedProducts);
      setNewProduct({ name: "", price: "" });
      toast.success("Product added successfully");
    }
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    toast.success("Product removed successfully");
  };

  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
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
              <span>{product.name} - ₹{product.price}</span>
              <Button variant="destructive" onClick={() => handleRemoveProduct(product.id)}>Remove</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
