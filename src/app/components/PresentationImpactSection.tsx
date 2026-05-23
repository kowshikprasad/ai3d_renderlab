import { TrendingUp, Users, Zap, Award } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function PresentationImpactSection() {
  const stats = [
    {
      icon: TrendingUp,
      title: "Better Client Impressions",
      description: "Professional visuals command higher perceived value and trust"
    },
    {
      icon: Award,
      title: "Stronger Portfolio Visuals",
      description: "Studio-quality renders that showcase your design expertise"
    },
    {
      icon: Zap,
      title: "Faster Workflows",
      description: "Controlled AI systems reduce iteration time dramatically"
    },
    {
      icon: Users,
      title: "Better Jury Presentations",
      description: "Cinematic visuals that communicate design intent clearly"
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#fafaf9] to-[#f5f5f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-[28px] md:text-7xl font-bold tracking-tight mb-3 md:mb-6 text-[#1a1a1a] leading-tight">
            Better visuals
            <br />
            <span className="text-[#1a1a1a]/50">change perception.</span>
          </h2>
          <p className="text-sm md:text-xl text-[#404040] max-w-3xl mx-auto px-2">
            Professional presentation quality directly impacts how your work is perceived and valued
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <GlassCard
                key={i}
                hover
                className="group p-6 md:p-10"
              >
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#b794f6] to-[#60a5fa] rounded-lg md:rounded-xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-[#1a1a1a]">{stat.title}</h3>
                <p className="text-xs md:text-base text-[#404040] leading-relaxed">
                  {stat.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

        {/* Additional Statement */}
        <div className="mt-8 md:mt-16 text-center">
          <GlassCard className="p-6 md:p-12">
            <p className="text-base md:text-3xl text-[#1a1a1a] leading-relaxed max-w-4xl mx-auto">
              "In architecture, presentation quality directly influences project perception.
              AI-rendering mastery is now essential for competitive advantage."
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
