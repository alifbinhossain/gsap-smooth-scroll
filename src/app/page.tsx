import ScrollProvider from "@/components/providers/scrollProvider";
import PinnedSectionVertical from "@/components/ui/pinnedSectionVertical";
import Hero from "@/components/ui/hero";
import React from "react";

const HomePage = () => {
  return (
    <ScrollProvider>
      <Hero />
      <PinnedSectionVertical />
    </ScrollProvider>
  );
};

export default HomePage;
