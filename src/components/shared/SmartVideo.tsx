// src/components/shared/SmartVideo.tsx
const YT_REGEX =
  /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_\-]+)/i;

export default function SmartVideo({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  poster,
  playsInline = true,
}: {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  playsInline?: boolean;
}) {
  if (!src) return null; // safety check
  const match = src.match(YT_REGEX);

  // 🎬 YouTube video
  if (match) {
    const id = match[1];
    const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`;
    return (
      <div
        className={`absolute inset-0 overflow-hidden ${className}`}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <iframe
          src={embedUrl}
          title="YouTube Video"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{
            border: "none",
          }}
        />
      </div>
    );
  }

  // 🎥 MP4 / Local video
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      poster={poster}
      playsInline={playsInline}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
