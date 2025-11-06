"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Skill_cards } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    startScrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const to = dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: to, behavior: "smooth" });
  };

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Keterampilan</h2>
        <p className="mt-4 text-gray-300">
          Berikut adalah beberapa teknologi dan keterampilan yang saya kuasai dalam pengembangan web
        </p>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden mt-12 mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-lg"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          className="w-[90vw] mx-auto overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-6 w-max px-8 md:px-12 lg:px-16 py-4">
            {Skill_cards.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex-none min-w-[360px] max-w-[360px] md:min-w-[400px] md:max-w-[400px] h-[220px] md:h-[240px] overflow-hidden rounded-lg border border-[#7042f88b] bg-gradient-to-br from-[#0b0f1a] via-[#0b1222]/60 to-[#0e1730]/60 p-6 backdrop-blur-md shadow-lg shadow-[#2A0E61]/20 transition-transform duration-300 ease-in-out hover:scale-[1.04] hover:border-[#5A36FA] hover:shadow-[0_0_35px_#5A36FA] after:content-[''] after:absolute after:inset-0 after:rounded-lg after:bg-[radial-gradient(ellipse_at_center,rgba(90,54,250,0.35),transparent_60%)] after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100"
              >
                <div className="flex flex-col items-center text-center gap-4 py-6">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} width={72} height={72} className="w-[72px] h-[72px]" />
                  ) : (
                    <div className="w-[72px] h-[72px] rounded-full bg-[#7042f8]/20 text-white flex items-center justify-center text-xl font-semibold">
                      {item.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-300 max-w-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-lg"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Skills;
