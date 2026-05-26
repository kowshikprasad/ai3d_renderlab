"use client";

import { useState } from "react";
import { Shield, Zap, Download, Users } from "lucide-react";
import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { BundlePurchaseDialog } from "./BundlePurchaseDialog";
import { IndividualBookDialog } from "./IndividualBookDialog";

interface FinalCTASectionProps {
  onPayNowClick?: (price: string) => void;
}

export function FinalCTASection({ onPayNowClick }: FinalCTASectionProps) {
  const [bundleDialogOpen, setBundleDialogOpen] = useState(false);
  const [individualDialogOpen, setIndividualDialogOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604503245604-930a6f3513ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvciUyMGJyaWdodHxlbnwxfHx8fDE3NzkyNDMxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium architecture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center py-16 md:py-32">
          <GlassCard className="p-6 md:p-20">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-[32px] md:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
                  Stop fighting AI.
                  <br />
                  <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                    Start presenting professionally.
                  </span>
                </h2>

                <p className="text-sm md:text-xl text-[#404040] max-w-3xl mx-auto leading-relaxed px-2">
                  Professional AI-rendering systems built specifically for architecture presentations.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center">
                <motion.button
                  onClick={() => setBundleDialogOpen(true)}
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(0, 102, 255, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-[14px] md:rounded-xl bg-gradient-to-r from-[#0066ff] to-[#7c3aed] text-white font-medium text-sm md:text-lg
                    shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get The Complete Bundle
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setIndividualDialogOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-[14px] md:rounded-xl backdrop-blur-md bg-white/40 border-2 border-white/60 text-[#1a1a1a] font-medium text-sm md:text-lg
                    hover:bg-white/60 transition-all duration-300"
                >
                  Explore Individual Books
                </motion.button>
              </div>

              {/* Trust Labels */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 md:pt-8">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-[#404040] font-medium">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#0066ff]" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-[#404040] font-medium">
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-[#0066ff]" />
                  <span>Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-[#404040] font-medium">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#0066ff]" />
                  <span>Beginner Friendly</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-[#404040] font-medium">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-[#0066ff]" />
                  <span>Built By Architects</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <BundlePurchaseDialog open={bundleDialogOpen} onOpenChange={setBundleDialogOpen} onPayNowClick={onPayNowClick} />
      <IndividualBookDialog open={individualDialogOpen} onOpenChange={setIndividualDialogOpen} onPayNowClick={onPayNowClick} />
    </>
  );
}
