import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxedrive.com", "support@luxedrive.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Luxury Drive", "Premium District, Global City"],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+1 (234) 567-892"],
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
            <source src="14600023_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Get in <span className="bg-gradient-premium bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to answer your questions and help you find your perfect vehicle
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-heading font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="+1 (234) 567-890" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-gradient-premium hover:shadow-glow" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-premium rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, dIdx) => (
                        <p key={dIdx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="p-4 h-64 bg-muted/20">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Map location placeholder
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Visit Our Showroom</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art facility
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border"
              poster="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920"
            >
              <source src="https://cdn.pixabay.com/video/2022/03/17/111215-689060125_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
