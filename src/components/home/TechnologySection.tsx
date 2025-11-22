import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmartVideo from "@/components/shared/SmartVideo";

export default function TechnologySection({
  backgroundVideo,
  rightVideo,
  description,
  bullets
}: {
  backgroundVideo: string;
  rightVideo: string;
  description: string;
  bullets: { title: string; desc: string }[];
}) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SmartVideo
          src={backgroundVideo}
          className="w-full h-full object-cover"
          autoPlay loop muted playsInline
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden h-[500px]">
            <SmartVideo
              src={rightVideo}
              className="w-full h-full object-cover"
              autoPlay loop muted playsInline
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Charging infrastructure setup<span className="bg-gradient-premium bg-clip-text text-transparent">(DC, AC, PV, Battery swap station)</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {description}
            </p>
            <ul className="space-y-4 mb-8">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{b.title}</h4>
                    <p className="text-muted-foreground">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-gradient-premium hover:shadow-glow">
              Explore Technology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
