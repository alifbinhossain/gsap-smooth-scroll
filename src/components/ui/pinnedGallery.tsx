"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayoutEffect";

//Mock Data
const gallery = [
    {
        img: "/images/country-gallery-1.jpg",
        caption: "Switzerland",
    },
    {
        img: "/images/country-gallery-2.jpg",
        caption: "China",
    },
    {
        img: "/images/country-gallery-3.jpg",
        caption: "Spain",
    },
    {
        img: "/images/country-gallery-4.jpg",
        caption: "Italy",
    },
    {
        img: "/images/country-gallery-5.jpg",
        caption: "Prague",
    },
];

const PinnedGallery = () => {
    const [activeImage, setActiveImage] = useState<string>(gallery[0].img);
    const imageContainer = useRef<HTMLDivElement | null>(null);
    const contentContainer = useRef<HTMLDivElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        // Register Plugins
        gsap.registerPlugin(ScrollTrigger);

        //Image Container Animation
        const imageContainerAnimation = ScrollTrigger.create({
            trigger: imageContainer.current,
            endTrigger: contentContainer.current,
            start: "top top",
            end: "bottom center+=100",
            scrub: true,
            pin: imageContainer.current,
            pinSpacing: false,
        });

        return () => {
            imageContainerAnimation.kill();
        };
    }, []);

    return (
        <section className="">
            <div className="container flex  py-40">
                <div
                    ref={imageContainer}
                    className="w-[40%] h-screen flex pt-20"
                >
                    <div className="gallery-ratio ">
                        <Image fill src={activeImage} alt="Gallery Image" />
                    </div>
                </div>
                <div ref={contentContainer} className="flex-1  pt-20">
                    <h2 className="text-7xl">Explore the World</h2>
                    <p className="mt-10 text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Autem, necessitatibus delectus hic distinctio
                        totam nostrum explicabo expedita molestias, ipsum libero
                        corrupti atque dolorem natus laudantium, aliquam quia
                        pariatur. Ipsum enim commodi accusantium nulla veniam
                        quibusdam, consequuntur hic temporibus, nostrum minus
                        dignissimos nisi sed quo fugit itaque officiis aut
                        debitis quidem error recusandae autem! Corporis quo aut
                        labore ipsam ullam. Nemo temporibus labore ea impedit
                        alias eligendi delectus explicabo ullam sed a, quos quis
                        minus, sint quia, itaque praesentium illo reprehenderit
                        exercitationem! Quas corrupti, praesentium eaque eveniet
                        repudiandae vitae consectetur perferendis. Ad recusandae
                        ipsa nulla consequuntur beatae quae animi eveniet
                        asperiores?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque reprehenderit, ea id veniam quas dicta unde nobis
                        dolorem nulla quia illum iste, voluptatum natus? Animi
                        corporis nesciunt, facere at nobis porro? Repellat eos
                        odio, in aliquid voluptates, soluta quod doloremque esse
                        enim sint vitae iure inventore temporibus explicabo
                        fugiat neque autem quibusdam vero harum. Optio cum
                        magnam consectetur ea, error nisi. Cumque corporis
                        repellendus architecto repellat! Animi sapiente
                        inventore excepturi aliquid ipsam? Accusantium expedita
                        mollitia molestias iste quibusdam ipsa dignissimos est
                        laborum facere saepe nihil aliquid praesentium, nesciunt
                        quisquam, omnis eligendi rem recusandae doloribus ipsum
                        officia quam! Tempora, magnam aut.
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis, facere. Quam maiores impedit
                        pariatur consectetur quod fuga explicabo sint inventore
                        laboriosam eius saepe voluptatum eligendi itaque velit
                        minus blanditiis aspernatur aperiam est, quas cumque in
                        adipisci accusamus esse ipsa. Eligendi autem magnam
                        doloremque in ipsa tempora ipsum sapiente laboriosam
                        voluptates minus iste eveniet nisi, mollitia amet harum
                        omnis voluptatum optio. Amet asperiores debitis
                        temporibus impedit, enim repellendus eum qui vero
                        molestiae aliquam delectus, ea minima assumenda sunt
                        aliquid expedita modi? Rerum doloribus minus nemo
                        repellat labore dolores eos fugit, consequuntur facilis
                        delectus esse quibusdam repudiandae doloremque quam
                        fugiat voluptatem ab.
                    </p>

                    <ul className="mt-20 space-y-4">
                        {gallery.map((item, index) => (
                            <li
                                onMouseEnter={() => {
                                    setActiveImage(item.img);
                                }}
                                className="pt-8 border-t border-white last:pb-8 last:border-b"
                                key={index}
                            >
                                <h3 className="text-6xl tracking-wider">
                                    {item.caption}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PinnedGallery;
