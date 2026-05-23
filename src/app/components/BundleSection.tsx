"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { BundlePurchaseDialog } from "./BundlePurchaseDialog";
import bookCover from "../../imports/THE_ULTIMATE_AI-RENDERING_PRO_BUNDLE.png";

export function BundleSection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const includes = [
    "All 3 workflows",
    "100+ AI prompts",
    "AI rendering workflows",
    "JSON prompt systems",
    "Step-by-step case studies",
    "Exterior workflows",
    "Interior workflows",
    "Presentation workflows"
  ];

  const bonuses = [
    "Advanced realism systems",
    "Exclusive prompt templates",
    "Priority email support"
  ];

  return (
    <>
      <section id="bundle-section" className="relative py-8 md:py-16 px-4 md:px-6 bg-gradient-to-b from-[#f5f5f4] to-[#fafaf9]">
        <div className="max-w-6xl mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4 text-[#1a1a1a] leading-tight">
              <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                The Ultimate AI-Rendering Pro Bundle
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#404040] leading-relaxed max-w-3xl mx-auto">
              Everything required to create presentation-ready architectural visuals using AI.
            </p>
          </div>

          <div className="grid md:grid-cols-[450px_450px] gap-6 md:gap-10 items-stretch justify-center">
            {/* Left - Portrait Book Cover */}
            <div className="relative flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-full"
              >
                {/* Portrait Book Cover Card - Height matches text section */}
                <div className="relative rounded-2xl w-full h-full shadow-2xl overflow-hidden">
                  <img
                    src={bookCover}
                    alt="Bundle Cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Best Value Badge */}
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-[#e11d48] to-[#f97316] rounded-full px-3 py-1.5 md:px-5 md:py-2.5 shadow-lg shadow-red-500/30">
                  <span className="text-[10px] md:text-xs tracking-wider font-bold text-white">BEST VALUE</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col space-y-3 md:space-y-5">

              {/* Combined Includes & Bonuses */}
              <GlassCard className="p-3 md:p-4">
                <div className="space-y-3">
                  {/* Includes */}
                  <div>
                    <h4 className="text-[10px] md:text-xs mb-2 text-[#1a1a1a] font-bold tracking-wider">INCLUDES:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
                      {includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] rounded-full p-0.5 flex-shrink-0">
                            <Check className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                          </div>
                          <span className="text-[10px] md:text-xs text-[#404040]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bonuses */}
                  <div className="pt-2 border-t border-[#0066ff]/10">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#0066ff]" />
                      <h4 className="text-[10px] md:text-xs text-[#1a1a1a] font-bold tracking-wider">BONUSES (Worth ₹1500):</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {bonuses.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="bg-gradient-to-r from-[#ec4899] to-[#f97316] rounded-full p-0.5 flex-shrink-0">
                            <Check className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                          </div>
                          <span className="text-[10px] md:text-xs text-[#404040]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Pricing & CTA */}
              <GlassCard className="p-4 md:p-6">
                <div className="text-center space-y-3">
                  {/* Original Price with Bonus */}
                  <div className="space-y-0.5">
                    <div className="text-sm md:text-base text-[#737373] line-through opacity-60">
                      ₹4500 + ₹1500 Bonus
                    </div>
                  </div>

                  {/* Main Price */}
                  <div className="space-y-1">
                    <div className="text-[10px] md:text-xs tracking-wider text-[#404040] font-medium uppercase">
                      Now Only
                    </div>
                    <div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e11d48] to-[#f97316] bg-clip-text text-transparent leading-none"
                      style={{ filter: "drop-shadow(0 0 12px rgba(225,29,72,0.45)) drop-shadow(0 0 28px rgba(249,115,22,0.25))" }}
                    >
                      ₹3333
                    </div>
                  </div>

                  {/* Savings Text */}
                  <div className="inline-block bg-gradient-to-r from-[#0066ff] to-[#7c3aed] rounded-full px-4 py-1.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                    Save ₹2667 Today
                  </div>

                  {/* Waitlist Offer */}
                  <div className="relative mt-2 md:mt-3">
                    <div className="backdrop-blur-sm bg-white/95 border-2 border-[#0066ff]/20 rounded-lg p-2.5 md:p-3 shadow-lg">
                      <div className="space-y-1">
                        <div className="inline-block bg-gradient-to-r from-[#0066ff] to-[#7c3aed] rounded-full px-2.5 py-0.5 mb-0.5">
                          <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-white uppercase">
                            Waitlist Offer
                          </span>
                        </div>
                        <div className="text-[10px] md:text-xs text-[#1a1a1a] font-semibold leading-relaxed">
                          ₹3333 pricing available only for the first 99 members.
                        </div>
                        <div className="text-[9px] md:text-[10px] text-[#404040] leading-relaxed">
                          Price increases to ₹6000 after the first 99 enrollments.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => setDialogOpen(true)}
                    whileHover={{
                      boxShadow: "0 25px 70px rgba(0, 102, 255, 0.35), 0 10px 30px rgba(124, 58, 237, 0.25)"
                    }}
                    className="w-full py-3 md:py-4 mt-3 md:mt-4 bg-gradient-to-r from-[#0066ff] via-[#5b21b6] to-[#7c3aed] text-white font-bold text-sm md:text-base rounded-lg
                      shadow-2xl shadow-blue-500/30 transition-all duration-300
                      hover:shadow-blue-500/40 relative overflow-hidden
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                      before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                  >
                    Get The Complete Bundle
                  </motion.button>

                  <p className="text-center text-[9px] md:text-xs text-[#737373] mt-2 md:mt-3">
                    One-time payment • Instant access • Lifetime updates
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <BundlePurchaseDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
