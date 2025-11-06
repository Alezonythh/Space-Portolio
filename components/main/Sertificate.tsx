"use client";

import React, { useState } from "react";
import Image from "next/image";

const CertificateLayout: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use existing public images to ensure they render
  const certificates = [
    {
      title: "React Developer",
      issuer: "Udemy",
      date: "Jan 2023",
      image: "/SpaceWebsite.png",
    },
    {
      title: "TypeScript Mastery",
      issuer: "Coursera",
      date: "Feb 2023",
      image: "/NextWebsite.png",
    },
    {
      title: "Web Design Basics",
      issuer: "FreeCodeCamp",
      date: "Mar 2023",
      image: "/project2.png",
    },
    {
      title: "Fullstack Bootcamp",
      issuer: "Dicoding",
      date: "Apr 2023",
      image: "/SpaceWebsite.png",
    },
  ];

  // No pagination for certificates per latest request

  return (
    <div id="certificate" className="bg-transparent min-h-screen py-6 px-2 md:px-6 flex flex-col items-center justify-center relative z-10">
      <div className="w-[95vw] max-w-[1500px] mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Certificates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[#7042f88b] bg-gradient-to-br from-[#0b0f1a] via-[#0b1222]/60 to-[#0e1730]/60 p-6 backdrop-blur-md shadow-lg shadow-[#2A0E61]/20 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:border-[#5A36FA] hover:shadow-[0_0_35px_#5A36FA] overflow-hidden after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:bg-[radial-gradient(ellipse_at_center,rgba(90,54,250,0.30),transparent_60%)] after:opacity-0 group-hover:after:opacity-100 min-h-[320px]"
            >
              <div
                className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-inner border border-[#2A0E61]/60 cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h2 className="text-2xl font-semibold text-white mt-4 mb-2">
                {cert.title}
              </h2>
              <p className="text-gray-300">Issued by: {cert.issuer}</p>
              <p className="text-gray-400 text-sm">Date: {cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-11/12 max-w-4xl">
            <Image
              src={selectedImage}
              alt="Enlarged Certificate"
              width={1000}
              height={600}
              className="rounded-xl w-full h-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateLayout;
