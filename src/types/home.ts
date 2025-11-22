export type MediaItem = {
  id?: number | string;          // optional, কারণ DB থেকে না এলে id null হতে পারে
  title: string;
  url: string;                   // YouTube embed বা MP4 CDN
  thumbnail?: string;            // optional fallback
};

export type Vehicle = {
  id?: number | string;
  name: string;
  category: string;
  price: string;
  image: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type HeroData = {
  title: string;                 // multiline text, "\n" supported
  subtitle: string;
  background_video: string;      // mp4/CDN/YouTube embed
};

export type Feature = {
  icon: string;                  // "zap" | "shield" | "award" etc.
  title: string;
  desc?: string;
  description?: string;          // backend হয়তো desc পাঠায়, তাই দুটোই রাখা safe
};

export type Technology = {
  background_video: string;
  right_video: string;
  description: string;
  bullets: { title: string; desc: string; pera: string }[];
};

export type Manufacturing = {
  background_video: string;
  right_video: string;
  paragraph: string;
  description: string;
};

export type Lifestyle = {
  background_video: string;
  stats: Stat[];
};

export type HomePayload = {
  hero: HeroData;
  features: Feature[];
  featured_vehicles: Vehicle[];
  vehicles_bg_video?: string;          // ✅ নতুন যুক্ত — optional background image
  video_showcase: MediaItem[];
  technology: Technology;
  manufacturing: Manufacturing;
  lifestyle: Lifestyle;
};
