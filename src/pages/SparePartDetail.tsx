import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { useState } from "react";

const SparePartDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const parts = [
    {
      id: "1",
      name: "Premium Brake Pads Set",
      category: "Brake Systems",
      price: "$149",
      stock: "In Stock",
      features: ["Ceramic compound", "Low dust formula", "Noise-free operation", "Extended lifespan", "OEM quality"],
      description: "High-performance ceramic brake pads designed for optimal stopping power and durability. Perfect for both daily driving and performance applications.",
      specs: {
        material: "Ceramic Composite",
        warranty: "2 years / 50,000 miles",
        compatibility: "Universal fit for most vehicles",
        installation: "Professional recommended",
        includes: "Front and rear pads"
      }
    },
    {
      id: "2",
      name: "LED Headlight Assembly",
      category: "Electrical",
      price: "$299",
      stock: "In Stock",
      features: ["6000K bright white", "Plug and play", "DOT approved", "Waterproof IP67", "5-year warranty"],
      description: "Premium LED headlight assembly with superior brightness and energy efficiency. Engineered for maximum visibility and style.",
      specs: {
        brightness: "6000 lumens",
        colorTemp: "6000K",
        power: "35W per bulb",
        lifespan: "50,000 hours",
        voltage: "12V DC"
      }
    },
    {
      id: "3",
      name: "Performance Air Filter",
      category: "Engine Parts",
      price: "$89",
      stock: "Limited",
      features: ["High flow design", "Reusable and washable", "Increases horsepower", "Better fuel economy", "Million mile warranty"],
      description: "High-flow performance air filter that improves engine efficiency and power. Washable and reusable for lifetime use.",
      specs: {
        material: "Cotton gauze",
        airflow: "+50% over stock",
        filtration: "99.9% efficient",
        warranty: "Lifetime",
        maintenance: "Clean every 50,000 miles"
      }
    },
    {
      id: "4",
      name: "Carbon Fiber Side Mirror",
      category: "Body Parts",
      price: "$249",
      stock: "In Stock",
      features: ["Genuine carbon fiber", "Aerodynamic design", "Direct replacement", "UV protected finish", "Lightweight construction"],
      description: "Premium carbon fiber side mirror covers that add sporty styling while reducing weight. Perfect for performance enthusiasts.",
      specs: {
        material: "3K Carbon Fiber",
        finish: "Glossy UV clear coat",
        weight: "60% lighter than stock",
        installation: "15 minutes",
        compatibility: "Model-specific fit"
      }
    },
    {
      id: "5",
      name: "Sport Suspension Kit",
      category: "Suspension",
      price: "$899",
      stock: "In Stock",
      features: ["Adjustable height", "Improved handling", "Track-tested", "Street legal", "Complete kit"],
      description: "Complete sport suspension kit with adjustable coilovers for the perfect balance between comfort and performance.",
      specs: {
        adjustment: "24-way dampening",
        drop: "1-3 inches",
        springRate: "Progressive",
        warranty: "3 years",
        includes: "All mounting hardware"
      }
    },
    {
      id: "6",
      name: "Luxury Seat Covers",
      category: "Interior",
      price: "$199",
      stock: "In Stock",
      features: ["Premium leather", "Custom fit", "Easy installation", "Climate control compatible", "Full set"],
      description: "Luxurious leather seat covers that protect and enhance your vehicle's interior. Designed for perfect fit and maximum comfort.",
      specs: {
        material: "Genuine leather",
        colors: "Black, Tan, Gray",
        seats: "Front and rear",
        installation: "No tools required",
        cleaning: "Easy wipe maintenance"
      }
    }
  ];

  const part = parts.find(p => p.id === id);

  if (!part) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Part Not Found</h1>
          <Button onClick={() => navigate("/spare-parts")}>Back to Spare Parts</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <Button
            variant="outline"
            onClick={() => navigate("/spare-parts")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Spare Parts
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-muted/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-6xl font-heading font-bold mb-4">{part.name}</h3>
                  <Badge className="text-lg py-2 px-4">{part.category}</Badge>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-gradient-premium">{part.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {part.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {part.description}
              </p>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">{part.price}</span>
                <Badge className={part.stock === "In Stock" ? "bg-green-500/20 text-green-500" : "bg-accent/20"}>
                  {part.stock}
                </Badge>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>


              {/* Features List */}
              <div className="border-t border-border pt-6">
                <h3 className="font-heading font-bold text-xl mb-4">Key Features</h3>
                <div className="space-y-3">
                  {part.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(part.specs).map(([key, value]) => (
              <Card key={key} className="p-6 hover:border-primary/50 transition-all">
                <h3 className="text-sm uppercase text-muted-foreground mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-lg font-bold">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Product Gallery
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Array(4).fill(null).map((_, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted/50 group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold opacity-20">{part.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Maintenance Videos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Installation & Maintenance Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to properly install and maintain your {part.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920"
              >
                <source src="https://cdn.pixabay.com/video/2022/10/31/137411-767733664_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Installation Tutorial</h3>
            </div>
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1920"
              >
                <source src="https://cdn.pixabay.com/video/2024/01/28/198712-908178033_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Maintenance Tips</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Product Details & Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Quality & Performance</h3>
              <p className="text-muted-foreground mb-4">
                Our {part.name} is manufactured to the highest standards using premium materials and advanced manufacturing 
                processes. Each unit undergoes rigorous quality control testing to ensure it meets or exceeds OEM specifications.
              </p>
              <p className="text-muted-foreground">
                Engineered for optimal performance and longevity, this part delivers consistent results under all operating 
                conditions. Whether for daily driving or demanding applications, you can trust in its reliability.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Installation & Compatibility</h3>
              <p className="text-muted-foreground mb-4">
                Designed as a direct replacement for factory parts, installation is straightforward with basic tools. Detailed 
                instructions and video guides ensure successful installation even for DIY enthusiasts.
              </p>
              <p className="text-muted-foreground">
                Compatible with a wide range of vehicle makes and models. Check our compatibility chart or contact our experts 
                to confirm fitment for your specific vehicle before purchasing.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Warranty & Support</h3>
              <p className="text-muted-foreground mb-4">
                Backed by comprehensive warranty coverage and supported by our knowledgeable customer service team. We stand 
                behind every product we sell with hassle-free returns and exchanges.
              </p>
              <p className="text-muted-foreground">
                Technical support available to answer installation questions and troubleshooting. Access to online resources 
                including installation videos, technical bulletins, and maintenance schedules.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Value & Savings</h3>
              <p className="text-muted-foreground mb-4">
                Premium quality at competitive prices. By choosing our parts, you get dealership-level quality without the 
                premium price tag. Volume discounts available for bulk orders.
              </p>
              <p className="text-muted-foreground">
                Extended lifespan and superior performance mean fewer replacements and lower total cost of ownership. Invest 
                in quality once rather than replacing cheap parts repeatedly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Compatibility & Fitment */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Compatibility Guide
          </h2>
          <Card className="p-8">
            <h3 className="text-xl font-heading font-bold mb-6">Compatible Vehicles</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                "2020-2025 Models",
                "Multiple Makes Supported",
                "Universal Fitment Options",
                "OEM Replacement",
                "Performance Upgrade",
                "Plug & Play Installation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center">
              Not sure if this part fits your vehicle? Contact our technical support team for assistance with fitment verification.
            </p>
          </Card>
        </div>
      </section>

      {/* Installation Tips */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Installation Tips & Tools Required
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Required Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Socket wrench set</li>
                <li>• Torque wrench</li>
                <li>• Jack and jack stands</li>
                <li>• Basic hand tools</li>
                <li>• Safety equipment</li>
                <li>• Shop manual (recommended)</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Installation Steps</h3>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Review installation manual thoroughly</li>
                <li>Prepare workspace and gather tools</li>
                <li>Remove old component safely</li>
                <li>Clean mounting surfaces</li>
                <li>Install new part per instructions</li>
                <li>Torque bolts to specification</li>
                <li>Test functionality before closing</li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SparePartDetail;
