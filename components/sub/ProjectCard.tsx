import Image from "next/image";
import React from "react";

interface Props {
  src?: string | null;
  title: string;
  description?: string | null;
  language?: string | null;
  stars?: number;
  forks?: number;
  topics?: string[];
  repoUrl: string;
  homepage?: string | null;
  updatedAt?: string | null;
  avatarUrl?: string | null;
}

const ProjectCard = ({
  src,
  title,
  description,
  language,
  stars,
  forks,
  topics = [],
  repoUrl,
  homepage,
  updatedAt,
  avatarUrl,
}: Props) => {
  const formattedDate = updatedAt ? new Date(updatedAt).toLocaleDateString() : null;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {src ? (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-56 sm:h-64 object-contain bg-[#0b0f1a]"
        />
      ) : (
        <div className="w-full h-56 sm:h-64 bg-[#0b0f1a] flex items-center justify-center text-white/60 text-sm">
          No preview
        </div>
      )}

      <div className="relative p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt="avatar"
                width={28}
                height={28}
                className="h-7 w-7 rounded-full border border-white/20"
              />
            )}
            <h3 className="text-2xl font-semibold text-white line-clamp-1">{title}</h3>
          </div>
          {formattedDate && (
            <span className="text-xs text-gray-400 whitespace-nowrap">{formattedDate}</span>
          )}
        </div>

        {description && (
          <p className="mt-2 text-gray-300 line-clamp-2">{description}</p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
          {language && (
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="inline-block h-2 w-2 rounded-full bg-[#7042f8]"></span>
              {language}
            </span>
          )}
          {typeof stars === "number" && <span className="text-gray-300">★ {stars}</span>}
          {typeof forks === "number" && <span className="text-gray-300">⑂ {forks}</span>}
        </div>

        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {topics.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
          >
            View Repo
          </a>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
