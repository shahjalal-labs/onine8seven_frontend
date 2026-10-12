"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("gdpr-consent");
      if (!consent) {
        setShowBanner(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdpr-consent", "accepted");
    setShowBanner(false);
    // In a real app, this is where you'd enable tracking scripts/cookies
    // e.g., window.dataLayer.push({'event': 'cookie_consent_accepted'});
  };

  const handleReject = () => {
    localStorage.setItem("gdpr-consent", "rejected");
    setShowBanner(false);
    // Remove any non-essential cookies if they exist
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#202020] text-white z-100 px-4 py-4 md:py-6 shadow-2xl border-t border-gray-700 font-sans">
      <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-sm md:text-base leading-relaxed montserrat text-gray-300">
          <p>
            We use cookies to improve your experience on our website, analyze
            our traffic, and personalize content. <br /> By clicking
            &quot;Accept All&quot;, you consent to our use of cookies. If you
            click &quot;Reject All&quot;, only essential cookies will be used.
          </p>
        </div>
        <div className="flex flex-row gap-3 md:gap-4 shrink-0 w-full md:w-auto">
          <button
            onClick={handleReject}
            className="flex-1 md:flex-none border border-gray-500 hover:bg-gray-800 text-white font-medium px-6 py-2 transition-colors montserrat text-sm uppercase tracking-wide cursor-pointer"
          >
            Reject All
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 transition-colors montserrat text-sm uppercase tracking-wide cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
