"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { IndividualBookDialog } from "./IndividualBookDialog";
import bookCover from "../../imports/image-1.png";

export function BookCoversShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const books = [
    {
      id: "exterior",
      title: "Exterior AI Rendering",
      subtitle: "Workflow Guide",
      isBundle: false
    },
    {
      id: "interior",
      title: "Interior AI Rendering",
      subtitle: "Workflow Guide",
      isBundle: false
    },
    {
      id: "presentation",
      title: "Design Presentation AI",
      subtitle: "Workflow Guide",
      isBundle: false
    },
    {
      id: "bundle",
      title: "Ultimate Bundle",
      subtitle: "Complete System",
      isBundle: true
    }
  ];

  const handleCardClick = (book: typeof books[0]) => {
    if (book.isBundle) {
      document.getElementById("bundle-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setSelectedBookId(book.id);
      setDialogOpen(true);
    }
  };

  return (
    <>
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-[#fafaf9] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3 md:space-y-4"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                Premium AI Rendering Collection
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#404040] max-w-2xl mx-auto">
                Professional workflows designed by architects, for architects
              </p>
            </motion.div>
          </div>

          {/* Book Covers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleCardClick(book)}
              >
                <div className="relative">
                  {/* Bundle pill — floats above card, shifted 30px up + 15px right */}
                  {book.isBundle && (
                    <div className="absolute -top-[18px] -right-[3px] z-20 bg-gradient-to-r from-[#e11d48] to-[#f97316]
                      rounded-full px-2 py-1 md:px-3 md:py-1.5 shadow-lg">
                      <span className="text-[8px] md:text-xs font-bold text-white tracking-wider">
                        BUNDLE
                      </span>
                    </div>
                  )}

                  {/* Book Cover with A4 Aspect Ratio (1:1.414) */}
                  <div
                    className={`relative aspect-[1/1.414] rounded-lg md:rounded-xl overflow-hidden
                      shadow-xl hover:shadow-2xl transition-all duration-500
                      ${book.isBundle
                        ? "ring-2 ring-[#e11d48] ring-offset-2 md:ring-offset-4"
                        : ""
                      }
                      transform hover:scale-105 hover:-translate-y-2`}
                    style={book.isBundle ? {
                      filter: "drop-shadow(0 8px 20px rgba(225,29,72,0.28)) drop-shadow(0 4px 10px rgba(249,115,22,0.18))"
                    } : undefined}
                  >
                    <img
                      src={bookCover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Book Info on Hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 lg:p-6
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-xs md:text-sm lg:text-base font-bold text-white mb-0.5 md:mb-1">
                        {book.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-white/80">
                        {book.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Book Title Below */}
                  <div className="mt-3 md:mt-4 text-center space-y-0.5 md:space-y-1">
                    <h4 className="text-xs md:text-sm lg:text-base font-bold text-[#1a1a1a] leading-tight">
                      {book.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-[#737373]">
                      {book.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
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
