"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var image_1 = require("next/image");
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var framer_motion_1 = require("framer-motion");
var useIsomorphicLayoutEffect_1 = require("@/utils/useIsomorphicLayoutEffect");
//Register Plugins
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
// Mock Data
var gallery = [
    {
        img: "/images/gallery-1.jpg",
        caption: "Gallery Image",
    },
    {
        img: "/images/gallery-2.jpg",
        caption: "Gallery Image",
    },
    {
        img: "/images/gallery-3.jpg",
        caption: "Gallery Image",
    },
    {
        img: "/images/gallery-4.jpg",
        caption: "Gallery Image",
    },
    {
        img: "/images/gallery-5.jpg",
        caption: "Gallery Image",
    },
];
var PinnedSectionHorizontal = function () {
    var container = (0, react_1.useRef)(null);
    var galleryContainer = (0, react_1.useRef)(null);
    var galleryContent = (0, react_1.useRef)(null);
    var contentBox = (0, react_1.useRef)(null);
    (0, useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect)(function () {
        gsap_1.gsap.to(galleryContent.current, {
            x: -400 + "%",
            ease: "easeIn",
            duration: 2,
            scrollTrigger: {
                trigger: container.current,
                start: "top-=20% top",
                end: function () {
                    var _a;
                    var height =
                        (_a = galleryContent.current) === null || _a === void 0
                            ? void 0
                            : _a.offsetWidth;
                    return "bottom+=".concat(height, " top");
                },
                markers: true,
                scrub: 2,
                pin: container.current,
            },
        });
    }, []);
    return (
        <section ref={container} className="py-20">
            <div className="container flex overflow-x-hidden gap-10">
                <div ref={contentBox} className="w-[50%]">
                    <h2 className="text-7xl">Horizontal Pinning</h2>
                    <p className="mt-8 text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Asperiores nisi saepe itaque praesentium placeat.
                        Odio molestiae sint perspiciatis facere natus autem
                        totam libero, tenetur, at suscipit cupiditate eligendi
                        molestias dolores odit deleniti. Necessitatibus ipsa
                        quisquam non nemo porro aut possimus expedita
                        perspiciatis ipsum sunt, excepturi iure nam, qui quo
                        totam velit cum iste sapiente nihil dicta voluptatem
                        error, dolore voluptate. Porro quam ipsum magnam
                        repellendus itaque cum reiciendis sapiente, dignissimos
                        velit quae. Laboriosam illo unde debitis. Neque adipisci
                        veniam voluptate, animi earum soluta numquam eaque?
                        Perferendis omnis ut voluptate quis, eum ex facilis id
                        autem itaque pariatur at dolorem vel quaerat dicta
                        numquam cumque voluptatibus adipisci doloribus laborum
                        molestias iusto asperiores inventore sunt! A quae dolor
                        id facere eos rem molestiae, necessitatibus est ea,
                        sapiente laboriosam. Ut praesentium iste fuga, officia
                        quod tempore nam minus voluptates? Vitae error
                        voluptatum exercitationem veniam eius, modi ullam saepe
                        assumenda tempora, ducimus similique voluptas ratione.
                        Dolorem natus exercitationem nemo, aperiam obcaecati est
                        recusandae rerum illo, ullam eum sapiente dolor et quo
                        impedit numquam non? Mollitia necessitatibus earum culpa
                        quaerat. Dicta, quisquam. Ea incidunt officia officiis
                        fugiat fuga cumque aperiam, odio aspernatur dolor ipsum
                        autem. Ad, distinctio veritatis aut adipisci ex
                        voluptatum quia tempore modi.
                    </p>
                </div>

                <div
                    ref={galleryContainer}
                    className="w-[50%] overflow-hidden sb-green"
                >
                    <div ref={galleryContent} className="flex w-max">
                        {gallery.map(function (e, index) {
                            return <Item key={index} e={e} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
exports.default = PinnedSectionHorizontal;
var Item = function (_a) {
    var e = _a.e;
    return (
        <div
            className={(0, clsx_1.default)(
                "flex-grow bg-gray-300 flex-shrink-0 flex justify-center sb-blue",
            )}
        >
            <framer_motion_1.motion.div
                initial={{
                    scale: 0.75,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.1,
                        duration: 0.2,
                        ease: "easeOut",
                    },
                }}
                className="gallery-ratio relative"
            >
                <image_1.default fill src={e.img} alt={e.caption} />
            </framer_motion_1.motion.div>
        </div>
    );
};
