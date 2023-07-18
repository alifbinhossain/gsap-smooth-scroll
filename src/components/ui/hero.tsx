"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

// Register Plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const background = useRef<HTMLDivElement | null>(null);
  const hero = useRef<HTMLDivElement | null>(null);
  const heading = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    // Splitting Heading Text
    const splitHeadingText = new SplitText(heading.current, {
      type: "chars",
    });

    //Initial Heading Animation
    const headingTimeline = gsap.timeline();

    headingTimeline
      .from(splitHeadingText.chars, {
        x: -100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        delay: 1,
      })
      .to(
        splitHeadingText.chars,
        {
          duration: 0.1,
          scale: 0.9,
          stagger: 0.1,
          rotate: 15,
          skew: 180,
          color: "gray",
        },
        "words"
      )
      .to(
        splitHeadingText.chars,
        {
          scale: 1,
          duration: 0.2,
          stagger: 0.1,
          rotate: 0,
          skew: 0,
          color: "white",
        },
        "words+=0.1"
      );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top top",
        end: "+=500px",
      },
    });

    timeline
      .from(background.current, {
        clipPath: `inset(10%)`,
      })
      .to(
        hero.current,
        {
          opacity: 0.1,
        },
        0
      );
  }, []);
  return (
    <section className='h-[120vh] bg-black'>
      <div
        ref={background}
        className='absolute w-full h-[inherit] brightness-50 blur-sm backdrop-blur-xl'
      >
        <Image fill alt='Banner Image' src='/images/banner-2.jpg' />
      </div>

      <div className='relative z-10 flex justify-center h-full items-center'>
        <div
          ref={hero}
          data-scroll
          data-scroll-speed='.3'
          className='absolute h-[500px] aspect-[4/5]  brightness-50 rounded-3xl overflow-hidden'
        >
          <Image
            fill
            className='h-full w-full object-cover'
            alt='Hero Banner'
            src='/images/hero-image-4.jpg'
          />
        </div>
        <h1
          ref={heading}
          data-scroll
          data-scroll-speed='.7'
          className='text-[140px] font-bold text-white tracking-widest '
        >
          KASHMIR
        </h1>
      </div>
    </section>
  );
};

export default Hero;
