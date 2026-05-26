"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { BundlePurchaseDialog } from "./BundlePurchaseDialog";
import { IndividualBookDialog } from "./IndividualBookDialog";

interface HeroSectionProps {
  onPayNowClick?: (price: string) => void;
}

export function HeroSection({ onPayNowClick }: HeroSectionProps) {
  const [bundleDialogOpen, setBundleDialogOpen] = useState(false);
  const [individualDialogOpen, setIndividualDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1768934727097-546ae3c68190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwY2luZW1hdGljfGVufDF8fHx8MTc3OTI0Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzkyNDI5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3NzkyNDI5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1569534108101-c29c57e3df89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcHJlc2VudGF0aW9uJTIwYm9hcmR8ZW58MXx8fHwxNzc5MjQyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1650656746868-f01c722a0d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzkyNDA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const newSlide = Math.round(scrollLeft / width);
      setCurrentSlide(newSlide);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full snap-center relative">
              <img
                src={img}
                alt={`Architecture ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {currentSlide > 0 && (
          <button
            onClick={() => scrollToSlide(currentSlide - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/40 border border-white/60 rounded-full p-3
              hover:bg-white/60 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a1a1a]" />
          </button>
        )}

        {currentSlide < images.length - 1 && (
          <button
            onClick={() => scrollToSlide(currentSlide + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/40 border border-white/60 rounded-full p-3
              hover:bg-white/60 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-[#1a1a1a]" />
          </button>
        )}

        {/* Pagination Dots */}
        <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-gradient-to-r from-[#0066ff] to-[#7c3aed]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center" style={{ bottom: "calc(1.25rem + 90px)" }}>
          <style>{`
            @keyframes scrollBounce {
              0%, 100% { transform: translateY(0); opacity: 0.7; }
              50% { transform: translateY(7px); opacity: 1; }
            }
            .scroll-arrow-group { animation: scrollBounce 1.8s ease-in-out infinite; }
          `}</style>
          <div className="scroll-arrow-group flex flex-col items-center gap-1.5">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(225,29,72,0.55) 0%, rgba(249,115,22,0.45) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(249,115,22,0.45)",
                boxShadow: "0 0 18px rgba(225,29,72,0.35), 0 2px 8px rgba(0,0,0,0.25)"
              }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ stroke: "url(#arrowGrad)" }}
              >
                <defs>
                  <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b8a" />
                    <stop offset="100%" stopColor="#fbbf77" />
                  </linearGradient>
                </defs>
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            <span
              className="text-[10px] tracking-widest uppercase font-medium"
              style={{
                background: "linear-gradient(135deg, #ff6b8a, #fbbf77)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none"
              }}
            >
              scroll down
            </span>
          </div>
        </div>

        {/* Content - Only shown on first slide */}
        {currentSlide === 0 && (
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center py-12 md:py-20 transition-opacity duration-500 -translate-y-[45px] md:translate-y-0">
            <GlassCard className="p-6 md:p-20 max-w-5xl mx-auto">
              <div className="space-y-6 md:space-y-10">
                <h1 className="text-[38px] md:text-8xl tracking-tight font-bold text-[#1a1a1a] leading-tight">
                  Master&nbsp;<span className="whitespace-nowrap">AI-Rendering</span>
                  <br />
                  <span
                    className="bg-gradient-to-r from-[#e11d48] to-[#f97316] bg-clip-text text-transparent"
                    style={{ filter: "drop-shadow(0 0 10px rgba(225,29,72,0.4)) drop-shadow(0 0 24px rgba(249,115,22,0.2))" }}
                  >
                    For Architecture
                  </span>
                </h1>

                <p className="text-base md:text-2xl text-[#404040] max-w-3xl mx-auto leading-relaxed px-2">
                  Professional AI-rendering workflows, prompt systems, and presentation techniques built specifically for architects and interior designers.
                </p>

                <p className="text-[11px] md:text-base text-[#737373] tracking-widest uppercase">
                  Exterior • Interior • Presentation AI Workflows
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6">
                  <button
                    onClick={() => {
                      document.getElementById("bundle-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-[14px] md:rounded-xl bg-gradient-to-r from-[#0066ff] to-[#7c3aed] text-white font-medium text-sm md:text-lg
                      shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.03]
                      transition-all duration-300"
                  >
                    Get The Complete Bundle
                  </button>
                  <button
                    onClick={() => setIndividualDialogOpen(true)}
                    className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-[14px] md:rounded-xl backdrop-blur-md bg-white/40 border-2 border-white/60 text-[#1a1a1a] font-medium text-sm md:text-lg
                      hover:bg-white/60 transition-all duration-300"
                  >
                    Explore Individual Books
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5 md:gap-3 pt-3 md:pt-8">
                  {[
                    "100+ Professional Prompts",
                    "Presentation-focused workflows",
                    "Architectural AI systems",
                    "Beginner → Advanced",
                    "Built by architects"
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-sm bg-white/40 border border-white/50 rounded-md md:rounded-lg p-1.5 md:p-3 text-[9px] md:text-sm text-[#1a1a1a] font-medium leading-tight md:leading-normal"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </section>

      <BundlePurchaseDialog open={bundleDialogOpen} onOpenChange={setBundleDialogOpen} onPayNowClick={onPayNowClick} />
      <IndividualBookDialog open={individualDialogOpen} onOpenChange={setIndividualDialogOpen} onPayNowClick={onPayNowClick} />
    </>
  );
}
