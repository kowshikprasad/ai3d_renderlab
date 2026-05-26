"use client";

import { FormEvent, useState } from "react";

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  price: string;
  onContinue: (formData: { name: string; country: string; email: string }) => Promise<void>;
}

export function CheckoutDialog({ isOpen, onClose, price, onContinue }: CheckoutDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    await onContinue(formData);
    setIsSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-light text-white mb-2">Get Instant Access</h2>
        <p className="text-sm text-white/60 mb-8">Complete your details to continue</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-white/80 mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm text-white/80 mb-2">Country</label>
            <input
              id="country"
              type="text"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Enter your country"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-white/80 mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-[#e11d48] to-[#f97316] text-white rounded-xl hover:from-[#be123c] hover:to-[#ea580c] transition-all duration-300 font-light tracking-wide shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Continuing..." : "Continue to Secure Checkout"}
          </button>
        </form>

        <p className="text-xs text-white/50 mt-4">Your purchase of {price} will proceed through Razorpay securely.</p>
      </div>
    </div>
  );
}
