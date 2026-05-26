import { GlassCard } from "./GlassCard";

export function WorkflowComparisonSection() {
  const comparisons = [
    {
      without: "Hours wasted testing random prompts.",
      with: "Proven prompts with predictable results.",
      emoji: "✅"
    },
    {
      without: "Endless YouTube tutorial hunting.",
      with: "Clear step-by-step workflow.",
      emoji: "📋"
    },
    {
      without: "Tutorials hide real production methods.",
      with: "Complete transparent process.",
      emoji: "🔍"
    },
    {
      without: "Constant switching between tools.",
      with: "One streamlined rendering pipeline.",
      emoji: "⚡"
    },
    {
      without: "Unrealistic and inconsistent AI renders.",
      with: "Cinematic, realistic architectural visuals.",
      emoji: "🎬"
    },
    {
      without: "Months lost in trial and error.",
      with: "Faster path to studio-grade renders.",
      emoji: "🚀"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 px-4 md:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4 text-[#1a1a1a] leading-tight">
            Why Our Workflow Changes Everything
          </h2>
        </div>

        <GlassCard className="overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
            {/* Without Our Workflow Column */}
            <div className="p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-6 text-[#1a1a1a]/60">
                Without Our Workflow
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 text-lg">❌</span>
                    <p className="text-sm md:text-base text-[#404040] leading-relaxed">
                      {item.without}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* With Our Workflow Column - Highlighted */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 relative">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0066ff] to-[#7c3aed] rounded-full px-3 py-1">
                <span className="text-xs font-bold text-white">RECOMMENDED</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-6 bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                With Our Workflow
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-lg">{item.emoji}</span>
                    <p className="text-sm md:text-base text-[#1a1a1a] leading-relaxed font-medium">
                      {item.with}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
