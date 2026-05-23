import { ArrowRight, ArrowDown } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function ProblemSolutionSection() {
  const steps = [
    { step: "MODEL", desc: "Your architectural design" },
    { step: "PROMPT", desc: "Structured AI inputs" },
    { step: "CONTROL", desc: "Refinement systems" },
    { step: "RENDER", desc: "Photorealistic output" },
    { step: "PRESENTATION", desc: "Client-ready visuals" }
  ];

  const pains = [
    "Random prompts",
    "Unrealistic materials",
    "Weak lighting",
    "Inconsistent outputs",
    "Poor presentations",
    "Wasted production time"
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#fafaf9] to-[#f5f5f4] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#b794f6]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#60a5fa]/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Left Side - Problem */}
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-[32px] md:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Most AI renders
              <br />
              <span className="text-[#1a1a1a]/50">still look fake.</span>
            </h2>

            <div className="space-y-3 md:space-y-5">
              {pains.map((pain, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 text-sm md:text-xl text-[#404040]
                    group hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-br from-[#b794f6] to-[#60a5fa] rounded-full flex-shrink-0
                    group-hover:scale-125 transition-transform duration-200" />
                  {pain}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="relative">
            {/* Subtle glow ring behind card */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#b794f6]/20 to-[#60a5fa]/20 rounded-2xl blur-xl" />

            <GlassCard className="relative p-6 md:p-12 border border-[#b794f6]/20">
              <h3 className="text-xl md:text-5xl font-bold mb-6 md:mb-12 text-[#1a1a1a] leading-tight">
                Professional systems create
                <br />
                <span className="text-[#1a1a1a]/60">professional visuals.</span>
              </h3>

              {/* Workflow Steps */}
              <div className="space-y-2 md:space-y-4">
                {steps.map((item, i) => (
                  <div key={i}>
                    {/* Step row — stacks vertically on mobile */}
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="backdrop-blur-sm bg-white/80 border border-[#b794f6]/30
                          rounded-lg px-3 py-1.5 md:px-5 md:py-3
                          text-[10px] md:text-sm font-bold tracking-widest text-[#1a1a1a]
                          shadow-[0_0_12px_rgba(183,148,246,0.15)]
                          hover:shadow-[0_0_20px_rgba(183,148,246,0.3)] transition-shadow duration-300
                          whitespace-nowrap">
                          {item.step}
                        </div>
                        {/* Divider line — hidden on mobile */}
                        <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-[#b794f6]/40 to-transparent" />
                      </div>
                      <p className="text-[11px] md:text-sm text-[#737373] font-medium pl-1 md:pl-0">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow between steps */}
                    {i < steps.length - 1 && (
                      <div className="ml-3 md:ml-16 mt-1.5 md:mt-2 mb-1.5 md:mb-0">
                        {/* Vertical arrow on mobile, horizontal on desktop */}
                        <ArrowDown className="w-4 h-4 md:hidden text-[#b794f6]" />
                        <ArrowRight className="hidden md:block w-5 h-5 text-[#b794f6]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
