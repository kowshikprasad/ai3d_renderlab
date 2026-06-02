"use client";

import { motion } from "motion/react";
import { Sparkles, Palette, Lightbulb, Moon, Camera } from "lucide-react";

export function PlayfulStatementSection() {
  const features = [
    {
      icon: Sparkles,
      emoji: "✨",
      label: "Style",
      example: "brutalist → minimalist in 2 seconds",
      gradient: "from-[#0066ff] to-[#7c3aed]"
    },
    {
      icon: Palette,
      emoji: "🎨",
      label: "Materials",
      example: "concrete → glass → wood",
      gradient: "from-[#7c3aed] to-[#ec4899]"
    },
    {
      icon: Lightbulb,
      emoji: "💡",
      label: "Lighting",
      example: "no more alien sunsets",
      gradient: "from-[#ec4899] to-[#f97316]"
    },
    {
      icon: Moon,
      emoji: "🌙",
      label: "Mood",
      example: "dramatic to zen, instantly",
      gradient: "from-[#f97316] to-[#eab308]"
    },
    {
      icon: Camera,
      emoji: "📸",
      label: "Camera angle",
      example: "aerial to eye-level — total control",
      gradient: "from-[#eab308] to-[#0066ff]"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white via-[#fafaf9] to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Large Kinetic Typography */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-[36px] md:text-7xl lg:text-8xl font-bold tracking-tight text-center leading-tight">
              <span className="block text-[#1a1a1a]">SAVE 100+ HOURS</span>
              <span className="block bg-gradient-to-r from-[#0066ff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
                EACH MONTH. 🚀
              </span>
            </h2>
          </div>

          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6"
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-relaxed px-2">
              "Actually spend time{" "}
              <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                designing beautiful buildings
              </span>{" "}
              — instead of wrestling with inconsistent AI renders."
            </p>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center max-w-4xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ef4444] to-[#ec4899] bg-clip-text text-transparent px-2">
              Ever spent hours tweaking prompts with unpredictable results? 🤦
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 md:p-6 border-2 border-blue-200/50 shadow-lg max-w-3xl mx-auto">
              <p className="text-sm md:text-lg text-[#1a1a1a] leading-relaxed font-medium">
                Weeks of research 📚, countless hours ⏱️, and relentless effort have been invested into perfecting this workflow—so you don't have to start from scratch.
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] px-2">
              That's why we built a{" "}
              <span className="bg-gradient-to-r from-[#0066ff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
                PARAMETRIC AI-RENDERING WORKFLOW.
              </span>
            </p>

            <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-[#1a1a1a] px-2">
              Stop writing prompts from scratch.
              <br />
              <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                Simply swap these key parameters:
              </span>
            </p>
          </motion.div>

          {/* Feature Cards - Smaller & More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto pt-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl bg-white p-3 md:p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  {/* Icon */}
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-md flex-shrink-0`}>
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>

                  {/* Label & Example */}
                  <div className="space-y-0.5">
                    <h3 className={`text-xs md:text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.emoji} {feature.label}
                    </h3>
                    <p className="text-[10px] md:text-xs text-[#737373] leading-tight">
                      {feature.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6 pt-6"
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] px-2">
              Generate professional renders that actually look like architecture.
            </p>

            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-xl lg:text-2xl text-[#1a1a1a] font-semibold px-2">
                ❌ No prompt engineering expertise required
              </p>
              <p className="text-base md:text-xl lg:text-2xl text-[#1a1a1a] font-semibold px-2">
                ❌ No unpredictable outputs
              </p>
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] px-2">
                ✅ Simply copy, swap, render, repeat
              </p>
            </div>
          </motion.div>

          <div className="max-w-[360px] mx-auto pt-8 md:max-w-none">
            <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-black shadow-lg shadow-slate-900/10">
              {/* Mobile: portrait-only (shorts link) */}
              <div className="relative w-full aspect-[9/16] md:hidden">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/4R3w4APFgzE?rel=0&modestbranding=1"
                  title="AI Rendering Workflow Short Mobile"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Desktop: landscape only */}
              <div className="relative w-full hidden md:block md:aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/C9VAKaxZuJ4?rel=0&modestbranding=1"
                  title="AI Rendering Workflow Short Desktop"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
