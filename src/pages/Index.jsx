import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const instagramImages = [
  "https://source.unsplash.com/random/800x600?nature+bookmark",
  "https://source.unsplash.com/random/800x600?eco+postcard",
  "https://source.unsplash.com/random/800x600?recycled+envelope",
  "https://source.unsplash.com/random/800x600?sustainable+paper",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-800">
      <header className="bg-gradient-to-r from-earth-700 to-earth-900 py-16 text-earth-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Shades of Spring</h1>
          <p className="text-xl">Handcrafted stationery with an earthly touch</p>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center">
            <Leaf className="mr-2" /> Our Creations
          </h2>
          <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CarouselContent>
              {instagramImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-earth-200 shadow-lg">
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
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center">
            <Leaf className="mr-2" /> Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Painted Bookmarks', 'Vintage Letterpapers', 'Handmade Envelopes'].map((product) => (
              <Card key={product} className="bg-earth-50 border-earth-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-earth-800">{product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-700">Discover our beautiful {product.toLowerCase()}.</p>
                  <Button asChild className="mt-4 bg-earth-700 hover:bg-earth-600 text-earth-100">
                    <Link to="/products">Shop Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center">
            <Leaf className="mr-2" /> Connect With Us
          </h2>
          <Button asChild variant="outline" className="border-earth-400 text-earth-700 hover:bg-earth-100">
            <a href="https://www.instagram.com/shades_ofspring" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" /> Follow our journey on Instagram
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
