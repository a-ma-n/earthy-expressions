import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const instagramImages = [
  "https://source.unsplash.com/random/800x600?bookmark",
  "https://source.unsplash.com/random/800x600?postcard",
  "https://source.unsplash.com/random/800x600?envelope",
  "https://source.unsplash.com/random/800x600?vintage+paper",
];

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
          <h2 className="text-3xl font-semibold mb-6">Our Creations</h2>
          <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CarouselContent>
              {instagramImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={src} alt={`Product ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Painted Bookmarks', 'Vintage Letterpapers', 'Handmade Envelopes'].map((product) => (
              <Card key={product} className="bg-stone-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="text-stone-800">{product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">Discover our beautiful {product.toLowerCase()}.</p>
                  <Button asChild className="mt-4 bg-stone-700 hover:bg-stone-600">
                    <Link to="/products">Shop Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-6">Connect With Us</h2>
          <Button asChild variant="outline" className="border-stone-400 text-stone-700 hover:bg-stone-200">
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
