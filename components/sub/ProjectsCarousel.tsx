"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: { avatar_url: string };
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  topics?: string[];
  updated_at: string;
};

interface Props {
  repos: Repo[];
  pageSize?: number;
}

const ProjectsCarousel: React.FC<Props> = ({ repos, pageSize = 6 }) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(repos.length / pageSize));
  const start = page * pageSize;
  const visible = repos.slice(start, start + pageSize);

  const toPage = (p: number) => {
    if (!Number.isFinite(totalPages) || totalPages <= 0) return;
    const next = ((p % totalPages) + totalPages) % totalPages; // cyclic
    setPage(next);
  };

  useEffect(() => {
    if (page > totalPages - 1) setPage(Math.max(0, totalPages - 1));
  }, [totalPages]);

  return (
    <div className="w-full relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
        {visible.map((repo) => (
          <ProjectCard
            key={repo.id}
            src={null}
            title={repo.name}
            description={repo.description}
            language={repo.language}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            topics={repo.topics || []}
            repoUrl={repo.html_url}
            homepage={repo.homepage}
            updatedAt={repo.updated_at}
            avatarUrl={repo.owner?.avatar_url || null}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => toPage(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === page ? "bg-gradient-to-r from-purple-500 to-cyan-500" : "bg-white/25 hover:bg-white/40"}`}
            aria-label={`Halaman ${i + 1}`}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          onClick={() => toPage(page - 1)}
          className="px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
        >
          Prev
        </button>
        <button
          onClick={() => toPage(page + 1)}
          className="px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
