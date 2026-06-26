import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedDesc } from "@/components/featured-desc";
import { ProjectsGrid } from "@/components/projects-grid";

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
};

async function getFeatured(): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN;
  // Buscar todos e priorizar por demo/star/recência; ainda considerar os curados como bônus
  const res = await fetch("https://api.github.com/users/wesleibruno/repos?sort=updated", {
    next: { revalidate: 3600, tags: ["github-repos"] },
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) return [];
  const all = (await res.json()) as Repo[];
  const curatedNames = new Set((profile.featuredProjects ?? []).map((f) => f.repo.split("/").pop()));
  const blacklist = new Set(["youtube-video-background", "get-location---get-System-Information", "nextjs-camera", "First-steps-with-Deno"]);
  const filtered = all.filter((r) => !r.archived && !r.name.startsWith(".") && !blacklist.has(r.name));
  const keywords = profile.featuredPriority;
  const scored = filtered
    .map((r) => {
      let kbonus = 0;
      if (keywords?.length) {
        for (let i = 0; i < keywords.length; i++) {
          const kw = keywords[i];
          if (new RegExp(kw, "i").test(`${r.name} ${r.description ?? ''}`)) {
            kbonus = Math.max(kbonus, 600 - i * 80);
          }
        }
      }
      return {
        repo: r,
        score:
          (r.homepage ? 400 : 0) +
          Math.min(250, r.stargazers_count * 6) +
          (curatedNames.has(r.name) ? 150 : 0) +
          (r.pushed_at ? Math.max(0, 150 - Math.floor((Date.now() - new Date(r.pushed_at).getTime()) / (1000 * 60 * 60 * 24))) : 0) +
          kbonus,
      };
    })
    .sort((a, b) => b.score - a.score)
    .map((s) => s.repo);
  return scored.slice(0, 6);
}

export async function FeaturedProjects() {
  const repos = await getFeatured();
  if (!repos.length) return null;
  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6">
        <div className="shimmer">
          <SectionHeading section="featured" />
        </div>
        {/* i18n description on client */}
        <FeaturedDesc />
      </div>
      <ProjectsGrid repos={repos} />
    </section>
  );
}

// client component moved to separate file


