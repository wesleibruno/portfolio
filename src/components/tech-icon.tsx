"use client";

import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPrisma, SiPostgresql, SiMongodb, SiMysql, SiTensorflow, SiThreedotjs, SiGrafana, SiPhp, SiOpenai, SiFlutter, SiOpenjdk, SiAngular, SiSpringboot, SiAndroid, SiGo, SiPython, SiKotlin, SiDocker, SiGit, SiRedis, SiNginx } from "react-icons/si";
import { IconType } from "react-icons";

const map: Record<string, IconType> = {
  "next.js": SiNextdotjs,
  "nextjs": SiNextdotjs,
  "react": SiReact,
  "typescript": SiTypescript,
  "tailwind": SiTailwindcss,
  "tailwindcss": SiTailwindcss,
  "node.js": SiNodedotjs,
  "nodejs": SiNodedotjs,
  "go": SiGo,
  "golang": SiGo,
  "python": SiPython,
  "kotlin": SiKotlin,
  "docker": SiDocker,
  "docker compose": SiDocker,
  "git/github": SiGit,
  "git": SiGit,
  "redis": SiRedis,
  "nginx": SiNginx,
  "prisma": SiPrisma,
  "postgresql": SiPostgresql,
  "mongodb": SiMongodb,
  "mysql": SiMysql,
  "sql server": SiMysql,
  "mssql": SiMysql,
  "tensorflow.js": SiTensorflow,
  "tensorflow": SiTensorflow,
  "three.js": SiThreedotjs,
  "grafana": SiGrafana,
  "php": SiPhp,
  "openai": SiOpenai,
  "flutter": SiFlutter,
  "java": SiOpenjdk,
  "angular": SiAngular,
  "spring boot": SiSpringboot,
  "spring-boot": SiSpringboot,
  "springboot": SiSpringboot,
  "android": SiAndroid,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const key = name.trim().toLowerCase();
  const Icon = map[key];
  if (!Icon) return null;
  return <Icon className={className ?? "h-10 w-10"} />;
}


