import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Battery, Zap, Award, Users, Shield,ArrowRight} from "lucide-react";
import evTraining from "@/assets/ev-training.jpg";
import heroCar from "@/assets/hero-car.png";
import suvElectric from "@/assets/suv-electric.png";
import sedanRed from "@/assets/sedan-red.png";
const EVTraining = () => {
  
  const courses = [
    {
      title: "Structural principle and maintenance of Chinese new energy vehicles",
      duration: "4 weeks",
      level: "Beginner",
      price: "$1,299",
      description: "Learn the basics of electric vehicle technology and maintenance",
    },
    {
      title: "Structural principle and maintenance of Tesla cars",
      duration: "6 weeks",
      level: "Advanced",
      price: "$2,499",
      description: "Master battery diagnostics, repair, and safety procedures",
    },
    {
      title: "Fault detection and maintenance of commercial new energy vehicles",
      duration: "3 weeks",
      level: "Intermediate",
      price: "$1,799",
      description: "Install and maintain EV charging stations and systems",
    },
    {
      title: "Teach you to analyze the fault of the power battery",
      duration: "3 weeks",
      level: "Intermediate",
      price: "$1,799",
      description: "Install and maintain EV charging stations and systems",
    },
    {
      title: "Power battery evaluation, identification and recycling",
      duration: "3 weeks",
      level: "Intermediate",
      price: "$1,799",
      description: "Install and maintain EV charging stations and systems",
    },
    {
      title: "Diagram of electric compressor maintenance technology",
      duration: "3 weeks",
      level: "Intermediate",
      price: "$1,799",
      description: "Install and maintain EV charging stations and systems",
    },
  ];
const vehicles = [
    {
      name: "LuxeDrive EV-X",
      category: "Electric SUV",
      price: "From $89,990",
      image: suvElectric,
    },
    {
      name: "SportMax GT",
      category: "Performance Sedan",
      price: "From $125,000",
      image: sedanRed,
    },
    {
      name: "LuxeDrive E7",
      category: "Luxury Sedan",
      price: "From $109,000",
      image: heroCar,
    },
    {
      name: "Urban X",
      category: "Compact Electric",
      price: "From $59,000",
      image: suvElectric,
    },
  ];
  const benefits = [
    { icon: Battery, title: "Hands-On Training", description: "Work with real EV components" },
    { icon: Zap, title: "Certified Instructors", description: "Learn from industry experts" },
    { icon: Award, title: "Industry Certification", description: "Recognized globally" },
    { icon: Users, title: "Career Support", description: "Job placement assistance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="23232-333604632_small.mp4" type="video/mp4" />
            <img src={evTraining} alt="EV Training" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="bg-gradient-premium bg-clip-text text-transparent">
                  EV Technician
                </span>
                <br />Training Programs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master the future of automotive technology. Become a certified electric vehicle specialist.
              </p>
              <Button size="lg" className="bg-gradient-premium hover:shadow-glow">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>
{/* Technology Showcase */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="1572321-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
        </div>
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
                <source src="1572321-uhd_2560_1440_24fps.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Electric Vehicle <span className="bg-gradient-premium bg-clip-text text-transparent">maintenance skills training</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Committed to the integration of "teaching, research, repair and innovation" and the construction of a perfect national after-sales service system.To provide perfect after-sales service and professional training for safety drivers and technical personnel for new energy vehicles such as network car operating companies, logistics city distribution companies and public transportation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AI-Powered Assistance</h4>
                    <p className="text-muted-foreground">Intelligent driving aids that predict and protect</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Connected Experience</h4>
                    <p className="text-muted-foreground">Seamless integration with your digital life</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Autonomous Capabilities</h4>
                    <p className="text-muted-foreground">Advanced self-driving features for ultimate comfort</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-gradient-premium hover:shadow-glow">
                Explore Technology
              </Button>
            </div>
          </div>
        </div>
      </section>
     {/* Technology Showcase */}
<section className="py-20 px-4 relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-20"
    >
      <source src="3066433-hd_1366_720_24fps.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="container mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* ✅ Text (Left) */}
      <div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Skills Appraisal {" "}
          <span className="bg-gradient-premium bg-clip-text text-transparent">
            Test Center
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-6">
          Establish the first new energy vehicle maintenance skills appraisal center in Hunan, Changsha, China.
        </p>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <ArrowRight className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold mb-1">AI-Powered Assistance</h4>
              <p className="text-muted-foreground">
                Intelligent driving aids that predict and protect
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <ArrowRight className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Connected Experience</h4>
              <p className="text-muted-foreground">
                Seamless integration with your digital life
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <ArrowRight className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Autonomous Capabilities</h4>
              <p className="text-muted-foreground">
                Advanced self-driving features for ultimate comfort
              </p>
            </div>
          </li>
        </ul>

        <Button size="lg" className="bg-gradient-premium hover:shadow-glow">
          Explore Technology
        </Button>
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
          <source src="3066433-hd_1366_720_24fps.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Why Choose Our Training?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 text-center hover:border-primary/50 transition-all">
                <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our <span className="bg-gradient-premium bg-clip-text text-transparent">Courses</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Card key={idx} className="p-6 hover:border-primary/50 transition-all hover:shadow-glow">
                <Badge className="mb-4 bg-gradient-premium">{course.level}</Badge>
                <h3 className="text-2xl font-heading font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">Duration: {course.duration}</span>
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>
                <Button className="w-full bg-gradient-premium hover:shadow-glow">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our  <span className="bg-gradient-premium bg-clip-text text-transparent">Training Moments</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {vehicles.map((vehicle, idx) => (
              <Card
                key={idx}
                className="overflow-hidden group hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                 
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
            <h2 className="text-4xl font-heading font-bold mb-4">Training Program Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what makes our EV technician training program industry-leading
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-2xl border border-border"
              poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920"
            >
              <source src="https://cdn.pixabay.com/video/2022/09/09/131269-749073437_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EVTraining;
