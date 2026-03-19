import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // Cinematic zoom bg
    gsap.fromTo(
      heroRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 3, ease: "power2.out" },
    );

    // Title animation
    tl.fromTo(
      titleRef.current,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
    )
      .fromTo(
        subtitleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6",
      )
      .fromTo(
        btnRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        "-=0.5",
      );

    // Floating cards
    gsap.to(".float", {
      y: 25,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    // Mouse parallax
    const move = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(heroRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background */}
      <img
        ref={heroRef}
        src="../assets/pown-main.jpeg"
        className="absolute w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl  font-extrabold text-yellow-400 tracking-widest drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
        >
          Historic Holdings
        </h1>

        <h2 className="text-white text-2xl md:text-3xl mt-2 tracking-[6px]">
          PAWN SHOP
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed"
        >
          Unlock the true value of your gold & antiques with elegance, trust,
          and instant liquidity.
        </p>

        {/* Buttons */}
        <div ref={btnRef} className="mt-10 flex gap-6">
          <button className="group relative px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg overflow-hidden">
            <span className="relative z-10">Get Loan</span>
            <span className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 origin-left transition duration-500"></span>
          </button>

          <button className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300">
            Explore
          </button>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="float backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
            <h3 className="text-yellow-400 text-xl font-semibold">
              Instant Cash
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Fast loan approval within minutes.
            </p>
          </div>

          <div className="float backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
            <h3 className="text-yellow-400 text-xl font-semibold">
              Safe & Secure
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Bank-level security for your assets.
            </p>
          </div>

          <div className="float backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
            <h3 className="text-yellow-400 text-xl font-semibold">
              Best Value
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Maximum valuation guaranteed.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 animate-bounce text-gray-400 text-sm">
          ↓ Scroll
        </div>
      </div>
    </div>
  );
};
export default Home;
