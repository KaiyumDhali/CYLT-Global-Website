import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const SpareParts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = [
    "Exterior",
    "Interior",
    "Electronics",
    "Highvoltage components",
    "Charging",
    "Suspension",
    "Accessoires",
  ];

  const parts = [
    {
      id: "1",
      name: "Premium Brake Pads Set",
      category: "Brake Systems",
      price: "$149",
      stock: "In Stock",
    },
    {
      id: "2",
      name: "LED Headlight Assembly",
      category: "Electrical",
      price: "$299",
      stock: "In Stock",
    },
    {
      id: "3",
      name: "Performance Air Filter",
      category: "Engine Parts",
      price: "$89",
      stock: "Limited",
    },
    {
      id: "4",
      name: "Carbon Fiber Side Mirror",
      category: "Body Parts",
      price: "$249",
      stock: "In Stock",
    },
    {
      id: "5",
      name: "Sport Suspension Kit",
      category: "Suspension",
      price: "$899",
      stock: "In Stock",
    },
    {
      id: "6",
      name: "Luxury Seat Covers",
      category: "Interior",
      price: "$199",
      stock: "In Stock",
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
            <source src="8987215-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-center animate-fade-in">
            Spare <span className="bg-gradient-premium bg-clip-text text-transparent">Parts</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Premium quality parts for your luxury vehicle
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button key={cat} variant="outline" className="hover:bg-primary/10">
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parts.map((part, idx) => (
              <Card key={idx} className="p-6 hover:border-primary/50 transition-all hover:shadow-glow">
                <Badge className="mb-3" variant="outline">{part.category}</Badge>
                <h3 className="text-xl font-heading font-bold mb-2">{part.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">{part.price}</span>
                  <Badge className={part.stock === "In Stock" ? "bg-green-500/20 text-green-500" : "bg-accent/20"}>
                    {part.stock}
                  </Badge>
                </div>
                <Button 
                  className="w-full bg-gradient-premium hover:shadow-glow"
                  onClick={() => navigate(`/spare-parts/${part.id}`)}
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Parts Installation Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to properly install and maintain your spare parts
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border"
              poster="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920"
            >
              <source src="https://cdn.pixabay.com/video/2022/10/31/137411-767733664_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SpareParts;
