import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import ebikeModern from "@/assets/ebike-modern.jpg";

const EBikeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const ebikes = [
    {
      id: "1",
      name: "Urban Commuter Pro",
      category: "City",
      price: "$2,499",
      image: ebikeModern,
      features: ["50 mile range", "350W motor", "Lightweight frame", "Smart display", "USB charging"],
      description: "Perfect for daily commuting with smart features and exceptional comfort. Navigate city streets with ease and style.",
      specs: {
        motor: "350W Brushless",
        battery: "48V 10Ah",
        range: "50 miles",
        topSpeed: "20 mph",
        weight: "45 lbs",
        charging: "4-6 hours"
      }
    },
    {
      id: "2",
      name: "Mountain Explorer",
      category: "Mountain",
      price: "$3,899",
      image: ebikeModern,
      features: ["80 mile range", "750W motor", "Full suspension", "All-terrain tires", "Hydraulic brakes"],
      description: "Conquer any terrain with powerful performance and advanced suspension. Built for adventure and extreme conditions.",
      specs: {
        motor: "750W Mid-Drive",
        battery: "48V 17Ah",
        range: "80 miles",
        topSpeed: "28 mph",
        weight: "55 lbs",
        charging: "6-8 hours"
      }
    },
    {
      id: "3",
      name: "Cargo Master",
      category: "Cargo",
      price: "$3,299",
      image: ebikeModern,
      features: ["60 mile range", "500W motor", "Heavy-duty frame", "200 lbs capacity", "Integrated locks"],
      description: "Designed for heavy loads and commercial use. Reliable, robust, and ready for any delivery challenge.",
      specs: {
        motor: "500W Rear Hub",
        battery: "48V 14Ah",
        range: "60 miles",
        topSpeed: "20 mph",
        weight: "65 lbs",
        charging: "5-7 hours"
      }
    },
    {
      id: "4",
      name: "Folding City",
      category: "Folding",
      price: "$1,799",
      image: ebikeModern,
      features: ["30 mile range", "250W motor", "Folds in seconds", "Portable design", "Integrated lights"],
      description: "Ultimate portability meets electric convenience. Perfect for mixed-mode commuting and limited storage spaces.",
      specs: {
        motor: "250W Hub Motor",
        battery: "36V 8Ah",
        range: "30 miles",
        topSpeed: "15 mph",
        weight: "35 lbs",
        charging: "3-4 hours"
      }
    }
  ];

  const ebike = ebikes.find(e => e.id === id);

  if (!ebike) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">E-Bike Not Found</h1>
          <Button onClick={() => navigate("/ebikes")}>Back to E-Bikes</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ebike.image}
            alt={ebike.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="outline"
            onClick={() => navigate("/ebikes")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to E-Bikes
          </Button>
          <Badge className="mb-4 bg-gradient-premium">{ebike.category}</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-fade-in">
            {ebike.name}
          </h1>
          <p className="text-3xl font-bold text-primary mb-6">{ebike.price}</p>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            {ebike.description}
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(ebike.specs).map(([key, value]) => (
              <Card key={key} className="p-6 hover:border-primary/50 transition-all">
                <h3 className="text-sm uppercase text-muted-foreground mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-2xl font-bold">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ebike.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[ebike.image, ebike.image, ebike.image].map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border group cursor-pointer">
                <img 
                  src={img} 
                  alt={`${ebike.name} view ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Experience the Ride</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the {ebike.name} in action and discover its capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster={ebike.image}
              >
                <source src="https://cdn.pixabay.com/video/2022/04/18/114827-700850533_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">City Riding</h3>
            </div>
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster={ebike.image}
              >
                <source src="https://cdn.pixabay.com/video/2021/09/18/89662-607866059_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Features Overview</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Detailed Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Battery & Range</h3>
              <p className="text-muted-foreground mb-4">
                Powered by high-capacity lithium-ion battery technology, the {ebike.name} offers exceptional range and reliability. 
                Smart battery management system optimizes power delivery for maximum efficiency.
              </p>
              <p className="text-muted-foreground">
                Quick charging capability gets you back on the road faster. Battery health monitoring ensures long-term performance 
                and peace of mind.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Motor & Performance</h3>
              <p className="text-muted-foreground mb-4">
                Advanced brushless motor delivers smooth, consistent power with minimal maintenance requirements. Multiple assist 
                levels let you customize your riding experience from eco-friendly cruising to maximum performance.
              </p>
              <p className="text-muted-foreground">
                Regenerative braking helps extend battery life while providing additional stopping power. Intelligent power 
                management adapts to terrain and riding conditions.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Comfort & Design</h3>
              <p className="text-muted-foreground mb-4">
                Ergonomically designed frame ensures comfortable riding position for extended journeys. Premium components including 
                suspension, saddle, and grips work together to reduce fatigue.
              </p>
              <p className="text-muted-foreground">
                Integrated lighting system provides excellent visibility day and night. Sleek, modern design turns heads while 
                maintaining practical functionality.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Warranty & Support</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive 2-year warranty on frame and electrical components. 1-year warranty on battery with optional extended 
                coverage available. Free first service included.
              </p>
              <p className="text-muted-foreground">
                Nationwide service network with certified technicians. 24/7 customer support and mobile app for tracking, 
                diagnostics, and ride statistics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Riding Tips & Maintenance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3">Getting Started</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Charge battery fully before first ride</li>
                <li>• Adjust seat and handlebar height</li>
                <li>• Familiarize with assist levels</li>
                <li>• Check tire pressure regularly</li>
                <li>• Test brakes before each ride</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3">Regular Maintenance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clean bike after wet conditions</li>
                <li>• Lubricate chain every 100 miles</li>
                <li>• Check brake pads monthly</li>
                <li>• Store in dry, cool location</li>
                <li>• Update firmware regularly</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3">Safety Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always wear a helmet</li>
                <li>• Use lights in low visibility</li>
                <li>• Follow local traffic laws</li>
                <li>• Keep both hands on handlebar</li>
                <li>• Stay alert and ride defensively</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EBikeDetail;
