"use client";

import React from "react";
import Image from "next/image";
import { CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Top light bar + beams with scroll-triggered animation */}
      <motion.div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-4 w-[80%] max-w-5xl z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.div
          className="h-[3px] w-full rounded bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-400 shadow-[0_0_40px_10px_rgba(99,102,241,0.65)]"
          style={{ transformOrigin: "center" }}
          variants={{
            hidden: { opacity: 0, scaleX: 0.2 },
            visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        />
        <motion.div
          className="mx-auto mt-0 h-40 w-full bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent blur-2xl"
          style={{ transformOrigin: "top" }}
          variants={{
            hidden: { opacity: 0, scaleY: 0 },
            visible: { opacity: 1, scaleY: 1, transition: { delay: 0.1, duration: 0.7, ease: "easeOut" } },
          }}
        />
        <motion.div
          className="absolute -left-6 top-0 h-36 w-1/3 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.55),transparent_70%)] blur-2xl"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.6 } } }}
        />
        <motion.div
          className="absolute -right-6 top-0 h-36 w-1/3 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.55),transparent_70%)] blur-2xl"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.6 } } }}
        />
      </motion.div>

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
        <div className="Welcome-box inline-flex items-center py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] rounded-full">
          <span className="Welcome-text text-[13px]">Tentang Saya</span>
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          Fullstack Developer Passionate
        </h2>
        <p className="mt-3 text-gray-300">
          Mengubah ide menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">solusi digital</span> yang impactful
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Profile */}
        <div className="md:col-span-4 relative w-full max-w-[420px] mx-auto rounded-3xl p-[2px] bg-gradient-to-r from-purple-600/40 via-fuchsia-500/30 to-cyan-500/40 shadow-[0_0_40px_rgba(112,66,248,0.25)]">
          <div className="relative w-full h-[220px] md:h-[300px] rounded-[22px] overflow-hidden bg-[#0b0f1a] border border-white/10">
            <Image src="/fotoporto.jpg" alt="Preview" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6">
            <div className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              Full Stack Dev
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#0b0f1a] via-[#130b1f]/60 to-[#0e1730]/60 border border-white/5 hover:border-fuchsia-500/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 flex items-center justify-center text-white">
                <CommandLineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">Developer Passionate</h3>
                <p className="text-gray-300 mt-1">
                  Saya Mohamad Revan Fahriansyah, seorang developer yang menghadirkan passion dalam setiap proyek. Percaya bahwa setiap kode adalah karya seni untuk menyelesaikan masalah nyata.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 to-teal-500/30">
            <div className="rounded-2xl border border-white/5 p-6 bg-gradient-to-br from-[#06161b] via-[#08232b]/60 to-[#071d25]/60 hover:border-teal-400/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white">
                <RocketLaunchIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">Visi Karir</h3>
                <p className="text-gray-300 mt-1">
                  Bercita-cita menjadi Fullstack Developer yang dapat bekerja dalam tim dengan dampak positif. Fokus mengasah skill dan terus belajar teknologi terbaru di industri.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
