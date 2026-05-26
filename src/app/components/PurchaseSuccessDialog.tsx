"use client";

import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface PurchaseSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  downloadUrl?: string | null;
}

export function PurchaseSuccessDialog({ open, onOpenChange, downloadUrl }: PurchaseSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 p-8">
        <DialogHeader className="items-center gap-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 border border-white/20 shadow-lg shadow-black/10">
            <CheckCircle className="h-11 w-11 text-[#4f46e5]" />
          </div>
          <div className="space-y-3 text-center">
            <DialogTitle className="text-3xl font-semibold text-[#111827]">
              Thank You For Your Purchase
            </DialogTitle>
            <DialogDescription className="text-sm text-[#374151]">
              Check your email to download your file.
            </DialogDescription>
          </div>
        </DialogHeader>

        {downloadUrl ? (
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#111827]/95 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#111827]"
            >
              Download Now
            </a>
            <p className="text-center text-xs text-[#475569]">
              If you did not receive the email, use this direct download link.
            </p>
          </div>
        ) : null}

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center justify-center rounded-2xl bg-[#111827]/95 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#111827]"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
