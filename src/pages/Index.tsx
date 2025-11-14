import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { useEffect, useState, Suspense, lazy } from "react";
import { fetchWithFallback, API_BASE } from "@/lib/api";
import { FeatureIcon } from "@/components/home/Icon";
import SmartVideo from "@/components/shared/SmartVideo";
import type { HomePayload } from "@/types/home";

// Lazy sections
const VideoSection = lazy(() => import("@/components/home/VideoSection"));
const TechnologySection = lazy(() => import("@/components/home/TechnologySection"));
const ManufacturingSection = lazy(() => import("@/components/home/ManufacturingSection"));

export default function Index() {
  const [data, setData] = useState<HomePayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWithFallback<HomePayload>("/api/homepage", "home.json")
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="text-center py-20 text-lg">Loading homepage...</div>;
  if (!data)
    return <div className="text-center py-20 text-red-500">Failed to load home content</div>;

  const { vehicles_bg_video,hero, features, featured_vehicles, video_showcase, technology, manufacturing, lifestyle } = data;

  // Helper function for image URLs
  const fullImage = (url?: string) =>
    url?.startsWith("http") ? url : `${API_BASE}${url || ""}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
        <SmartVideo
          src={hero.background_video}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
  {(() => {
    const words = hero.title ? hero.title.split(" ") : [];
    const firstLine = words.slice(0, 3).join(" ");
    const secondLine = words.slice(3).join(" ");
    return (
      <>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in leading-tight">
          {firstLine}
          <br />
          {secondLine && (
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              {secondLine}
            </span>
          )}
        </h1>
      </>
    );
  })()}

  <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
    {hero.subtitle}
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
    <Button
      asChild
      size="lg"
      className="bg-gradient-premium hover:shadow-glow text-lg px-8"
    >
      <Link to="/vehicles">
        Explore Vehicles <ArrowRight className="ml-2" />
      </Link>
    </Button>

    <Button
      asChild
      size="lg"
      variant="outline"
      className="text-lg px-8 border-primary/50 hover:bg-primary/10"
    >
      <Link to="/contact">Schedule Test Drive</Link>
    </Button>
  </div>
</div>

      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 text-center hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in">
                <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-4">
                  <FeatureIcon name={feature.icon} className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description || feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 pointer-events-none">
         <SmartVideo
      src={vehicles_bg_video}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
        </div>
        <div className="absolute inset-0 bg-background/80 z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Featured <span className="bg-gradient-premium bg-clip-text text-transparent">Vehicles</span>
            </h2>
            <p className="text-xl text-muted-foreground">Discover our latest models crafted for perfection</p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 2 } }}
            className="mb-12"
          >
            {featured_vehicles.map((v, idx) => (
              <SwiperSlide key={idx}>
                <Card className="my-16 overflow-hidden group hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in bg-card/70 backdrop-blur-md">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={fullImage(v.image)}
                      alt={v.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-sm text-muted-foreground mb-2">{v.category}</p>
                      <h3 className="text-3xl font-heading font-bold mb-2 text-white">{v.name}</h3>
                      <p className="text-xl text-primary font-bold mb-4">{v.price}</p>
                      <Button className="bg-gradient-premium hover:shadow-glow">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-white">
              <Link to="/vehicles">View All Vehicles <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lazy Sections */}
    <Suspense fallback={<div className="text-center py-20">Loading Videos...</div>}>
  {video_showcase && video_showcase.length > 0 && (
    <VideoSection videos={video_showcase} />
  )}
</Suspense>

      <Suspense fallback={<div className="text-center py-20">Loading Technology...</div>}>
        <TechnologySection
          backgroundVideo={technology.background_video}
          rightVideo={technology.right_video}
          description={technology.description}
          bullets={technology.bullets}
        />
      </Suspense>
      <Suspense fallback={<div className="text-center py-20">Loading Manufacturing...</div>}>
        <ManufacturingSection
          rightVideo={manufacturing.right_video}
          description={manufacturing.description}
          paragraph={manufacturing.paragraph}
        />
      </Suspense>

      {/* Lifestyle */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <SmartVideo
          src={lifestyle.background_video}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Live the <span className="bg-gradient-premium bg-clip-text text-transparent">Luxury Lifestyle</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            More than transportation. It's a statement of who you are and where you're going.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {lifestyle.stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2 bg-gradient-premium bg-clip-text text-transparent">{s.value}</div>
                <p className="text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
       {/* CTA */}
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-premium"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen LuxeDrive for their journey
          </p>
          <Button asChild size="lg" className="bg-gradient-premium hover:shadow-glow text-lg px-8">
            <Link to="/contact">Contact Us Today <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
