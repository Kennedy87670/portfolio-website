import medilinkImg from "../assets/images/medilink.png";
import eduvaultImg from "../assets/images/eduvault.png";
import sickelcellImg from "../assets/images/sickelcell.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "sickle-cell",
    title: "Sickle Cell Foundation Website",
    description:
      "Led frontend architecture for a health-focused platform with 95+ Lighthouse SEO score. Integrated donation APIs enabling secure real-time donor tracking and fundraising workflows.",
    tech: ["React.js", "SCSS", "REST APIs", "Vercel"],
    image: sickelcellImg,
    live: "https://sickle-cell-foundation-snowy.vercel.app/",
  },
  {
    id: "medilink",
    title: "MediLink PHC - AI Healthcare Platform",
    description:
      "Production-ready AI-powered Primary Healthcare platform for Nigeria. Built frontend with Next.js 14, TypeScript, and Zustand. Features multilingual AI triage (5 languages), patient forecasting with Recharts, and role-based access for healthcare workers.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Recharts",
    ],
    image: medilinkImg,
    live: "https://medilink-front-end.vercel.app",
    repo: "https://github.com/Team-Zero-Datafest/medilink-front-end",
  },
  {
    id: "eduvault",
    title: "EduVault - Document Management System",
    description:
      "Full-stack enterprise document management platform handling 200+ uploads daily. Built frontend with Next.js and backend REST API using NestJS, PostgreSQL, and JWT authentication. Features real-time dashboards and role-based access control.",
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "JWT", "REST APIs"],
    image: eduvaultImg,
    live: "https://edu-front-two.vercel.app",
    repo: "https://github.com/Kennedy87670/EduVault",
  },

  // {
  //   id: "union-banking-mobile",
  //   title: "Union Systems Mobile Banking",
  //   description:
  //     "Enterprise-grade mobile banking application serving 50,000+ users. Implemented biometric authentication, real-time transaction updates, and offline-first architecture with secure data encryption.",
  //   tech: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
  //   image: "/src/assets/images/banking-mobile.png",
  // },

  // {
  //   id: "union-banking",
  //   title: "Enterprise Banking Application",
  //   description:
  //     "Optimized enterprise banking app serving 50,000+ daily users. Integrated 45+ REST APIs with error handling, achieving 40% load time reduction through React performance techniques.",
  //   tech: ["React.js", "Redux Toolkit", "Material-UI", "TypeScript"],
  //   image: "/src/assets/images/banking.png",
  // },
];
