"use client";

import { useState } from "react";
import { handlePayment } from "../../utils/razorpay";
import { sendProductEmail } from "../../utils/sendProductEmail";
import { CheckoutDialog } from "./CheckoutDialog";
import { PurchaseSuccessDialog } from "./PurchaseSuccessDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import exteriorCover from "../../imports/exterior-cover.webp";
import interiorCover from "../../imports/interior-cover.webp";
import designCover from "../../imports/design-cover.webp";

interface BundlePurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPayNowClick?: (price: string) => void;
}

export function BundlePurchaseDialog({ open, onOpenChange, onPayNowClick }: BundlePurchaseDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutAmount, setCheckoutAmount] = useState(333300);
  const [checkoutPriceLabel, setCheckoutPriceLabel] = useState("₹3333");
  const [selectedProduct, setSelectedProduct] = useState("ultimate-ai-rendering-pro-bundle");
  const [selectedAmount, setSelectedAmount] = useState(333300);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerCountry, setBuyerCountry] = useState("");
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [successDownloadUrl, setSuccessDownloadUrl] = useState<string | null>(null);

  const bundleBooks = [
    { title: "Exterior AI Rendering", subtitle: "Complete Workflow Guide", thumbnail: exteriorCover },
    { title: "Interior AI Rendering", subtitle: "Complete Workflow Guide", thumbnail: interiorCover },
    { title: "Design Presentation AI", subtitle: "Complete Workflow Guide", thumbnail: designCover }
  ];

  const openCheckout = (amount: number, priceLabel: string) => {
    if (isProcessing) return;
    onOpenChange(false);
    setSelectedProduct("ultimate-ai-rendering-pro-bundle");
    setSelectedAmount(amount);
    setCheckoutAmount(amount);
    setCheckoutPriceLabel(priceLabel);
    setTimeout(() => setIsCheckoutOpen(true), 120);
  };

  const handleCheckoutContinue = async (formData: { name: string; country: string; email: string }) => {
    setBuyerName(formData.name);
    setBuyerEmail(formData.email);
    setBuyerCountry(formData.country);
    setIsCheckoutOpen(false);
    setIsProcessing(true);

    try {
      await handlePayment(checkoutAmount, {
        prefillName: formData.name,
        onSuccess: async () => {
          const emailResult = await sendProductEmail({
            name: formData.name,
            email: formData.email,
            productType: selectedProduct,
          });
          setSuccessDownloadUrl(emailResult.downloadUrl || null);
          setSuccessDialogOpen(true);
        },
      });
    } catch (error) {
      console.error(error);
      alert("Payment or delivery failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = () => {
    if (onPayNowClick) {
      onPayNowClick("₹3333");
      onOpenChange(false);
      return;
    }

    openCheckout(333300, "₹3333");
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto backdrop-blur-xl bg-white/95 border border-white/40 shadow-[0_12px_48px_rgba(0,0,0,0.15)]">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl font-bold text-center mb-1 md:mb-2">
              Get The Complete Bundle
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-xs md:text-sm">
              Professional AI-rendering system for architects
            </DialogDescription>
          </DialogHeader>

          {/* 3 Vertically Stacked Book Covers */}
          <div className="space-y-2 md:space-y-3 my-3 md:my-4">
            {bundleBooks.map((book, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg p-2 md:p-3 border border-[#0066ff]/10"
              >
                <div className="w-14 h-16 md:w-20 md:h-24 flex-shrink-0 rounded overflow-hidden shadow-md">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-base font-bold text-[#1a1a1a] leading-tight mb-0.5 md:mb-1">
                    {book.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-[#737373]">{book.subtitle}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-[#0066ff] to-[#7c3aed] flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Display */}
          <div className="text-center py-2 md:py-3 border-t border-b border-[#0066ff]/10 my-3 md:my-4">
            <div className="text-xs md:text-sm text-[#737373] mb-0.5 md:mb-1">Total Value</div>
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
              ₹3333
            </div>
            <div className="text-[10px] md:text-xs text-[#737373] mt-0.5 md:mt-1">
              Save ₹2667 • Limited offer for first 99 members
            </div>
          </div>

          <div className="space-y-2 md:space-y-3 pt-1 md:pt-2">
            <button
              type="button"
              disabled={isProcessing}
              onClick={handleSubmit}
              className="w-full h-10 md:h-12 rounded-lg bg-gradient-to-r from-[#0066ff] via-[#5b21b6] to-[#7c3aed] text-white font-bold text-sm md:text-base
                shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30
                transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing ? "Processing..." : "Pay Now - ₹3333"}
            </button>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="w-full h-10 md:h-12 rounded-lg backdrop-blur-md bg-white/60 border-2 border-gray-200 text-gray-700 font-medium text-sm md:text-base
                hover:bg-white/80 transition-all duration-300"
            >
              Back
            </button>
          </div>

          <p className="text-center text-[10px] md:text-xs text-muted-foreground mt-2">
            Secure access link will be sent instantly after purchase.
          </p>
        </DialogContent>
      </Dialog>

      <CheckoutDialog
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        price={checkoutPriceLabel}
        onContinue={handleCheckoutContinue}
      />

      <PurchaseSuccessDialog
        open={successDialogOpen}
        onOpenChange={setSuccessDialogOpen}
        downloadUrl={successDownloadUrl}
      />
    </>
  );
}
