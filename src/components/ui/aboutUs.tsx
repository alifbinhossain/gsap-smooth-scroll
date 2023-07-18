"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const phases = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, illum.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eveniet?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, veritatis!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, saepe.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore.",
];

const AboutUs = () => {
  const container = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "0px bottom",
        end: "bottom-=200px bottom",
        scrub: true,
      },
    });

    timeline.from(heading.current, {
      y: 200,
      opacity: 0,
    });
  }, []);
  return (
    <div ref={container} className='h-screen bg-black'>
      <div className='container flex py-16'>
        <div className='flex-1'></div>
        <div className='flex-1'>
          <h2 ref={heading} className='text-5xl font-bold'>
            About Us
          </h2>
          <div className='mt-8 space-y-1'>
            {phases.map((phase, index) => (
              <AnimatedText key={index}>{phase}</AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const AnimatedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const text = useRef<HTMLParagraphElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      right: "-200px",
      opacity: 0,
    });
  }, []);
  return (
    <p ref={text} className='text-base relative'>
      {children}
    </p>
  );
};
