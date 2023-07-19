"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayoutEffect";

// Register Plugins
gsap.registerPlugin(ScrollTrigger);

// Mock Data
const gallery = [
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

const PinnedSectionVertical = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const box = useRef<HTMLDivElement | null>(null);
  const contentBox = useRef<HTMLDivElement | null>(null);
  const description = useRef<HTMLParagraphElement | null>(null);
  const heading = useRef<HTMLHeadingElement | null>(null);
  const galleryBorder = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    //Pinning Left Content Box on Scroll Trigger
    const scroll = ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: contentBox.current,
      pinSpacing: false,
      snap: 1 / (gallery.length - 1),
    });

    // Pinning Gallery Border
    gsap.from(galleryBorder.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: galleryBorder.current,
      },
    });

    //Heading Animation
    gsap.from(heading.current, {
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
    gsap.from(description.current, {
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

    return () => {
      scroll.kill();
    };
  }, []);

  return (
    <section className='min-h-screen'>
      <div ref={container} className='h-full bg-black'>
        <div className='max-w-[1200px] 2xl:max-w-[1400px] mx-auto flex h-full relative'>
          <div ref={contentBox} className='w-[50%]  py-20'>
            <h2 ref={heading} className='text-8xl'>
              About Us
            </h2>
            <p
              ref={description}
              className='mt-12 text-xl leading-relaxed tracking-wide '
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui
              repudiandae sed autem adipisci necessitatibus, eveniet aut tenetur
              ea molestiae explicabo expedita voluptas cumque laudantium nisi
              facilis dolorem repellendus, optio aspernatur a inventore magni
              labore eum temporibus! Pariatur doloremque, dolore possimus
              aliquid, aut magni non velit vero error veritatis rerum dicta fuga
              perferendis minima expedita totam in placeat. Expedita temporibus
              perferendis odit! Sint sapiente distinctio voluptatibus ducimus
              saepe dignissimos, sunt placeat ipsa repellat libero earum in
              eaque doloremque inventore maxime? Cum, voluptas! Aut, possimus
              odit voluptas nobis hic quisquam? Repudiandae sint numquam hic,
              sequi soluta sed iure tenetur cumque labore iste voluptate quam,
              atque voluptatibus at illum porro qui facere! Quaerat consequuntur
              illum facere libero, reprehenderit dolorum? Voluptas debitis dicta
              laudantium? Ea nisi, exercitationem tempore laboriosam dolor
              deserunt delectus architecto quibusdam nostrum quis eveniet ipsam
              sapiente temporibus culpa mollitia veritatis eius at eum, laborum
              consequatur. Repudiandae vero qui provident doloremque excepturi
              ut autem. Nemo, quos asperiores, eius, dolores assumenda debitis
              iste eaque pariatur architecto necessitatibus minima deserunt
              error suscipit beatae repellendus? Perspiciatis impedit aut
              obcaecati, earum non nemo aspernatur sunt ad tempora dignissimos
              repudiandae molestiae reiciendis at labore corporis ratione omnis?
              Culpa corrupti itaque accusamus molestias doloribus, dignissimos
              in tempore.
            </p>
          </div>
          <div
            ref={box}
            className='relative w-[50%] flex flex-col items-center'
          >
            <div
              ref={galleryBorder}
              className='absolute inset-0 h-screen w-full flex items-center justify-center'
            >
              <div className='gallery-border gallery-ratio'></div>
            </div>
            {gallery.map((e, index) => {
              return <ImageContainer data={e} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedSectionVertical;

const ImageContainer: React.FC<{ data: { img: string; caption: string } }> = ({
  data,
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center+=100",
        end: () => `${container.current?.offsetHeight} top`,
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
    <div className='h-screen w-full  flex items-center justify-center'>
      <div ref={container} className='gallery-ratio  overflow-hidden'>
        <Image fill src={data.img} alt={data.caption} />
      </div>
    </div>
  );
};

// // Splitting Heading and Description Text
// const splitDescription = new SplitText(description.current, {
//   type: "words lines",
// });
// const splitHeading = new SplitText(heading.current, {
//   type: "chars",
// });

// //Heading Animation on Scroll Trigger
// gsap.from(splitHeading.chars, {
//   x: -100,
//   opacity: 0,
//   duration: 0.4,
//   stagger: 0.05,
//   scrollTrigger: {
//     trigger: container.current,
//     start: "top center",
//     end: "",
//   },

//   onComplete: () => {
//     splitHeading.revert();
//   },
// });

// // Description Animation on Scroll Trigger
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: container.current,
//     endTrigger: description.current,
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//     toggleActions: "restart none none none",
//   },
// });

// tl.from(splitDescription.lines, {
//   opacity: 0,
//   y: 100,
//   duration: 0.3,
//   stagger: 0.03,
//   onComplete: () => {
//     splitDescription.revert();
//   },
// });
