import React from "react";
import ProjectsCarousel from "../sub/ProjectsCarousel";

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
  fork?: boolean;
  archived?: boolean;
};

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/Alezonythh/repos?per_page=100&sort=updated",
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch repos", res.status, await res.text());
    return [];
  }

  const data = (await res.json()) as Repo[];
  return data
    .filter((r) => r && !r.fork && !r.archived)
    .slice(0, 9);
}

const Projects = async () => {
  const repos = await getRepos();

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="w-full px-2 md:px-10">
        {repos.length === 0 ? (
          <div className="text-center text-gray-300">
            Tidak dapat memuat repositori saat ini.
          </div>
        ) : (
          <ProjectsCarousel repos={repos} />
        )}
      </div>
    </div>
  );
};

export default Projects;
