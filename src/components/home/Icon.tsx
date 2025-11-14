import { Zap, Shield, Award, type LucideIcon } from "lucide-react";


const map: Record<string, LucideIcon> = {
  zap: Zap,
  shield: Shield,
  award: Award,
};

export function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const Ico = map[name] || Zap;
  return <Ico className={className} />;
}
