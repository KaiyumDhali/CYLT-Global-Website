import SmartVideo from "@/components/shared/SmartVideo";
import type { MediaItem } from "@/types/home";

export default function VideoSection({ videos }: { videos: MediaItem[] }) {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experience{" "}
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              The Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch our latest innovations in motion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.slice(0, 2).map((v, i) => (
            <div
              key={i}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group"
            >
              <SmartVideo
                src={v.url}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-2xl font-heading font-bold text-white">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {videos[2] && (
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <SmartVideo
              src={videos[2].url}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}
      </div>
    </section>
  );
}
