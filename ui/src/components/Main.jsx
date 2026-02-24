import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import pawn from "../assets/pownShop.png";

function Main() {
  const headingRef = useRef();
  const paraRef = useRef();
  const btnRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(headingRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "back.out(5.7)",
      stagger: 0.2,
    })
      .from(
        paraRef.current,
        {
          y: 90,
          opacity: 0,
          duration: 1,
            ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .from(
        btnRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6"
    >
      <div   ref={headingRef} className="flex h-24 items-center mb-2 ">
            <h2
      
        className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400"
      >
        Welcome to 
      </h2>
      
       <div>
         {/* <img src="./assets/gold.png" alt="Gold Icon" className="ml-2 inline-block w-10 h-56  w-56" /> */}
    <img src='./assets/pownShop.png' alt="Pawn Logo" className="h-56 inline-block mb-4 ml-2" /> 
       </div>
      </div>
      <p
        ref={paraRef}
        className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300"
      >
        Instant cash for your valuables with trust, security, and premium
        service.
      </p>

      <button
        ref={btnRef}
        className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg"
      >
        Explore Now
      </button>
    </section>
  );
}

export default Main;
