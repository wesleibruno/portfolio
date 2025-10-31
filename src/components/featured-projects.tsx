import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedDesc } from "@/components/featured-desc";
import pt from "@/i18n/messages/pt.json";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";
import { useCurrentLocale } from "@/i18n/use-locale";
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

async function getRepo(fullName: string, token?: string): Promise<Repo | null> {
  const res = await fetch(`https://api.github.com/repos/${fullName}`, {
    next: { revalidate: 3600, tags: ["github-repos"] },
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) return null;
  return (await res.json()) as Repo;
}

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
  const blacklist = new Set(["youtube-video-background"]);
  const filtered = all.filter((r) => !r.archived && !r.name.startsWith(".") && !blacklist.has(r.name));
  const scored = filtered
    .map((r) => ({
      repo: r,
      score:
        (r.homepage ? 400 : 0) +
        Math.min(250, r.stargazers_count * 6) +
        (curatedNames.has(r.name) ? 150 : 0) +
        (r.pushed_at ? Math.max(0, 150 - Math.floor((Date.now() - new Date(r.pushed_at).getTime()) / (1000 * 60 * 60 * 24))) : 0) +
        (/restaurant/i.test(`${r.name} ${r.description ?? ''}`) ? 150 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .map((s) => s.repo);
  return scored.slice(0, 3);
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


