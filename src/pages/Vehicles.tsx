import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import suvElectric from "@/assets/suv-electric1.jpg";
import sedanRed from "@/assets/sedan-red1.jpg";

const Vehicles = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const vehicles = [
    {
      id: 1,
      name: "LuxeDrive EV-X",
      type: "suv",
      category: "Electric",
      price: "$89,990",
      image: suvElectric,
      features: ["450 mile range", "0-60 in 3.5s", "Autopilot"],
    },
    {
      id: 2,
      name: "SportMax GT",
      type: "sports",
      category: "Performance",
      price: "$125,000",
      image: sedanRed,
      features: ["V8 Twin-Turbo", "0-60 in 2.8s", "Track Mode"],
    },
    {
      id: 3,
      name: "Elegance S-Class",
      type: "sedan",
      category: "Luxury",
      price: "$95,500",
      image: sedanRed,
      features: ["Massage Seats", "Panoramic Roof", "Premium Audio"],
    },
    {
      id: 4,
      name: "Urban EV Compact",
      type: "sedan",
      category: "Electric",
      price: "$45,900",
      image: suvElectric,
      features: ["300 mile range", "Fast Charging", "Compact Design"],
    },
  ];

  const filters = [
    { id: "all", label: "All Vehicles" },
    { id: "suv", label: "SUV" },
    { id: "sedan", label: "Sedan" },
    { id: "sports", label: "Sports" },
  ];

  const filteredVehicles = filter === "all" 
    ? vehicles 
    : vehicles.filter(v => v.type === filter);

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
            <source src="23232-333604632_small.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-premium bg-clip-text text-transparent">Fleet</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium vehicles engineered for performance and luxury
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <Button
                key={f.id}
                onClick={() => setFilter(f.id)}
                variant={filter === f.id ? "default" : "outline"}
                className={filter === f.id ? "bg-gradient-premium" : ""}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-gradient-premium">
                    {vehicle.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{vehicle.price}</p>
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-premium hover:shadow-glow"
                    onClick={() => navigate(`/vehicles/${vehicle.id}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Vehicle Features Showcase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the luxury and performance of our premium vehicles
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border"
              poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920"
            >
              <source src="https://cdn.pixabay.com/video/2023/07/28/173820-850696932_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="133703-757782432_small.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-premium bg-clip-text text-transparent">Fleet</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium vehicles engineered for performance and luxury
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Vehicles;
