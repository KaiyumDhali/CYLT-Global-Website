import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { Globe, Users, Award, TrendingUp,ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const About = () => {
  const stats = [
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Users, value: "100K+", label: "Happy Customers" },
    { icon: Award, value: "25+", label: "Industry Awards" },
    { icon: TrendingUp, value: "15", label: "Years of Excellence" },
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
            <source src="14582374_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
            About <span className="bg-gradient-premium bg-clip-text text-transparent">CYLT EMobility-Powerhouse</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering automotive excellence since 2009, we've redefined what luxury means on wheels
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Technology Showcase */}
      <section className="py-20 px-4 relative overflow-hidden">
       
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden h-[500px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="13490106_3840_2160_24fps.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Unmatched EV<span className="bg-gradient-premium bg-clip-text text-transparent"> Repair & Technical Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our team of master technicians specializes in diagnosing and repairing all major EV systems, encompassing high-voltage batteries, powertrains, and advanced driver-assistance systems (ADAS). We don’t merely fix problems; we provide expert solutions that restore peak performance and ensure driver safety.
              </p>
              
            </div>
          </div>
        </div>
        
      </section>

     {/* Technology Showcase */}
<section className="py-20 px-4 relative overflow-hidden">
  <div className="container mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* ✅ Text (Left) */}
      <div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Trusted Spare{" "}
          <span className="bg-gradient-premium bg-clip-text text-transparent">
            Parts Supply
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-6">
          As a leading global supplier of premium EV spare parts, we offer a diverse inventory of both brand-new, OEM-quality parts and meticulously tested, certified refurbished components. Every part in our catalog undergoes rigorous testing and validation to meet stringent performance and safety standards, providing our customers with reliability and significant cost savings.
        </p>
      </div>

      {/* ✅ Video (Right) */}
      <div className="relative rounded-xl overflow-hidden h-[500px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="20151336-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</section>
      {/* Story */}
      <section className="py-20 px-4">
        <div className=" mx-auto max-w-12xl">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, LuxeDrive Motors began with a simple vision: to create vehicles that 
                don't just transport people, but inspire them. Our journey started in a small workshop 
                with a team of passionate engineers and designers who shared a dream.
              </p>
              <p>
                Today, we're a global automotive leader, operating in over 50 countries and serving 
                hundreds of thousands of satisfied customers. Our commitment to innovation, quality, 
                and sustainability has earned us 25+ industry awards and recognition from automotive 
                experts worldwide.
              </p>
              <h3 className="text-2xl font-heading font-bold text-foreground pt-4">Our Mission</h3>
              <p>
                Our mission is to accelerate the adoption of electric mobility by being the definitive destination for EV owners. We provide unparalleled expertise in repair, a vast inventory of new and rigorously tested refurbished parts, and a curated selection of brand-new and certified pre-owned electric vehicles. We are committed to extending the life of every EV, reducing electronic waste, and ensuring our customers drive with confidence and sustainability.
              </p>
              <h3 className="text-2xl font-heading font-bold text-foreground pt-4">Our Vision</h3>
              <p>
                To empower a confident transition to electric mobility for all, by ensuring every EV owner has access to reliable, affordable, and sustainable solutions for repair, parts, and ownership.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our story of excellence and innovation in the automotive industry
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border"
              poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920"
            >
              <source src="https://cdn.pixabay.com/video/2021/08/10/84961-587608093_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
