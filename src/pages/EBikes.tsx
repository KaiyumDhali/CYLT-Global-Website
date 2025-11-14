import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ebike from "@/assets/ebike-modern.jpg";

const EBikes = () => {
  const navigate = useNavigate();
  
  const bikes = [
    {
      id: "1",
      name: "Urban Commuter X1",
      price: "$2,499",
      range: "80 miles",
      speed: "28 mph",
      features: ["Lightweight Frame", "Smart Display", "Hydraulic Brakes"],
      image: ebike,
    },
    {
      id: "2",
      name: "Mountain Explorer Pro",
      price: "$3,799",
      range: "100 miles",
      speed: "25 mph",
      features: ["Full Suspension", "All-Terrain Tires", "Powerful Motor"],
      image: ebike,
    },
    {
      id: "3",
      name: "City Cruiser Elite",
      price: "$1,999",
      range: "60 miles",
      speed: "20 mph",
      features: ["Compact Design", "USB Charging", "LED Lights"],
      image: ebike,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="5790072-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Electric <span className="bg-gradient-premium bg-clip-text text-transparent">Bikes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ride into the future with our premium electric bike collection
          </p>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((bike, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{bike.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{bike.price}</p>
                  
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">{bike.range}</Badge>
                    <Badge variant="outline">{bike.speed}</Badge>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {bike.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-gradient-premium hover:shadow-glow"
                    onClick={() => navigate(`/ebikes/${bike.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">E-Bike Technology Demo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the cutting-edge technology powering our electric bikes
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border"
              poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920"
            >
              <source src="https://cdn.pixabay.com/video/2023/05/09/161573-824990421_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EBikes;
