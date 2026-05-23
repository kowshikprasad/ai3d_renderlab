import { Building2, Palette, GraduationCap } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function WhoThisIsForSection() {
  const audiences = [
    {
      icon: Building2,
      title: "Architects",
      description: "Elevate your presentation boards and client proposals with professional AI-rendered visuals"
    },
    {
      icon: Palette,
      title: "Interior Designers",
      description: "Create stunning moodboards and realistic interior visualizations that sell your vision"
    },
    {
      icon: GraduationCap,
      title: "Architecture Students",
      description: "Master cutting-edge visualization tools and produce competition-winning presentations"
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#f5f5f4] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-[28px] md:text-7xl font-bold tracking-tight mb-3 md:mb-6 text-[#1a1a1a] leading-tight">
            Who This Is For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <GlassCard
                key={i}
                hover
                className="p-6 md:p-10 text-center"
              >
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#b794f6] to-[#60a5fa] rounded-lg md:rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-8 shadow-lg shadow-purple-500/20">
                  <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>

                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-[#1a1a1a]">{audience.title}</h3>
                <p className="text-xs md:text-base text-[#404040] leading-relaxed">
                  {audience.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
