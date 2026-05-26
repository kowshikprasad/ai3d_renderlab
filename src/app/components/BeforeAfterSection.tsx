"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";
import { GlassCard } from "./GlassCard";

export function BeforeAfterSection() {
  const interactiveTransformations = [
    {
      before: "https://images.unsplash.com/photo-1771189255245-225dcea3f652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbW9kZWwlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzc5MjQwNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1650656746868-f01c722a0d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzkyNDA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      label: "SketchUp → Photoreal Render"
    },
    {
      before: "https://images.unsplash.com/photo-1716077521105-f0d699ab2047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMHJlbmRlcnxlbnwxfHx8fDE3NzkyNDA3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1762337009787-bad651efb880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvciUyMG5pZ2h0fGVufDF8fHx8MTc3OTI0MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      label: "Day → Night"
    }
  ];

  const staticTransformation = {
    before: "https://images.unsplash.com/photo-1765253807334-26938639c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmFsJTIwcmVuZGVyaW5nfGVufDF8fHx8MTc3OTI0MDc3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1765862835193-3c37388a409e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwdmlzdWFsaXphdGlvbiUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc3OTI0MDc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Moodboard → Interior Visualization"
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[28px] md:text-6xl font-bold tracking-tight mb-3 md:mb-6 text-[#1a1a1a] leading-tight">
            Before / After
            <br />
            <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-sm md:text-xl text-[#404040] max-w-2xl mx-auto px-2">
            See how professional AI workflows elevate architectural visualization
          </p>
        </div>

        <div className="space-y-6 md:space-y-12">
          {/* Interactive Before/After Sliders */}
          {interactiveTransformations.map((item, i) => (
            <GlassCard key={i} className="p-4 md:p-6 overflow-hidden">
              {/* Label */}
              <div className="text-center mb-4 md:mb-8">
                <span className="backdrop-blur-sm bg-white/60 border border-white/80 rounded-full px-4 md:px-6 py-1.5 md:py-2.5 text-xs md:text-sm font-bold tracking-wider text-[#1a1a1a]">
                  {item.label}
                </span>
              </div>

              {/* Interactive Slider */}
              <div className="relative rounded-lg md:rounded-xl overflow-hidden touch-pan-x">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={item.before}
                      alt="Before"
                      style={{ objectFit: "cover", height: "280px", userSelect: "none", touchAction: "none" }}
                      className="md:!h-[500px]"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.after}
                      alt="After"
                      style={{ objectFit: "cover", height: "280px", userSelect: "none", touchAction: "none" }}
                      className="md:!h-[500px]"
                    />
                  }
                  defaultPosition={50}
                  onlyHandleDraggable={true}
                  changePositionOnHover={false}
                  style={{
                    height: "280px",
                    borderRadius: "0.5rem",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    touchAction: "pan-x"
                  }}
                  className="md:!h-[500px] md:!rounded-xl"
                  handle={
                    <div style={{ touchAction: "none" }} className="relative flex items-center justify-center w-1 h-full cursor-ew-resize">
                      <div className="absolute w-1 h-full bg-white/90 backdrop-blur-sm shadow-lg pointer-events-none" />
                      <div className="absolute w-12 h-12 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#0066ff] to-[#7c3aed] shadow-xl flex items-center justify-center">
                        <div className="flex gap-1 pointer-events-none">
                          <div className="w-0.5 h-4 md:h-4 bg-white" />
                          <div className="w-0.5 h-4 md:h-4 bg-white" />
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Labels */}
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6">
                  <span className="backdrop-blur-md bg-white/80 border border-white/60 rounded-md md:rounded-lg px-2.5 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-[#1a1a1a]">
                    BEFORE
                  </span>
                </div>
                <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6">
                  <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] rounded-md md:rounded-lg px-2.5 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-white shadow-lg">
                    AFTER
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}

          {/* Static Comparison */}
          <GlassCard className="p-4 md:p-6">
            <div className="text-center mb-4 md:mb-8">
              <span className="backdrop-blur-sm bg-white/60 border border-white/80 rounded-full px-4 md:px-6 py-1.5 md:py-2.5 text-xs md:text-sm font-bold tracking-wider text-[#1a1a1a]">
                {staticTransformation.label}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
              <div className="relative group overflow-hidden rounded-lg md:rounded-xl">
                <img
                  src={staticTransformation.before}
                  alt="Before"
                  className="w-full h-[200px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6">
                  <span className="backdrop-blur-md bg-white/80 border border-white/60 rounded-md md:rounded-lg px-2.5 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-[#1a1a1a]">
                    BEFORE
                  </span>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg md:rounded-xl">
                <img
                  src={staticTransformation.after}
                  alt="After"
                  className="w-full h-[200px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6">
                  <span className="bg-gradient-to-r from-[#0066ff] to-[#7c3aed] rounded-md md:rounded-lg px-2.5 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-white shadow-lg">
                    AFTER
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
