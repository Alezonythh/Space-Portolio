"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

type Certificate = {
  title: string;
  description: string;
  organizer: string;
  date: string;
  tags: string[];
  thumbnail: string; // used for card preview
  images: string[];  // full images (2 per item)
  accent: string;    // hex color accent per card
};

const CertificateLayout: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Gunakan 8 gambar yang kamu sediakan (4 sertifikat x 2 halaman)
  // Urutan: depan (d) lalu belakang (b). Semua file harus ada di folder public.
  const certificates: Certificate[] = [
    {
      title: "Sertifikat Komputer Pertama",
      description: "Membuat Landing Page menggunakan HTML dan CSS",
      organizer: "PT WAN TEKNOLOGI",
      date: "2023",
      tags: ["HTML", "CSS", "Web Design"],
      thumbnail: "/sertikom1d.png",
      images: ["/sertikom1d.png", "/sertikom1b.png"],
      accent: "#22d3ee", // cyan
    },
    {
      title: "Sertifikat Komputer Kedua",
      description: "Membuat Aplikasi pemesanan Hotel berbasis Web",
      organizer: "PT DIMENSI KREASI NUSANTARA",
      date: "2023",
      tags: ["Web Development", "Database", "UI/UX"],
      thumbnail: "/sertikom2d.png",
      images: ["/sertikom2d.png", "/sertikom2b.png"],
      accent: "#d946ef", // fuchsia
    },
    {
      title: "Sertifikat Komputer Ketiga",
      description: "Penerapan teknik layouting dan hyperlink",
      organizer: "PT Kreasi Media",
      date: "2023",
      tags: ["Layout", "Hyperlink", "Accessibility"],
      thumbnail: "/sertikom3d.png",
      images: ["/sertikom3d.png", "/sertikom3b.png"],
      accent: "#60a5fa", // blue
    },
    {
      title: "Sertifikat Komputer Keempat",
      description: "Pengembangan halaman dan validasi komponen UI",
      organizer: "GInvo Studio",
      date: "2023",
      tags: ["Frontend", "Components", "Responsive"],
      thumbnail: "/sertikom4d.png",
      images: ["/sertikom4d.png", "/sertikom4b.png"],
      accent: "#a78bfa", // violet
    },
  ];

  // No pagination for certificates per latest request
  const ITEMS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = certificates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll to section top for better UX
    setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  return (
    <div ref={sectionRef} id="certificate" className="bg-transparent min-h-screen py-6 px-2 md:px-6 flex flex-col items-center justify-center relative z-10">
      <div className="w-[95vw] max-w-[1500px] mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Certificates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pageItems.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border-2 bg-gradient-to-br from-[#0b0f1a] via-[#0b1222]/40 to-[#0e1730]/60 p-6 md:p-8 backdrop-blur-md shadow-lg shadow-[#2A0E61]/20 transition-transform duration-300 ease-in-out hover:scale-[1.04] hover:shadow-[0_0_35px_var(--accent)] overflow-hidden"
              style={{ borderColor: cert.accent, ['--accent' as any]: cert.accent }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: cert.accent, color: cert.accent }}
                >
                  ⚡
                </div>
              </div>

              <div
                className="relative w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-inner border cursor-pointer bg-black/20"
                style={{ borderColor: cert.accent }}
                onClick={() => setSelectedImages(cert.images)}
              >
                <div className="absolute inset-0 flex gap-2 p-2">
                  {cert.images.slice(0, 2).map((src, i) => (
                    <div key={i} className="relative w-1/2 h-full">
                      <Image src={src} alt={`${cert.title} ${i + 1}`} fill className="object-cover rounded-md" />
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mt-5" style={{ color: cert.accent }}>
                {cert.title}
              </h2>
              <p className="text-gray-300 mt-2">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {cert.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-sm border bg-white/5"
                    style={{ borderColor: cert.accent, color: cert.accent }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs tracking-widest text-gray-400">ORGANIZED BY</p>
                <p className="text-white font-bold mt-1">{cert.organizer}</p>
              </div>

              {/* Backlight hover overlay (seperti di Skills) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at center, ${cert.accent}55, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-8 flex items-center justify-center gap-2 select-none">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-40"
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const active = i + 1 === currentPage;
              return (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`w-8 h-8 rounded-md border transition-colors ${
                    active ? "bg-white/20 text-white border-white/30" : "text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {selectedImages && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
          onClick={() => setSelectedImages(null)}
        >
          <div className="relative w-11/12 max-w-5xl max-h-[88vh] overflow-auto p-2" onClick={(e) => e.stopPropagation()}>
            {selectedImages.length > 1 ? (
              <div className="grid grid-cols-1 gap-4">
                {selectedImages.map((src, i) => (
                  <div key={`${src}-${i}`} className="relative w-full">
                    <Image
                      src={src}
                      alt={`Certificate page ${i + 1}`}
                      width={1600}
                      height={1131}
                      className="rounded-xl w-full h-auto object-contain"
                      sizes="(max-width: 768px) 90vw, 70vw"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Image
                src={selectedImages[0]}
                alt="Enlarged Certificate"
                width={1600}
                height={1131}
                className="rounded-xl w-full h-auto object-contain"
                sizes="(max-width: 768px) 90vw, 70vw"
              />
            )}
            <button
              onClick={() => setSelectedImages(null)}
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
