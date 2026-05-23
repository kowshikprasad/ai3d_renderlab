"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { IndividualBookDialog } from "./IndividualBookDialog";
import exteriorCover from "../../imports/EXTERIOR__AI_-_RENDERING_overview.jpg";
import interiorCover from "../../imports/image-6.png";
import presentationCover from "../../imports/image-7.png";
import thumbnailExterior from "../../imports/Thumbnail_exterior.png";

export function EbooksSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const books = [
    {
      id: "exterior",
      title: "Exterior AI Rendering",
      image: exteriorCover,
      caseStudy: true,
      features: [
        "Photoreal exterior rendering",
        "Contextual visualization",
        "Day/night transformations",
        "Camera angle control",
        "Landscape enhancement",
        "Realistic people/cars/weather"
      ]
    },
    {
      id: "interior",
      title: "Interior AI Rendering",
      image: interiorCover,
      caseStudy: true,
      features: [
        "Mood lighting systems",
        "Material transformation",
        "Furniture replacement",
        "Cinematic interiors",
        "Moodboard workflows",
        "Atmosphere control"
      ]
    },
    {
      id: "presentation",
      title: "Design Presentation AI",
      image: presentationCover,
      caseStudy: false,
      features: [
        "Architectural boards",
        "Moodboards",
        "Exploded diagrams",
        "Floor plan rendering",
        "Storytelling visuals",
        "Editorial presentation systems"
      ]
    }
  ];

  return (
    <>
      <section className="relative py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-[32px] md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-6 text-[#1a1a1a]">
              The 3 Workflows
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-[#404040] max-w-2xl mx-auto px-2">
              Comprehensive AI-rendering workflows for every architectural visualization need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {books.map((book, i) => (
              <div key={i} className="relative">
                {/* Case study pill — floats 30px above the card top on desktop */}
                {book.caseStudy && (
                  <span className="hidden md:flex absolute -top-[14px] right-4 z-20 items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r from-[#e11d48] to-[#f97316] shadow-md whitespace-nowrap">
                    Case study included
                  </span>
                )}

              <GlassCard
                hover
                className="group overflow-hidden"
              >
                {/* Book Cover Image - Square Format */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={thumbnailExterior}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* BookOpen icon — shifted down 45px total (30+15) */}
                  <div className="absolute top-[57px] left-3 md:top-[69px] md:left-6 backdrop-blur-md bg-white/40 border border-white/60 rounded-lg md:rounded-xl p-1.5 md:p-2.5">
                    <BookOpen className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#0066ff]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8 space-y-3 md:space-y-6">
                  {/* Title + mobile case study pill */}
                  <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    <h3 className="text-lg md:text-2xl font-bold tracking-tight text-[#1a1a1a] leading-tight">{book.title}</h3>
                    {book.caseStudy && (
                      <span className="md:hidden flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r from-[#e11d48] to-[#f97316] shadow-sm whitespace-nowrap">
                        Case study included
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1.5 md:space-y-2.5">
                    {book.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 md:gap-2.5 text-xs md:text-sm text-[#404040]">
                        <span className="text-[#0066ff] mt-0.5 font-bold">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2.5 md:space-y-4 pt-2">
                    <div className="text-center space-y-0.5 md:space-y-1.5">
                      <div className="text-xs md:text-base text-[#737373] line-through opacity-60">₹2200</div>
                      <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent leading-none">
                        ₹1500
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedBookId(book.id);
                        setDialogOpen(true);
                      }}
                      className="w-full py-3 md:py-3.5 rounded-[14px] md:rounded-lg text-sm md:text-base bg-gradient-to-r from-[#0066ff] to-[#7c3aed] text-white font-medium
                        shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30
                        transition-all duration-300"
                    >
                      Preview and Buy Now
                    </button>
                  </div>
                </div>
              </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndividualBookDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        preSelectedBookId={selectedBookId}
      />
    </>
  );
}
