"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var image_1 = require("next/image");
var useIsomorphicLayoutEffect_1 = require("@/utils/useIsomorphicLayoutEffect");
// Mock Data
var gallery = [
    {
        img: "/images/gallery-1.jpg",
        caption: "Gallery Image ",
    },
    {
        img: "/images/gallery-2.jpg",
        caption: "Gallery Image ",
    },
    {
        img: "/images/gallery-3.jpg",
        caption: "Gallery Image ",
    },
    {
        img: "/images/gallery-4.jpg",
        caption: "Gallery Image ",
    },
    {
        img: "/images/gallery-5.jpg",
        caption: "Gallery Image ",
    },
];
var PinnedSectionVertical = function () {
    var container = (0, react_1.useRef)(null);
    var box = (0, react_1.useRef)(null);
    var contentBox = (0, react_1.useRef)(null);
    var description = (0, react_1.useRef)(null);
    var heading = (0, react_1.useRef)(null);
    var galleryBorder = (0, react_1.useRef)(null);
    (0, useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect)(function () {
        // Register Plugins
        gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
        //Pinning Left Content Box on Scroll Trigger
        var contentAnimation = ScrollTrigger_1.ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: contentBox.current,
            pinSpacing: false,
            snap: 1 / (gallery.length - 1),
        });
        // Pinning Gallery Border
        var galleryAnimation = gsap_1.gsap.from(galleryBorder.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: galleryBorder.current,
                pinSpacing: false,
            },
        });
        //Heading Animation
        var headingAnimation = gsap_1.gsap.from(heading.current, {
            opacity: 0,
            x: -200,
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
                end: "top+=500 center",
                scrub: true,
            },
        });
        //Description Animation
        var descriptionAnimation = gsap_1.gsap.from(description.current, {
            opacity: 0,
            y: -200,
            delay: 3,
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "top+=800px top",
                scrub: true,
            },
        });
        return function () {
            contentAnimation.kill();
            galleryAnimation.kill();
            headingAnimation.kill();
            descriptionAnimation.kill();
        };
    }, []);
    return (
        <section>
            <div ref={container} className="h-full bg-black ">
                <div className="container flex h-full relative">
                    <div ref={contentBox} className="w-[50%]  py-20">
                        <h2 ref={heading} className="text-8xl">
                            About Us
                        </h2>
                        <p
                            ref={description}
                            className="mt-12 text-xl leading-relaxed tracking-wide "
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quia qui repudiandae sed autem adipisci
                            necessitatibus, eveniet aut tenetur ea molestiae
                            explicabo expedita voluptas cumque laudantium nisi
                            facilis dolorem repellendus, optio aspernatur a
                            inventore magni labore eum temporibus! Pariatur
                            doloremque, dolore possimus aliquid, aut magni non
                            velit vero error veritatis rerum dicta fuga
                            perferendis minima expedita totam in placeat.
                            Expedita temporibus perferendis odit! Sint sapiente
                            distinctio voluptatibus ducimus saepe dignissimos,
                            sunt placeat ipsa repellat libero earum in eaque
                            doloremque inventore maxime? Cum, voluptas! Aut,
                            possimus odit voluptas nobis hic quisquam?
                            Repudiandae sint numquam hic, sequi soluta sed iure
                            tenetur cumque labore iste voluptate quam, atque
                            voluptatibus at illum porro qui facere! Quaerat
                            consequuntur illum facere libero, reprehenderit
                            dolorum? Voluptas debitis dicta laudantium? Ea nisi,
                            exercitationem tempore laboriosam dolor deserunt
                            delectus architecto quibusdam nostrum quis eveniet
                            ipsam sapiente temporibus culpa mollitia veritatis
                            eius at eum, laborum consequatur. Repudiandae vero
                            qui provident doloremque excepturi ut autem. Nemo,
                            quos asperiores, eius, dolores assumenda debitis
                            iste eaque pariatur architecto necessitatibus minima
                            deserunt error suscipit beatae repellendus?
                            Perspiciatis impedit aut obcaecati, earum non nemo
                            aspernatur sunt ad tempora dignissimos repudiandae
                            molestiae reiciendis at labore corporis ratione
                            omnis? Culpa corrupti itaque accusamus molestias
                            doloribus, dignissimos in tempore.
                        </p>
                    </div>
                    <div
                        ref={box}
                        className="relative w-[50%] flex flex-col items-center"
                    >
                        <div
                            ref={galleryBorder}
                            className="absolute inset-0 h-screen w-full flex items-center justify-center "
                        >
                            <div className="gallery-border gallery-ratio"></div>
                        </div>
                        {gallery.map(function (e, index) {
                            return <ImageContainer data={e} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
exports.default = PinnedSectionVertical;
var ImageContainer = function (_a) {
    var data = _a.data;
    var container = (0, react_1.useRef)(null);
    (0, useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect)(function () {
        var tl = gsap_1.gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top center+=100",
                end: function () {
                    var _a;
                    return "".concat(
                        (_a = container.current) === null || _a === void 0
                            ? void 0
                            : _a.offsetHeight,
                        " top",
                    );
                },
                scrub: true,
            },
        });
        tl.from(container.current, {
            opacity: 0,
            duration: 0.2,
            scale: 0.8,
            filter: "blur(10px)",
        })
            .to(container.current, {
                opacity: 1,
                scale: 1,
                filter: "none",
            })
            .to(container.current, {
                opacity: 0,
                duration: 0.2,
                scale: 0.8,
                filter: "blur(10px)",
            });
    }, []);
    return (
        <div className="h-screen w-full  flex items-center justify-center">
            <div ref={container} className="gallery-ratio  overflow-hidden">
                <image_1.default fill src={data.img} alt={data.caption} />
            </div>
        </div>
    );
};
