import { ProjectsGrid } from "@/components/projects-grid";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsDesc } from "@/components/projects-desc";
import { headers } from "next/headers";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count: number;
  full_name?: string;
  pushed_at?: string;
  archived?: boolean;
  fork?: boolean;
};

async function getRepos(): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch("https://api.github.com/users/wesleibruno/repos?sort=updated", {
    next: { revalidate: 3600, tags: ["github-repos"] },
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as Repo[];
  const blacklist = new Set(["youtube-video-background"]);
  const filtered = data.filter((r) => !r.name.startsWith(".") && !r.archived && !blacklist.has(r.name));
  // Scoring: demos first, then stars, then recency
  const scored = filtered
    .map((r) => ({
      repo: r,
      score:
        (r.homepage ? 300 : 0) +
        Math.min(200, r.stargazers_count * 5) +
        // newer pushed_at => higher score
        (r.pushed_at ? Math.max(0, 200 - Math.floor((Date.now() - new Date(r.pushed_at).getTime()) / (1000 * 60 * 60 * 24))) : 0) +
        // Boost keywords como "restaurant"
        (/restaurant/i.test(`${r.name} ${r.description ?? ''}`) ? 120 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .map((s) => s.repo);
  return scored.slice(0, 8);
}

export async function Projects() {
  const repos = await getRepos();
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <div className="shimmer">
          <SectionHeading section="projects" />
        </div>
        <ProjectsDesc />
      </div>
      <ProjectsGrid repos={repos} />
    </section>
  );
}

// client component moved to separate file


