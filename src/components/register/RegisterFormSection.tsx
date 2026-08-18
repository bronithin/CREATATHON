"use client";

import React, { useState } from "react";
import RegisterSuccessModal from "./RegisterSuccessModal";
import { validateRegistration } from "@/lib/validation";

interface RegisterFormSectionProps {
  activeTab?: "influencer" | "brand";
  onTabChange?: (tab: "influencer" | "brand") => void;
}

export default function RegisterFormSection({
  activeTab: externalTab,
  onTabChange,
}: RegisterFormSectionProps) {
  const [internalTab, setInternalTab] = useState<"influencer" | "brand">("influencer");
  const tab = externalTab !== undefined ? externalTab : internalTab;

  const handleTabSelect = (selectedTab: "influencer" | "brand") => {
    setInternalTab(selectedTab);
    if (onTabChange) {
      onTabChange(selectedTab);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    socialLink: "",
    followerCount: "Under 10k",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = () => {
    const result = validateRegistration({
      tab,
      name: formData.name,
      location: formData.location,
      socialLink: formData.socialLink,
      followerCount: formData.followerCount,
    });

    setErrors(result.errors);
    return result.isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tab,
          name: formData.name,
          location: formData.location,
          socialLink: formData.socialLink,
          followerCount: formData.followerCount,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setShowSuccess(true);
      } else {
        if (data.errors && typeof data.errors === "object") {
          setErrors(data.errors);
        }
        setSubmitError(data.error || "Failed to save registration. Please check your inputs.");
      }
    } catch (err) {
      console.error("Registration submit error:", err);
      setSubmitError("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setSubmitError(null);
    setFormData({
      name: "",
      location: "",
      socialLink: "",
      followerCount: "Under 10k",
    });
  };

  return (
    <>
      <section
        id="registration-form-section"
        className="w-full bg-[#0054D9] py-14 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center select-none"
      >
        <div className="w-full max-w-[343px] flex flex-col items-center">
          {/* Small Top Yellow Label */}
          <span
            className="text-[#FFD200] uppercase text-center mb-3 font-bold block"
            style={{
              fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            JOIN CREATATHON 2026
          </span>

          {/* Large Pink Banner Button */}
          <div className="w-[222px] h-[56px] px-[16px] py-[8px] bg-[#FF0052] flex items-center justify-center mb-6">
            <span className="font-anton text-[32px] sm:text-[34px] leading-none text-white tracking-tight uppercase">
              REGISTER NOW
            </span>
          </div>

          {/* Two-Tab Selector */}
          <div className="w-full flex rounded-none overflow-hidden border border-black/10">
            {/* Tab 1: I'M AN INFLUENCER */}
            <button
              type="button"
              onClick={() => handleTabSelect("influencer")}
              className={`flex-1 py-3 px-2 text-center font-bold uppercase transition-colors cursor-pointer ${
                tab === "influencer"
                  ? "bg-[#FFD300] text-black"
                  : "bg-[#FDF9EB] text-black/60 hover:text-black"
              }`}
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0px",
                verticalAlign: "middle",
              }}
              aria-selected={tab === "influencer"}
              role="tab"
            >
              I&apos;M AN INFLUENCER
            </button>

            {/* Tab 2: I'M A BRAND */}
            <button
              type="button"
              onClick={() => handleTabSelect("brand")}
              className={`flex-1 py-3 px-2 text-center font-bold uppercase transition-colors cursor-pointer ${
                tab === "brand"
                  ? "bg-[#FFD300] text-black"
                  : "bg-[#FDF9EB] text-black/60 hover:text-black"
              }`}
              style={{
                fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0px",
                verticalAlign: "middle",
              }}
              aria-selected={tab === "brand"}
              role="tab"
            >
              I&apos;M A BRAND
            </button>
          </div>

          {/* White Registration Form Card */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-5 sm:p-6 flex flex-col gap-4 shadow-xl"
            noValidate
          >
            {/* Field 1: Name / Handle */}
            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="reg-name"
                className="text-[#18181B] font-bold"
                style={{
                  fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                }}
              >
                {tab === "influencer" ? "Name / Handle" : "Brand / Company Name"}
              </label>
              <input
                id="reg-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={tab === "influencer" ? "@creatorname" : "e.g. Acme Studio"}
                className={`w-full h-[55px] px-4 border text-[#18181B] bg-white text-[16px] font-normal placeholder-[#18181B]/40 focus:outline-hidden focus:ring-2 focus:ring-[#0054D9] ${
                  errors.name ? "border-[#FF0052] ring-1 ring-[#FF0052]" : "border-black"
                }`}
                disabled={isSubmitting}
                aria-required="true"
              />
              {errors.name && (
                <span className="text-[#FF0052] font-jetbrains text-[11px] font-bold">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Field 2: Location */}
            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="reg-location"
                className="text-[#18181B] font-bold"
                style={{
                  fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                }}
              >
                Location
              </label>
              <input
                id="reg-location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                className={`w-full h-[55px] px-4 border text-[#18181B] bg-white text-[16px] font-normal placeholder-[#18181B]/40 focus:outline-hidden focus:ring-2 focus:ring-[#0054D9] ${
                  errors.location ? "border-[#FF0052] ring-1 ring-[#FF0052]" : "border-black"
                }`}
                disabled={isSubmitting}
                aria-required="true"
              />
              {errors.location && (
                <span className="text-[#FF0052] font-jetbrains text-[11px] font-bold">
                  {errors.location}
                </span>
              )}
            </div>

            {/* Field 3: Primary Social Link */}
            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="reg-social"
                className="text-[#18181B] font-bold"
                style={{
                  fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                }}
              >
                {tab === "influencer" ? "Primary Social Link" : "Website / Social Link"}
              </label>
              <input
                id="reg-social"
                name="socialLink"
                type="text"
                value={formData.socialLink}
                onChange={handleChange}
                placeholder={tab === "influencer" ? "instagram.com/..." : "brandwebsite.com"}
                className={`w-full h-[55px] px-4 border text-[#18181B] bg-white text-[16px] font-normal placeholder-[#18181B]/40 focus:outline-hidden focus:ring-2 focus:ring-[#0054D9] ${
                  errors.socialLink ? "border-[#FF0052] ring-1 ring-[#FF0052]" : "border-black"
                }`}
                disabled={isSubmitting}
                aria-required="true"
              />
              {errors.socialLink && (
                <span className="text-[#FF0052] font-jetbrains text-[11px] font-bold">
                  {errors.socialLink}
                </span>
              )}
            </div>

            {/* Field 4: Follower Count */}
            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="reg-followers"
                className="text-[#18181B] font-bold"
                style={{
                  fontFamily: "'Halenoir', var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                }}
              >
                {tab === "influencer" ? "Follower Count" : "Target Audience Size"}
              </label>
              <div className="relative">
                <select
                  id="reg-followers"
                  name="followerCount"
                  value={formData.followerCount}
                  onChange={handleChange}
                  className="w-full h-[57px] px-4 border border-black text-[#18181B] bg-white text-[16px] font-normal focus:outline-hidden focus:ring-2 focus:ring-[#0054D9] appearance-none cursor-pointer pr-10"
                  disabled={isSubmitting}
                >
                  <option value="Under 10k">Under 10k</option>
                  <option value="10k - 50k">10k - 50k</option>
                  <option value="50k - 200k">50k - 200k</option>
                  <option value="200k - 1M">200k - 1M</option>
                  <option value="1M+">1M+</option>
                </select>
                {/* Custom chevron dropdown icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 2L7 8L13 2"
                      stroke="#18181B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Global Submit Error Message */}
            {submitError && (
              <div className="p-3 bg-[#FFF4F6] border-2 border-[#FF0052] text-[#FF0052] font-jetbrains text-xs font-bold text-center">
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[55px] bg-[#FFD300] border-[2px] border-[#FF0052] rounded-full shadow-[0px_5px_0px_#FF0052] flex items-center justify-center mt-2 cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0px_1px_0px_#FF0052] disabled:opacity-70 disabled:cursor-not-allowed"
              aria-label="Submit details"
            >
              <span
                className="font-anton uppercase tracking-[0px]"
                style={{
                  color: "#FF0052",
                  fontFamily: "var(--font-anton), Anton, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "28px",
                  lineHeight: "21px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  textTransform: "uppercase",
                }}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT DETAILS"}
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Interactive Success Feedback Modal */}
      <RegisterSuccessModal
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
        tab={tab}
        formData={formData}
      />
    </>
  );
}
