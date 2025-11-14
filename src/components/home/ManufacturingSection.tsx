import SmartVideo from "@/components/shared/SmartVideo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ManufacturingSection({
  rightVideo, paragraph,description
}: { rightVideo: string; paragraph: string; description: string }) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Crafted with <span className="bg-gradient-premium bg-clip-text text-transparent">Precision</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {description}
            </p>
            <p className="text-muted-foreground mb-8">
              {paragraph}
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden h-[500px]">
            <SmartVideo
              src={rightVideo}
              className="w-full h-full object-cover"
              autoPlay loop muted playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
