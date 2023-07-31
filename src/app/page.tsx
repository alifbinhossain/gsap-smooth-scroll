import React from "react";
import ScrollProvider from "@/components/providers/scrollProvider";
import PinnedSectionVertical from "@/components/ui/pinnedSectionVertical";
import Hero from "@/components/ui/hero";
import PinnedGallery from "@/components/ui/pinnedGallery";
import PinnedSectionHorizontal from "@/components/ui/pinnedSectionHorizontal";

const HomePage = () => {
    const hello = "hello";
    return (
        <ScrollProvider>
            <Hero />
            <PinnedSectionVertical />
            <PinnedGallery />
            <PinnedSectionHorizontal />
            <div className="h-screen bg-gray-200 "></div>
        </ScrollProvider>
    );
};

export default HomePage;
