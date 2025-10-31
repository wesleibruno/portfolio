"use client";

import { motion } from "framer-motion";
import { GradientCard } from "@/components/gradient-card";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/tech-icon";
import Image from "next/image";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count: number;
  full_name?: string;
};

export function ProjectsGrid({ repos }: { repos: Repo[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo, idx) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 16, rotateX: -6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
        >
          <GradientCard
            title={repo.name}
            right={<span className="text-xs text-muted-foreground">★ {repo.stargazers_count}</span>}
          >
              <div className="relative mb-3 overflow-hidden rounded-md border">
                <Image
                  src={
                    repo.homepage
                      ? `https://v1.screenshot.11ty.dev/${encodeURIComponent(repo.homepage)}/opengraph/`
                      : `https://opengraph.githubassets.com/1/${repo.full_name ?? `wesleibruno/${repo.name}`}`
                  }
                  alt={repo.name}
                  width={800}
                  height={420}
                  className="h-40 w-full object-cover"
                />
              </div>
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {(profile.featuredProjects?.find((f) => f.repo.endsWith(`/${repo.name}`))?.summary) ?? repo.description ?? "Sem descrição"}
              </p>
              {profile.featuredProjects?.find((f) => f.repo.endsWith(`/${repo.name}`))?.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.featuredProjects
                    ?.find((f) => f.repo.endsWith(`/${repo.name}`))
                    ?.tags?.map((t) => (
                      <Badge key={t} variant="secondary" className="flex items-center gap-2">
                        <TechIcon name={t} />
                        {t}
                      </Badge>
                    ))}
                </div>
              ) : null}
              <div className="mt-4 flex gap-3 text-sm">
                <Link className="underline underline-offset-4" href={repo.html_url} target="_blank">
                  Código
                </Link>
                {repo.homepage ? (
                  <Link className="underline underline-offset-4" href={repo.homepage} target="_blank">
                    Demo
                  </Link>
                ) : null}
              </div>
          </GradientCard>
        </motion.div>
      ))}
    </div>
  );
}


