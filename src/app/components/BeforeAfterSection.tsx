"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import sketchupImage from "../../imports/sketchup.webp";
import renderImage from "../../imports/render.webp";
import dayImage from "../../imports/day.webp";
import nightImage from "../../imports/night.webp";
import moodboardImage from "../../imports/moodboard.webp";
import interiorImage from "../../imports/interior.webp";
import { GlassCard } from "./GlassCard";

export function BeforeAfterSection() {
  const interactiveTransformations = [
    {
      before: sketchupImage,
      after: renderImage,
      label: "SketchUp → Photoreal Render",
    },
    {
      before: dayImage,
      after: nightImage,
      label: "Day → Night",
    },
  ];

  const staticTransformation = {
    before: moodboardImage,
    after: interiorImage,
    label: "Moodboard → Interior Visualization",
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
          {/* Interactive Sliders */}
          {interactiveTransformations.map((item, i) => (
            <GlassCard key={i} className="p-4 md:p-6 overflow-hidden">
              {/* Label */}
              <div className="text-center mb-4 md:mb-8">
                <span className="backdrop-blur-sm bg-white/60 border border-white/80 rounded-full px-4 md:px-6 py-1.5 md:py-2.5 text-xs md:text-sm font-bold tracking-wider text-[#1a1a1a]">
                  {item.label}
                </span>
              </div>

              {/* Slider */}
              <div className="relative overflow-hidden rounded-xl">
                <ReactCompareSlider
                  position={50}
                  style={{
                    width: "100%",
                    height: "280px",
                    borderRadius: "16px",
                  }}
                  className="md:!h-[500px]"

                  itemOne={
                    <ReactCompareSliderImage
                      src={item.before}
                      alt="Before"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  }

                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.after}
                      alt="After"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  }

                  handle={
                    <div className="relative flex items-center justify-center h-full w-10 cursor-ew-resize">
                      {/* Line */}
                      <div className="absolute h-full w-[2px] bg-white shadow-lg" />

                      {/* Circle */}
                      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#0066ff] to-[#7c3aed] shadow-2xl border-2 border-white">
                        <div className="flex gap-1">
                          <div className="w-[2px] h-4 bg-white rounded-full" />
                          <div className="w-[2px] h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Before Badge */}
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 z-20">
                  <span className="backdrop-blur-md bg-white/80 border border-white/60 rounded-md md:rounded-lg px-2.5 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-[#1a1a1a]">
                    BEFORE
                  </span>
                </div>

                {/* After Badge */}
                <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 z-20">
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
              {/* Before */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src={staticTransformation.before}
                  alt="Before"
                  className="w-full h-[220px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6">
                  <span className="backdrop-blur-md bg-white/80 border border-white/60 rounded-md md:rounded-lg px-2.5 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-[#1a1a1a]">
                    BEFORE
                  </span>
                </div>
              </div>

              {/* After */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src={staticTransformation.after}
                  alt="After"
                  className="w-full h-[220px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
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