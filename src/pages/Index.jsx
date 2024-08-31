import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <header className="bg-stone-200 py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Shades of Spring</h1>
          <p className="text-xl text-stone-600">Handcrafted stationery with an earthly touch</p>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Painted Bookmarks', 'Vintage Letterpapers', 'Handmade Envelopes'].map((product) => (
              <Card key={product}>
                <CardHeader>
                  <CardTitle>{product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Discover our beautiful {product.toLowerCase()}.</p>
                  <Button asChild className="mt-4">
                    <Link to="/products">Shop Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-6">Connect With Us</h2>
          <Button asChild variant="outline">
            <a href="https://www.instagram.com/shades_ofspring" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" /> Follow us on Instagram
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
