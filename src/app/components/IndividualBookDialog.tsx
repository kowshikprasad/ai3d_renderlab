"use client";

import * as React from "react";
import { useState } from "react";
import { handlePayment } from "../../utils/razorpay";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { CheckoutDialog } from "./CheckoutDialog";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import exterior1 from "../../imports/exterior1.webp";
import exterior2 from "../../imports/exterior2.webp";
import exterior3 from "../../imports/exterior3.webp";
import interior1 from "../../imports/interior1.webp";
import interior2 from "../../imports/interior2.webp";
import interior3 from "../../imports/interior3.webp";
import design1 from "../../imports/design1.webp";
import design2 from "../../imports/design2.webp";
import design3 from "../../imports/design3.webp";

interface IndividualBookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedBookId?: string | null;
  onPayNowClick?: (price: string) => void;
}

interface Book {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  features: string[];
  previewImages: string[];
  heroImage: string;
}

const books: Book[] = [
  {
    id: "exterior",
    title: "Exterior AI Rendering",
    description: "Photoreal exterior visualization workflows",
    price: 1500,
    originalPrice: 2200,
    features: [
      "Photoreal exterior rendering",
      "Contextual visualization",
      "Day/night transformations",
      "Camera angle control",
    ],
    previewImages: [
      exterior2,
      exterior3,
    ],
    heroImage: exterior1
  },
  {
    id: "interior",
    title: "Interior AI Rendering",
    description: "Professional interior visualization systems",
    price: 1500,
    originalPrice: 2200,
    features: [
      "Mood lighting systems",
      "Material transformation",
      "Furniture replacement",
      "Cinematic interiors",
    ],
    previewImages: [
      interior2,
      interior3,
    ],
    heroImage: interior1
  },
  {
    id: "presentation",
    title: "Design Presentation AI",
    description: "Architectural presentation workflows",
    price: 1500,
    originalPrice: 2200,
    features: [
      "Architectural boards",
      "Moodboards",
      "Exploded diagrams",
      "Floor plan rendering",
    ],
    previewImages: [
      design2,
      design3,
    ],
    heroImage: design1
  },
];

