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
  const blacklist = new Set(["youtube-video-background", "get-location---get-System-Information", "nextjs-camera", "First-steps-with-Deno"]);
  const filtered = data.filter((r) => !r.name.startsWith(".") && !r.archived && !blacklist.has(r.name));
  // Ordenação: estritamente por última atualização (pushed_at desc)
  const ordered = filtered
    .sort((a, b) => new Date(b.pushed_at || 0).getTime() - new Date(a.pushed_at || 0).getTime());
  return ordered.slice(0, 8);
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


