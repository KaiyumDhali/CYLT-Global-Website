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

import { motion, AnimatePresence, cubicBezier } from "framer-motion";

// Lazy sections
const VideoSection = lazy(() => import("@/components/home/VideoSection"));
const TechnologySection = lazy(() => import("@/components/home/TechnologySection"));
const ManufacturingSection = lazy(() => import("@/components/home/ManufacturingSection"));

// ====== ANIMATION CONFIG (Mercedes-style luxury) ======
const luxuryEase = cubicBezier(0.25, 0.1, 0.25, 1);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.0, delay, ease: luxuryEase },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.0, delay, ease: luxuryEase },
});

const fadeVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.4, ease: luxuryEase },
};

export default function Index() {
  // ---------- STATE ----------
  const [data, setData] = useState<HomePayload | null>(null);
  const [loading, setLoading] = useState(true);

  const [sliders, setSliders] = useState<any[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const [clients, setClients] = useState<any[]>([]);

  // ---------- SINGLE PARALLEL FETCH EFFECT ----------
  useEffect(() => {
    let isMounted = true;

    async function loadAll() {
      try {
        const [home, slidersRes, clientsRes] = await Promise.all([
          fetchWithFallback<HomePayload>("/api/homepage", "home.json"),
          fetch(`${API_BASE}/api/sliders`).then((r) => r.json()),
          fetch(`${API_BASE}/api/clients`).then((r) => r.json()),
        ]);

        if (!isMounted) return;

        setData(home);

        if (slidersRes?.data) {
          setSliders(slidersRes.data);
        }

        if (clientsRes?.data) {
          setClients(clientsRes.data);
        }
      } catch (err) {
        console.error("Homepage load error:", err);
        if (isMounted) {
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadAll();

    return () => {
      isMounted = false;
    };
  }, []);

  // ---------- SLIDER AUTO CHANGE ----------
  useEffect(() => {
    if (sliders.length === 0) return;

    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliders.length);
    }, 5000); // 5 second por por change

    return () => clearInterval(timer);
  }, [sliders.length]);

  // ---------- LOADING / ERROR ----------
  if (loading)
    return <div className="text-center py-20 text-lg">Loading homepage...</div>;

  if (!data)
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load home content
      </div>
    );

  if (sliders.length === 0)
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Loading slider...
      </div>
    );

  // ---------- DESTRUCTURE DATA ----------
  const {
    vehicles_bg_video,
    hero,
    features,
    featured_vehicles,
    video_showcase,
    technology,
    manufacturing,
    lifestyle,
  } = data;

  const fullImage = (url?: string) =>
    url?.startsWith("http") ? url : `${API_BASE}${url || ""}`;

  // ---------- RENDER ----------
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* -------------------------------------------------
          HERO SECTION — API SLIDER + ANIMATION + TEXT
      -------------------------------------------------- */}
      <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${API_BASE}/storage/${sliders[slideIndex].slider_image}')`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

            {/* CONTENT — SAME motion.div so both animate together */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1.0, ease: luxuryEase }}
              >
                {/* TITLE */}
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
                  {(() => {
                    const full = sliders[slideIndex]?.title || "";
                    const words = full.split(" ");

                    const firstLine = words.slice(0, 3).join(" ");
                    const secondLine = words.slice(3).join(" ");

                    return (
                      <>
                        {firstLine}
                        <br />
                        {secondLine && (
                          <span className="bg-gradient-premium bg-clip-text text-transparent">
                            {secondLine}
                          </span>
                        )}
                      </>
                    );
                  })()}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-lg md:text-1xl text-white/80 max-w-2xl mx-auto mb-10">
                  {sliders[slideIndex]?.description}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* -------------------------------------------------
           FEATURES SECTION (Animated)
      -------------------------------------------------- */}
      <motion.section
        className="py-20 px-4 bg-card/50"
        {...fadeIn(0.1)}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} {...fadeUp(0.1 + idx * 0.15)}>
                <Card className="p-8 text-center hover:border-primary/50 transition-all hover:shadow-glow bg-card/80 backdrop-blur-md">
                  <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-4">
                    <FeatureIcon
                      name={feature.icon}
                      className="w-8 h-8 text-primary-foreground"
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description || feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* -------------------------------------------------
           FEATURED VEHICLES (Animated)
      -------------------------------------------------- */}
      <motion.section
        className="py-20 px-4 relative overflow-hidden"
        {...fadeIn(0.1)}
      >
        <div className="absolute inset-0 opacity-90">
          {/* vehicles_bg_video temporarily off as in your last code
          <SmartVideo
            src={vehicles_bg_video}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          /> */}
        </div>
        <div className="absolute inset-0 bg-background/80"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            {...fadeUp(0.1)}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Featured{" "}
              <span className="bg-gradient-premium bg-clip-text text-transparent">
                Vehicles
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our latest models crafted for perfection
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
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
                  <motion.div {...fadeUp(0.2 + idx * 0.1)}>
                    <Card className="my-16 overflow-hidden group hover:border-primary/50 transition-all hover:shadow-glow bg-card/70 backdrop-blur-md">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={fullImage(v.image)}
                          alt={v.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-sm text-muted-foreground mb-2">
                            {v.category}
                          </p>
                          <h3 className="text-3xl font-heading font-bold mb-2 text-white">
                            {v.name}
                          </h3>
                          <p className="text-xl text-primary font-bold mb-4">
                            {v.price}
                          </p>
                          <Button className="bg-gradient-premium hover:shadow-glow">
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            className="text-center"
            {...fadeUp(0.4)}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-white"
            >
              <Link to="/vehicles">
                View All Vehicles <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* -------------------------------------------------
           LAZY SECTIONS
      -------------------------------------------------- */}
      <Suspense fallback={<div className="text-center py-20">Loading Videos...</div>}>
        {video_showcase && video_showcase.length > 0 && (
          <VideoSection videos={video_showcase} />
        )}
      </Suspense>

      <Suspense
        fallback={<div className="text-center py-20">Loading Technology...</div>}
      >
        <TechnologySection
          backgroundVideo={technology.background_video}
          rightVideo={technology.right_video}
          description={technology.description}
          bullets={technology.bullets}
        />
      </Suspense>

      <Suspense
        fallback={<div className="text-center py-20">Loading Manufacturing...</div>}
      >
        <ManufacturingSection
          backgroundVideo={manufacturing.background_video}
          rightVideo={manufacturing.right_video}
          description={manufacturing.description}
          paragraph={manufacturing.paragraph}
        />
      </Suspense>

      {/* -------------------------------------------------
           LIFESTYLE SECTION (Animated)
      -------------------------------------------------- */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        {...fadeIn(0.1)}
      >
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
          <motion.h2
            {...fadeUp(0.1)}
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            SKD product{" "}
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              development service
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.25)}
            className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Complete semi-knocked down product development and assembly services
            with advanced manufacturing capabilities.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            {lifestyle.stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(0.3 + i * 0.1)}>
                <div className="text-4xl font-bold mb-2 bg-gradient-premium bg-clip-text text-transparent">
                  {s.value}
                </div>
                <p className="text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* -------------------------------------------------
           ⭐ OUR CLIENTS SECTION (Dynamic + Marquee)
      -------------------------------------------------- */}
      <motion.section
        className="py-20 bg-background relative overflow-hidden"
        {...fadeIn(0.1)}
      >
        <motion.div
          className="container mx-auto px-4 text-center mb-12"
          {...fadeUp(0.1)}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Valueable{" "}
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading brands & companies
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden whitespace-nowrap py-6"
          {...fadeUp(0.2)}
        >
          <div className="client-marquee flex gap-16">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-16">
                {clients.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-40 shrink-0"
                  >
                    <img
                      src={`${API_BASE}/storage/${c.image}`}
                      className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-logo.png";
                      }}
                    />
                    <p className="mt-3 text-sm text-white/80">
                      {c.company_name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* -------------------------------------------------
           CTA SECTION (Animated)
      -------------------------------------------------- */}
      <motion.section
        className="py-20 px-4 bg-gradient-hero relative overflow-hidden"
        {...fadeIn(0.1)}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-premium"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Ready to Experience Excellence?
          </motion.h2>

          <motion.p
            {...fadeUp(0.25)}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join thousands of satisfied clients who choose CYLT Emobility-Powerhouse.
          </motion.p>

          <motion.div {...fadeUp(0.4)}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-premium hover:shadow-glow text-lg px-8"
            >
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
