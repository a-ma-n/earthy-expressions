import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const initialProducts = [
  { id: 1, name: "Painted Bookmark", price: 150, quantity: 10 },
  { id: 2, name: "Vintage Letterpaper Set", price: 300, quantity: 5 },
  { id: 3, name: "Handmade Customized Envelope", price: 200, quantity: 15 },
  { id: 4, name: "Postcard Collection", price: 250, quantity: 8 },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const { addToCart } = useCart();

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0 && quantity <= product.quantity) {
      addToCart({ ...product, quantity });
      toast.success(`${quantity} ${product.name}(s) added to cart`);
      
      // Update the product quantity
      setProducts(products.map(p => 
        p.id === product.id ? { ...p, quantity: p.quantity - quantity } : p
      ));
    } else {
      toast.error("Invalid quantity");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹{product.price}</p>
              <p className="text-sm text-gray-500">Available: {product.quantity}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex items-center space-x-2 mb-2">
                <Input
                  type="number"
                  placeholder="Qty"
                  className="w-20"
                  min="1"
                  max={product.quantity}
                  onChange={(e) => {
                    const newProducts = [...products];
                    const index = newProducts.findIndex(p => p.id === product.id);
                    newProducts[index] = { ...newProducts[index], selectedQuantity: parseInt(e.target.value) || 0 };
                    setProducts(newProducts);
                  }}
                />
                <Button 
                  onClick={() => handleAddToCart(product, product.selectedQuantity)}
                  disabled={!product.selectedQuantity || product.selectedQuantity > product.quantity}
                >
                  Add to Cart
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
