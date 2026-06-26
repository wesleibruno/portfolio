export const socialLinks = {
  github: "https://github.com/wesleibruno",
  linkedin: "https://www.linkedin.com/in/wesleibruno/",
  whatsapp: "https://wa.me/5543996627695",
};

export const profile = {
  name: "Weslei B Santana",
  headline: "Software Engineer • Desenvolvedor Full Stack",
  bio:
    "Desenvolvedor Full Stack com foco em engenharia de software e experiência sólida em JavaScript, TypeScript, Node.js, Python, Go, React.js e Next.js. Desenvolvimento mobile nativo Android com Kotlin e Jetpack Compose, além de Flutter. Criação de back-ends escaláveis com APIs RESTful, gRPC e MQTT, integrados a bancos NoSQL e SQL (MongoDB, PostgreSQL/PostGIS, Redis, MySQL e SQL Server). Experiência com Docker, Docker Compose, automação de pipelines CI/CD e versionamento com Git/GitHub. Atuação forte em Inteligência Artificial: criação de prompts e uso de agentes de IA (OpenClaw, OpenFang, Hermes Agent) e LLMs como ChatGPT, Opus, Grok, GLM e DeepSeek, além de TensorFlow.js e Three.js.",
  location: "Brasil",
  contact: {
    phone: "+55 43 9 9662-7695",
    email: "weslei945@gmail.com",
    site: undefined,
  },
  resumeUrl: "/cv", // fallback imprimível; se quiser PDF direto, coloque /cv.pdf em /public
  skills: [
    // Linguagens
    "Node.js",
    "Python",
    "Go",
    "TypeScript",
    "JavaScript",
    "Kotlin",
    "Java",
    "PHP",
    // Mobile
    "Jetpack Compose",
    "Android",
    "Flutter",
    "Clean Architecture",
    "MVVM",
    // Front-end
    "React",
    "Next.js",
    "Angular",
    "Tailwind",
    "shadcn/ui",
    // Back-end / APIs
    "REST APIs",
    "gRPC",
    "MQTT",
    "WebSocket",
    "JWT",
    "Fiber",
    "Spring Boot",
    "Prisma",
    // Bancos de dados
    "MongoDB",
    "PostgreSQL",
    "PostGIS",
    "Redis",
    "MySQL",
    "SQL Server",
    // DevOps / Infra
    "Docker",
    "Docker Compose",
    "CI/CD",
    "Git/GitHub",
    "Nginx",
    "Grafana",
    "Zabbix",
    // IA
    "AI Agents",
    "Prompt Engineering",
    "LLMs (ChatGPT/Opus/Grok/DeepSeek)",
    "TensorFlow.js",
    "Three.js",
  ],
  experience: [
    {
      role: "Desenvolvedor Full Stack Freelancer",
      company: "Diversos clientes (colaboração com profissional da Microsoft – EUA)",
      period: "2023 — Atual",
      summary:
        "Desenvolvimento full stack de uma plataforma completa: back-end em Go (Fiber, GORM, Asynq/Redis, JWT) com APIs RESTful, gRPC e WebSocket; front-end em Next.js 15, React 19 e TypeScript; e app mobile nativo Android em Kotlin com Jetpack Compose, Clean Architecture multi-módulo e MVVM, comunicação em tempo real via gRPC/MQTT. Infraestrutura em Docker e Docker Compose com PostgreSQL/PostGIS, Redis e Nginx. Também projetos de análise financeira com ChatGPT e TensorFlow.js e visualizações 3D com Three.js.",
      highlights: [
        "Mobile nativo Android com Kotlin, Jetpack Compose e Clean Architecture (MVVM)",
        "Back-end em Go e Node.js com APIs RESTful, gRPC e MQTT integradas ao front-end",
        "Infra com Docker/Docker Compose, MongoDB, PostgreSQL/PostGIS e Redis; automação CI/CD",
        "Uso avançado de IA: criação de prompts e agentes (OpenClaw, OpenFang, Hermes) e LLMs (ChatGPT, Opus, Grok, DeepSeek)",
      ],
    },
    {
      role: "Coordenador de T.I.",
      company: "CELMI (Indústria de Balanças)",
      period: "04/2021 — 12/2023",
      summary:
        "Desenvolvimento e manutenção de ERP e sistema de pedidos (MySQL, PHP, React.js e Node.js), implantação de monitoramento (Grafana, Zabbix) e liderança de equipe para inovação tecnológica e segurança digital.",
    },
    {
      role: "Analista de T.I.",
      company: "MARP (Indústria, Comércio e Exportação)",
      period: "01/2018 — 05/2021",
      summary:
        "Desenvolvimento de sites e gestão de infraestrutura com Windows Server, Zabbix, Grafana e GLPI; suporte a redes e sistemas, incluindo firewalls e manutenção de servidores.",
    },
  ],
  education: [
    {
      degree: "Engenharia de Software",
      school: "Universidade Norte do Paraná (UNOPAR)",
      period: "2022",
    },
  ],
  certifications: [
    "ReactJS — Maximilian Schwarzmüller",
    "NodeJS — Rocketseat",
    "NextJS/HTML/CSS/JavaScript — B7Web",
    "TypeScript/NestJS — Hcode",
    "Zabbix — Janssen Lima",
    "Mikrotik — Jodelson Santiago",
    "PfSense — FAME",
  ],
  languages: [
    { name: "Português", level: "Fluente (C2)" },
    { name: "Inglês", level: "Intermediário (B1)" },
  ],
  featuredProjects: [
    {
      repo: "wesleibruno/shadcn-ui-store",
      title: "E-commerce UI com shadcn/ui",
      summary:
        "Store front moderna com Next.js, shadcn/ui e Tailwind; catálogo, carrinho básico e UI acessível.",
      tags: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind"],
    },
    {
      repo: "wesleibruno/React-Tic-Tac-Toe",
      title: "Jogo Tic-Tac-Toe (React)",
      summary:
        "Implantação simples com React e Vite; destaca estado, componentes e deploy na Vercel.",
      tags: ["React", "Vite", "Deploy"],
    },
    {
      repo: "wesleibruno/finance-chatgpt-tensorflow", // ajuste para o nome correto do repositório
      title: "Análise Financeira com IA",
      summary:
        "Sistema de captura e análise de dados financeiros com integração a ChatGPT e TensorFlow.js para insights em tempo real.",
      tags: ["Next.js", "TypeScript", "TensorFlow.js", "OpenAI"],
    },
    {
      repo: "wesleibruno/llama-next-fullstack", // ajuste
      title: "Q&A em tempo real com Llama",
      summary:
        "App full stack em Next.js com API Llama, permitindo perguntas e respostas imediatas com histórico persistente.",
      tags: ["Next.js", "API", "Streaming"],
    },
    {
      repo: "wesleibruno/threejs-3d-visualizer", // ajuste
      title: "Visualizador 3D com Three.js",
      summary:
        "Visualizações interativas e dinâmicas de objetos 3D no navegador com Three.js e controles customizados.",
      tags: ["Three.js", "3D", "UX"],
    },
  ],
  // Ordem de prioridade para destaques (palavras‑chave)
  featuredPriority: [
    "instagram",
    "restaurant",
    "store",
    "tic",
    "finance",
    "llama",
    "three",
    "extension",
  ],
};


