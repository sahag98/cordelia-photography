"use client";
export const isMobile = () => {
  if (typeof window !== "undefined") {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    console.log("Screen Width:", screenWidth);

    const mobileBreakpoint = 768;
    return screenWidth < mobileBreakpoint;
  }

  return false;
};
