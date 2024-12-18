'use client'; 

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      const contents = gsap.utils.toArray(".content");

      gsap.to(contents, {
        xPercent: -100 * (contents.length - 1),
        scrollTrigger: {
          trigger: "#horizontal", 
          pin: true,
          scrub: 1,
          snap: 1 / (contents.length - 1),
          end: "+=3000",
        },
      });
    }
  }, [isClient]); 

  if (!isClient) {
    return null; 
  }

  return (
    <section id="horizontal" className="flex overflow-x-hidden">
      <div className="content flex-shrink-0 grid place-items-center w-full h-screen text-2xl font-bold tracking-widest uppercase bg-aqua">
        <p>Content 1</p>
      </div>

      <div className="content flex-shrink-0 grid place-items-center w-full h-screen text-2xl font-bold tracking-widest uppercase bg-gray-800">
        <p>Content 2</p>
      </div>

      <div className="content flex-shrink-0 grid place-items-center w-full h-screen text-2xl font-bold tracking-widest uppercase bg-gray-600">
        <p>Content 3</p>
      </div>

      <div className="content flex-shrink-0 grid place-items-center w-full h-screen text-2xl font-bold tracking-widest uppercase bg-gray-400">
        <p>Content 4</p>
      </div>
    </section>
  );
}
