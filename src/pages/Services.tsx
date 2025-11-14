import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Sparkles, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Expert care for your vehicle with certified technicians and genuine parts",
      features: ["Oil Changes", "Brake Service", "Engine Diagnostics", "Tire Rotation"],
    },
    {
      icon: Sparkles,
      title: "Detailing & Cleaning",
      description: "Premium detailing services to keep your vehicle looking showroom new",
      features: ["Interior Detailing", "Exterior Polish", "Ceramic Coating", "Paint Protection"],
    },
    {
      icon: Shield,
      title: "Insurance & Warranty",
      description: "Comprehensive coverage plans tailored to your needs",
      features: ["Extended Warranty", "Gap Insurance", "Collision Coverage", "24/7 Support"],
    },
    {
      icon: Headphones,
      title: "After-Sales Support",
      description: "Dedicated customer service for a seamless ownership experience",
      features: ["Roadside Assistance", "Loaner Vehicles", "Parts Delivery", "Service Reminders"],
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
            <source src="197898-905833761_small.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-premium bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care and support for your luxury vehicle
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
              >
                <div className="w-16 h-16 bg-gradient-premium rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Why Choose Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-8 text-center hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-heading font-bold mb-3">Certified Experts</h3>
              <p className="text-muted-foreground">Our technicians are factory-trained and certified with years of experience in luxury vehicle maintenance.</p>
            </Card>
            <Card className="p-8 text-center hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-heading font-bold mb-3">Fast Service</h3>
              <p className="text-muted-foreground">We value your time. Most services completed same-day with express options available.</p>
            </Card>
            <Card className="p-8 text-center hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-heading font-bold mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">All work backed by comprehensive warranty and satisfaction guarantee.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Our Service Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Schedule", desc: "Book your service appointment online or by phone" },
              { step: "02", title: "Drop-off", desc: "Bring your vehicle to our state-of-the-art facility" },
              { step: "03", title: "Service", desc: "Expert technicians perform thorough inspection and service" },
              { step: "04", title: "Quality Check", desc: "Multiple quality checks ensure perfect results" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Videos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Watch Our Services in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we deliver exceptional service and care for your vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920"
              >
                <source src="https://cdn.pixabay.com/video/2022/04/21/115448-701251019_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Professional Maintenance</h3>
            </div>
            <div>
              <video
                controls
                className="w-full rounded-lg shadow-2xl border border-border mb-4"
                poster="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1920"
              >
                <source src="https://cdn.pixabay.com/video/2023/04/21/159867-820030992_large.mp4" type="video/mp4" />
              </video>
              <h3 className="text-xl font-heading font-bold">Detailing Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <p className="text-lg text-muted-foreground mb-6">
                We believe in transparent, fair pricing with no hidden fees. All our services include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Free multi-point inspection",
                  "Complimentary car wash",
                  "Free loaner vehicle (for major services)",
                  "Lifetime warranty on select services",
                  "Price match guarantee",
                  "Flexible payment options"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground">
                Contact us for a detailed quote tailored to your vehicle's needs
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
