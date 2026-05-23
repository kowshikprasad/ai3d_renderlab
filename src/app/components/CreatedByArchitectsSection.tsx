import { GlassCard } from "./GlassCard";
import { Building2, Compass, Layers, PenTool } from "lucide-react";

export function CreatedByArchitectsSection() {
  const features = [
    {
      icon: Building2,
      title: "Architecture-specific workflows",
      description: "Not generic AI tutorials—systems built for architectural visualization"
    },
    {
      icon: Compass,
      title: "Real studio use cases",
      description: "Based on actual architectural practice and presentation requirements"
    },
    {
      icon: Layers,
      title: "Presentation-focused systems",
      description: "Designed for client presentations, juries, and portfolio work"
    },
    {
      icon: PenTool,
      title: "Practical experience",
      description: "Created by architects who understand the design process"
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-[28px] md:text-7xl font-bold tracking-tight mb-3 md:mb-6 text-[#1a1a1a] leading-tight">
            Built by architects who
            <br />
            <span className="text-[#1a1a1a]/50">understand the real workflow.</span>
          </h2>
          <p className="text-sm md:text-xl text-[#404040] max-w-3xl mx-auto leading-relaxed px-2">
            We understand the frustration of fixing weak AI renders, inconsistent prompts, unrealistic materials, and poor presentation outputs—because we faced the same problems ourselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={i} hover className="p-6 md:p-10">
                <div className="bg-gradient-to-br from-[#b794f6] to-[#60a5fa] rounded-lg md:rounded-xl w-11 h-11 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-purple-500/20">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-xs md:text-base text-[#404040] leading-relaxed">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