export function IndividualBookDialog({ open, onOpenChange, preSelectedBookId, onPayNowClick }: IndividualBookDialogProps) {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutAmount, setCheckoutAmount] = useState(0);
  const [checkoutPriceLabel, setCheckoutPriceLabel] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Auto-select book when preSelectedBookId is provided
  React.useEffect(() => {
    if (preSelectedBookId && open) {
      setSelectedBook(preSelectedBookId);
    } else if (!open) {
      setSelectedBook(null);
    }
  }, [preSelectedBookId, open]);

  const handleBookSelect = (bookId: string) => {
    setSelectedBook(bookId);
    setShowPreview(false);
  };

  const handlePreview = (bookId: string) => {
    setSelectedBook(bookId);
    setShowPreview(true);
  };

  const handleBack = () => {
    setSelectedBook(null);
    setShowPreview(false);
  };

  const selectedBookData = books.find((b) => b.id === selectedBook);

  const openCheckout = (amount: number, priceLabel: string) => {
    if (isProcessing) return;
    onOpenChange(false);
    setCheckoutAmount(amount);
    setCheckoutPriceLabel(priceLabel);
    setTimeout(() => setIsCheckoutOpen(true), 120);
  };

  const handleCheckoutContinue = async (_formData: { name: string; country: string; email: string }) => {
    setIsCheckoutOpen(false);
    setIsProcessing(true);
    await handlePayment(checkoutAmount);
    setIsProcessing(false);
  };

  const handlePayNow = () => {
    if (!selectedBookData) return;

    if (onPayNowClick) {
      onPayNowClick(`₹${selectedBookData.price}`);
      onOpenChange(false);
      return;
    }

    openCheckout(selectedBookData.price * 100, `₹${selectedBookData.price}`);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-full h-full sm:h-auto sm:max-w-[900px] backdrop-blur-xl bg-white/95 border-0 sm:border border-white/40 shadow-[0_12px_48px_rgba(0,0,0,0.15)] max-h-screen sm:max-h-[85vh] overflow-hidden p-0 sm:rounded-lg">
          {!selectedBook ? (
            <div className="pt-[70px] pb-[70px] px-3 sm:p-6 overflow-y-auto max-h-screen sm:max-h-[85vh]">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-2xl font-bold text-center mb-1 sm:mb-2">
                  Choose Your Book
                </DialogTitle>
                <DialogDescription className="text-center text-muted-foreground text-xs sm:text-sm">
                  Select an individual ebook to purchase
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-2.5 sm:gap-4 mt-3 sm:mt-6">
                {books.map((book) => (
                  <GlassCard key={book.id} hover className="p-3 sm:p-6">
                    <div className="flex justify-between items-start mb-2 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-2">{book.title}</h3>
                        <p className="text-[10px] sm:text-sm text-muted-foreground mb-1 sm:mb-2">{book.description}</p>
                      </div>
                      <div className="text-right ml-2 sm:ml-4">
                        <div className="text-[10px] sm:text-sm text-[#737373] line-through opacity-60">₹{book.originalPrice}</div>
                        <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                          ₹{book.price}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-4">
                      {book.features.map((feature, idx) => (
                        <li key={idx} className="text-[10px] sm:text-sm flex items-start gap-1.5 sm:gap-2">
                          <span className="text-[#0066ff] mt-0.5 sm:mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 sm:gap-3">
                      <button
                        onClick={() => onOpenChange(false)}
                        className="flex-1 h-9 sm:h-10 rounded-[14px] sm:rounded-lg text-xs sm:text-sm backdrop-blur-md bg-white/60 border-2 border-gray-200 text-gray-700 font-medium
                          hover:bg-white/80 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => handleBookSelect(book.id)}
                        className="flex-1 h-9 sm:h-10 rounded-[14px] sm:rounded-lg text-xs sm:text-sm bg-gradient-to-r from-[#0066ff] to-[#7c3aed] text-white font-medium
                          shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30
                          transition-all duration-300"
                      >
                        Preview and Buy Now
                      </button>
                    </div>
                    <p className="text-center text-[9px] sm:text-xs text-[#737373] mt-1.5 sm:mt-3">
                      Receive instantly after purchase
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:grid md:grid-cols-2 h-screen md:h-[85vh] md:max-h-[650px]">
              {/* Mobile: Photos First, Form After */}
              <div className="md:hidden relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] overflow-y-auto flex-1">
                <div className="pt-[70px] px-3 pb-[calc(70px+6rem)] space-y-2">
                  {/* Hero Image 16:9 */}
                  {selectedBookData?.heroImage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-xl overflow-hidden shadow-lg mb-3"
                    >
                      <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-xl p-1.5">
                        <img
                          src={selectedBookData.heroImage}
                          alt="Hero preview"
                          className="w-full aspect-video object-cover rounded-lg"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Preview Images */}
                  {selectedBookData?.previewImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative rounded-xl overflow-hidden shadow-lg"
                    >
                      <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-xl p-1.5">
                        <img
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          className="w-full aspect-[1/1.414] object-cover rounded-lg"
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Purchase Info After Photos */}
                  <div className="bg-white p-4 rounded-xl shadow-lg space-y-3 mt-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{selectedBookData?.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Preview the content below
                      </p>
                      <div className="space-y-0.5 mb-3">
                        <div className="text-sm text-[#737373] line-through opacity-60">
                          ₹{selectedBookData?.originalPrice}
                        </div>
                        <div className="text-xl font-bold bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                          ₹{selectedBookData?.price}
                        </div>
                        <p className="text-xs text-[#737373] pt-0.5">
                          Receive instantly after purchase
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-lg p-3 border border-[#0066ff]/10">
                      <h4 className="text-xs font-bold mb-2 text-[#1a1a1a]">What's Included:</h4>
                      <ul className="space-y-1.5">
                        {selectedBookData?.features.map((feature, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2">
                            <span className="text-[#0066ff] mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sticky Bottom Buttons (Mobile Only) */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 space-y-2 shadow-lg z-50">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handlePayNow}
                    className="w-full h-10 rounded-[14px] text-sm bg-gradient-to-r from-[#0066ff] to-[#7c3aed] text-white font-medium
                      shadow-lg shadow-blue-500/20 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isProcessing ? "Processing..." : `Pay Now - ₹${selectedBookData?.price}`}
                  </button>
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full h-10 rounded-[14px] text-sm backdrop-blur-md bg-white/60 border-2 border-gray-200 text-gray-700 font-medium
                      transition-all duration-300"
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* Desktop: Side-by-side Layout */}
              {/* Left Side - Preview Images (Desktop Only) */}
              <div className="hidden md:block relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-4 overflow-y-auto">
                <div className="space-y-3">
                  {/* Hero Image 16:9 */}
                  {selectedBookData?.heroImage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-xl overflow-hidden shadow-lg mb-4"
                    >
                      <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-xl p-2">
                        <img
                          src={selectedBookData.heroImage}
                          alt="Hero preview"
                          className="w-full aspect-video object-cover rounded-lg"
                        />
                      </div>
                    </motion.div>
                  )}

                  {selectedBookData?.previewImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative rounded-xl overflow-hidden shadow-lg"
                    >
                      <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-xl p-2">
                        <img
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          className="w-full aspect-[1/1.414] object-cover rounded-lg"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - Sticky Purchase Info (Desktop Only) */}
              <div className="hidden md:block relative bg-white p-4 overflow-y-auto">
                <div className="md:sticky md:top-0">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold mb-2">
                      {selectedBookData?.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm mb-3">
                      Preview the content below
                    </DialogDescription>
                    <div className="space-y-1 mb-4">
                      <div className="text-lg text-[#737373] line-through opacity-60">
                        ₹{selectedBookData?.originalPrice}
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                        ₹{selectedBookData?.price}
                      </div>
                      <p className="text-xs text-[#737373] pt-1">
                        Receive instantly after purchase
                      </p>
                    </div>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-lg p-4 border border-[#0066ff]/10">
                      <h4 className="text-sm font-bold mb-3 text-[#1a1a1a]">What's Included:</h4>
                      <ul className="space-y-2">
                        {selectedBookData?.features.map((feature, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-[#0066ff] mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={handlePayNow}
                        className="w-full h-12 rounded-lg text-base bg-gradient-to-r from-[#0066ff] to-[#7c3aed] text-white font-medium
                          shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30
                          transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isProcessing ? "Processing..." : `Pay Now - ₹${selectedBookData?.price}`}
                      </button>
                      <button
                        type="button"
                        onClick={handleBack}
                        className="w-full h-12 rounded-lg text-base backdrop-blur-md bg-white/60 border-2 border-gray-200 text-gray-700 font-medium
                          hover:bg-white/80 transition-all duration-300"
                      >
                        Back
                      </button>
                    </div>

                    <p className="text-center text-xs text-muted-foreground pt-1">
                      Instant digital access after purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CheckoutDialog
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        price={checkoutPriceLabel}
        onContinue={handleCheckoutContinue}
      />
    </>
  );
}
