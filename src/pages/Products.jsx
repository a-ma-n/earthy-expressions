import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const products = [
  { id: 1, name: "Painted Bookmark", price: 150 },
  { id: 2, name: "Vintage Letterpaper Set", price: 300 },
  { id: 3, name: "Handmade Customized Envelope", price: 200 },
  { id: 4, name: "Postcard Collection", price: 250 },
];

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
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
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
