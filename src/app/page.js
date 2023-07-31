"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var scrollProvider_1 = require("@/components/providers/scrollProvider");
var pinnedSectionVertical_1 = require("@/components/ui/pinnedSectionVertical");
var hero_1 = require("@/components/ui/hero");
var pinnedGallery_1 = require("@/components/ui/pinnedGallery");
var pinnedSectionHorizontal_1 = require("@/components/ui/pinnedSectionHorizontal");
var HomePage = function () {
    var hello = "hello";
    return (
        <scrollProvider_1.default>
            <hero_1.default />
            <pinnedSectionVertical_1.default />
            <pinnedGallery_1.default />
            <pinnedSectionHorizontal_1.default />
            <div className="h-screen bg-gray-200 "></div>
        </scrollProvider_1.default>
    );
};
exports.default = HomePage;
