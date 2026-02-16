import { useGSAP } from "@gsap/react";
import React from "react";
import gsap  from "gsap";


export default function Hero() {
 
  useGSAP(() => {
    gsap.from(".hero-content",{ 
        opacity: 0,
        y: -100 ,
        duration: 1, 
        stagger: 0.3 
      });
  });

  return (
    <section className="h-[26rem] p-26 bg-yellow-400 text-black py-36 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-content">
          Instant Cash for Your Valuables
        </h2>
        <p className="text-lg mb-8 hero-content">
          Gold, Electronics, Jewelry, Watches & More
        </p>
        <button className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hero-content">
          Get Free Valuation
        </button>
      </section>
  );
}
