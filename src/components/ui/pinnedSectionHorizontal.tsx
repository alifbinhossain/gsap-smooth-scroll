"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayoutEffect";

//Register Plugins
gsap.registerPlugin(ScrollTrigger);

// Mock Data
const gallery = [
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

const PinnedSectionHorizontal = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const galleryContainer = useRef<HTMLDivElement | null>(null);
    const galleryContent = useRef<HTMLDivElement | null>(null);
    const contentBox = useRef<HTMLDivElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        gsap.to(galleryContent.current, {
            x: -400 + "%",
            ease: "easeIn",
            duration: 2,

            scrollTrigger: {
                trigger: container.current,
                start: "top-=20% top",
                end: () => {
                    const height = galleryContent.current?.offsetWidth;
                    return `bottom+=${height} top`;
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
                        {gallery.map((e, index) => {
                            return <Item key={index} e={e} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PinnedSectionHorizontal;

const Item: React.FC<{ e: { img: string; caption: string } }> = ({ e }) => {
    return (
        <div
            className={clsx(
                `flex-grow bg-gray-300 flex-shrink-0 flex justify-center sb-blue`,
            )}
        >
            <motion.div
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
                <Image fill src={e.img} alt={e.caption} />
            </motion.div>
        </div>
    );
};
