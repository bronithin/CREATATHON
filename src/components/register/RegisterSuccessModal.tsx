"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface RegisterSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab: "influencer" | "brand";
  registrationId?: string;
  formData: {
    name: string;
    location: string;
    socialLink: string;
    followerCount: string;
  };
}

export default function RegisterSuccessModal({
  isOpen,
  onClose,
  tab,
  registrationId,
  formData,
}: RegisterSuccessModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[360px] bg-[#FDF9EB] rounded-2xl border-[3px] border-black p-6 shadow-[6px_6px_0px_#000000] relative animate-in zoom-in-95 duration-150 flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Badge */}
        <div className="w-14 h-14 rounded-full bg-[#00D890] border-[2.5px] border-black flex items-center justify-center shadow-[3px_3px_0px_#000000] mb-3">
          <CheckCircle2 className="w-8 h-8 text-black" strokeWidth={2.5} />
        </div>

        <span className="font-jetbrains text-[10px] font-bold uppercase tracking-wider bg-[#FF0052] text-white px-3 py-1 rounded-md border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000] mb-2">
          REGISTRATION RECEIVED
        </span>

        <h3 className="font-anton text-[26px] leading-tight text-[#18181B] uppercase m-0">
          YOU&apos;RE IN THE MIX!
        </h3>

        {/* Highlighted Registration ID Card */}
        {registrationId && (
          <div className="w-full bg-[#FFD200] border-[2px] border-black rounded-xl py-2 px-3 my-3 flex items-center justify-between shadow-[3px_3px_0px_#000000]">
            <span className="font-jetbrains text-[11px] font-bold text-black/80">
              REGISTRATION ID:
            </span>
            <span className="font-anton text-[20px] text-[#FF0052] tracking-wider leading-none">
              {registrationId}
            </span>
          </div>
        )}

        <p className="text-[13px] leading-[1.4] text-[#18181B]/85 font-medium mt-1 mb-4">
          Thank you for registering as a{" "}
          <strong className="text-[#0054D9] uppercase font-jetbrains font-bold">
            {tab}
          </strong>
          . Our creator relations team will review your details (
          <span className="font-mono font-bold text-black">{formData.name}</span>
          ) and get in touch via email/social.
        </p>

        {/* Info Box */}
        <div className="w-full bg-white p-3.5 rounded-xl border-[1.5px] border-black/20 text-left text-xs text-[#27272A] space-y-1 mb-5 font-jetbrains">
          {registrationId && (
            <div className="flex justify-between pb-1 border-b border-black/10">
              <span className="text-black/60">ID:</span>
              <span className="font-bold text-[#FF0052]">{registrationId}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-black/60">HANDLE:</span>
            <span className="font-bold">{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/60">LOCATION:</span>
            <span className="font-bold">{formData.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/60">CATEGORY:</span>
            <span className="font-bold">{formData.followerCount}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-[#FFD200] text-black font-anton text-[16px] uppercase rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
          >
            AWESOME, THANKS! 👍
          </button>

          <Link
            href="/"
            className="w-full py-2.5 bg-white text-black font-jetbrains text-[12px] font-bold uppercase rounded-xl border-[1.5px] border-black/30 hover:bg-black hover:text-white transition-colors text-center inline-flex items-center justify-center gap-1.5"
          >
            <span>BACK TO HOME</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
