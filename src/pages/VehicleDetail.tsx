import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import suvElectric from "@/assets/suv-electric1.jpg";
import sedanRed from "@/assets/sedan-red1.jpg";

const VehicleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would fetch from an API
  const vehicles = [
    {
      id: "1",
      name: "LuxeDrive EV-X",
      type: "suv",
      category: "Electric",
      price: "$89,990",
      image: suvElectric,
      features: ["450 mile range", "0-60 in 3.5s", "Autopilot", "Premium Sound System", "Panoramic Roof"],
      description: "Experience the future of electric mobility with the LuxeDrive EV-X. This premium electric SUV combines cutting-edge technology with luxurious comfort.",
      specs: {
        power: "750 HP",
        torque: "800 lb-ft",
        topSpeed: "155 mph",
        charging: "15 minutes to 80%",
        battery: "120 kWh",
        seats: "7 passengers"
      }
    },
    {
      id: "2",
      name: "SportMax GT",
      type: "sports",
      category: "Performance",
      price: "$125,000",
      image: sedanRed,
      features: ["V8 Twin-Turbo", "0-60 in 2.8s", "Track Mode", "Carbon Fiber Body", "Launch Control"],
      description: "Pure performance meets stunning design. The SportMax GT delivers an exhilarating driving experience with race-inspired engineering.",
      specs: {
        power: "650 HP",
        torque: "600 lb-ft",
        topSpeed: "205 mph",
        engine: "4.0L V8 Twin-Turbo",
        transmission: "8-speed DCT",
        seats: "4 passengers"
      }
    },
    {
      id: "3",
      name: "Elegance S-Class",
      type: "sedan",
      category: "Luxury",
      price: "$95,500",
      image: sedanRed,
      features: ["Massage Seats", "Panoramic Roof", "Premium Audio", "Air Suspension", "Executive Rear"],
      description: "The pinnacle of luxury and comfort. Every detail of the Elegance S-Class is crafted to provide an unparalleled driving experience.",
      specs: {
        power: "480 HP",
        torque: "520 lb-ft",
        topSpeed: "155 mph",
        engine: "3.0L Inline-6 Turbo",
        transmission: "9-speed automatic",
        seats: "5 passengers"
      }
    },
    {
      id: "4",
      name: "Urban EV Compact",
      type: "sedan",
      category: "Electric",
      price: "$45,900",
      image: suvElectric,
      features: ["300 mile range", "Fast Charging", "Compact Design", "Smart Navigation", "Eco Mode"],
      description: "Perfect for city living, the Urban EV Compact offers efficiency and style in a compact package designed for modern mobility.",
      specs: {
        power: "200 HP",
        torque: "250 lb-ft",
        topSpeed: "120 mph",
        charging: "30 minutes to 80%",
        battery: "70 kWh",
        seats: "5 passengers"
      }
    }
  ];

  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Vehicle Not Found</h1>
          <Button onClick={() => navigate("/vehicles")}>Back to Vehicles</Button>
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
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="outline"
            onClick={() => navigate("/vehicles")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Vehicles
          </Button>
          <Badge className="mb-4 bg-gradient-premium">{vehicle.category}</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-fade-in">
            {vehicle.name}
          </h1>
          <p className="text-3xl font-bold text-primary mb-6">{vehicle.price}</p>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            {vehicle.description}
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
            {Object.entries(vehicle.specs).map(([key, value]) => (
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
            Premium Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vehicle.features.map((feature, idx) => (
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
            {[vehicle.image, vehicle.image, vehicle.image].map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border group cursor-pointer">
                <img 
                  src={img} 
                  alt={`${vehicle.name} view ${idx + 1}`}
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
            <h2 className="text-4xl font-heading font-bold mb-4">See It In Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch the {vehicle.name} in action and experience its capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster={vehicle.image}
              >
                <source src="https://cdn.pixabay.com/video/2023/07/28/173820-850696932_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Exterior Showcase</h3>
            </div>
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster={vehicle.image}
              >
                <source src="https://cdn.pixabay.com/video/2023/08/24/177582-858211673_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Interior Features</h3>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border mb-4"
              poster={vehicle.image}
            >
              <source src="https://cdn.pixabay.com/video/2022/12/10/143388-780083468_large.mp4" type="video/mp4" />
            </video>
            <h3 className="text-xl font-heading font-bold text-center">Performance Test</h3>
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
              <h3 className="text-2xl font-heading font-bold mb-4">Performance & Handling</h3>
              <p className="text-muted-foreground mb-4">
                The {vehicle.name} delivers exceptional performance with its advanced powertrain and precision-tuned suspension. 
                Every drive is an experience of pure automotive excellence, combining raw power with refined control.
              </p>
              <p className="text-muted-foreground">
                Advanced aerodynamics and lightweight construction ensure optimal efficiency without compromising on power delivery.
                The intelligent all-wheel drive system adapts to any road condition, providing confidence and control in all situations.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Interior & Comfort</h3>
              <p className="text-muted-foreground mb-4">
                Step inside a cabin designed for luxury and functionality. Premium materials, meticulous craftsmanship, and 
                cutting-edge technology create an environment that's both sophisticated and intuitive.
              </p>
              <p className="text-muted-foreground">
                Advanced climate control, massage seats, and ambient lighting systems work in harmony to create the perfect 
                atmosphere for every journey. The spacious interior ensures comfort for all passengers.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Safety & Technology</h3>
              <p className="text-muted-foreground mb-4">
                Equipped with the latest safety technologies including adaptive cruise control, lane keeping assist, blind spot 
                monitoring, and automatic emergency braking. Multiple airbags and reinforced safety cell provide maximum protection.
              </p>
              <p className="text-muted-foreground">
                Advanced driver assistance systems use radar, cameras, and sensors to monitor your surroundings and help prevent 
                accidents before they happen.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Warranty & Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive warranty coverage: 4 years/50,000 miles bumper-to-bumper, 8 years/100,000 miles powertrain warranty. 
                Complimentary scheduled maintenance for the first 3 years or 36,000 miles.
              </p>
              <p className="text-muted-foreground">
                24/7 roadside assistance, free loaner vehicles during service, and access to our nationwide service network ensure 
                peace of mind ownership experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Compare Trims
          </h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Base</th>
                    <th className="p-4 text-center">Premium</th>
                    <th className="p-4 text-center">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Power", base: "300 HP", premium: "450 HP", elite: "750 HP" },
                    { feature: "Drive Type", base: "RWD", premium: "AWD", elite: "AWD" },
                    { feature: "Premium Audio", base: "—", premium: "✓", elite: "✓" },
                    { feature: "Adaptive Suspension", base: "—", premium: "—", elite: "✓" },
                    { feature: "Autopilot", base: "—", premium: "✓", elite: "✓" },
                    { feature: "Massage Seats", base: "—", premium: "—", elite: "✓" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-border">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.base}</td>
                      <td className="p-4 text-center">{row.premium}</td>
                      <td className="p-4 text-center text-primary font-bold">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default VehicleDetail;
