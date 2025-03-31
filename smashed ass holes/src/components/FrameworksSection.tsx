"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function FrameworksSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            Use Supabase with<span className="supabase-gradient-text ml-2">any framework</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {frameworks.map((framework) => (
            <FrameworkBadge key={framework.name} {...framework} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FrameworkBadgeProps {
  name: string;
  icon: React.ReactNode;
}

function FrameworkBadge({ name, icon }: FrameworkBadgeProps) {
  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Badge
        variant="outline"
        className="h-10 px-4 text-sm gap-2 border-border/60 bg-secondary/30 hover:bg-secondary/50 cursor-pointer"
      >
        {icon}
        <span>{name}</span>
      </Badge>
    </motion.div>
  );
}

const frameworks = [
  {
    name: "React",
    icon: <ReactIcon className="h-5 w-5" />,
  },
  {
    name: "Next.js",
    icon: <NextjsIcon className="h-5 w-5" />,
  },
  {
    name: "Vue",
    icon: <VueIcon className="h-5 w-5" />,
  },
  {
    name: "Nuxt",
    icon: <NuxtIcon className="h-5 w-5" />,
  },
  {
    name: "Svelte",
    icon: <SvelteIcon className="h-5 w-5" />,
  },
  {
    name: "SolidJS",
    icon: <SolidIcon className="h-5 w-5" />,
  },
  {
    name: "Flutter",
    icon: <FlutterIcon className="h-5 w-5" />,
  },
  {
    name: "Android",
    icon: <AndroidIcon className="h-5 w-5" />,
  },
  {
    name: "Swift",
    icon: <SwiftIcon className="h-5 w-5" />,
  },
  {
    name: "RedwoodJS",
    icon: <RedwoodIcon className="h-5 w-5" />,
  },
];

// Simple placeholder icons
function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="2.25" fill="currentColor" />
      <path
        d="M12,4.75c-4.2,0-7.6,1.8-7.6,4.15s3.4,4.15,7.6,4.15s7.6-1.8,7.6-4.15S16.2,4.75,12,4.75z M12,11.9
        c-3.2,0-6.4-1.2-6.4-3s3.2-3,6.4-3s6.4,1.2,6.4,3S15.2,11.9,12,11.9z"
        fill="currentColor"
      />
      <path
        d="M19.6,12c0,2.35-3.4,4.15-7.6,4.15S4.4,14.35,4.4,12"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M6.34,8.96c-2.1,3.64-2.76,7.32-1.48,8.17s4.29-0.55,7.19-3.48"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M17.66,8.96c2.1,3.64,2.76,7.32,1.48,8.17s-4.29-0.55-7.19-3.48"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9 16.5V8.5L16.5 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4.5L14.7 9H20L12 22L4 9H9.3L12 4.5Z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function NuxtIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17.304 6.827L14.932 12.238L12.446 6.827H6.758L14.932 21.396L23.106 6.827H17.304Z"
        fill="currentColor"
      />
      <path d="M4.34 16.08L8.346 9.04L12.238 16.08H4.34Z" fill="currentColor" />
    </svg>
  );
}

function SvelteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22 4.5C19.3 1.6 14.5 2 12 5L5.4 13.4C2.9 16.4 3.5 21.1 6.5 23.4C9.5 25.7 14 25.6 17 23.4C18.6 22.2 19.8 19.5 19.5 17.5L19 14.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17.5 6.5C19.5 8.4 20 12 17.5 14.5C15 17 11.5 16.5 9.5 14.5C7.5 12.5 7 9 9.5 6.5C12 4 15.5 4.5 17.5 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function SolidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3L21 7.5V16.5L12 21L3 16.5V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M12 3V12M12 12L3 7.5M12 12L21 7.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FlutterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.5 2L5 10.5L8 13.5L19 2.5L13.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M13.5 22L19 22L8 11L5 14L13.5 22Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 10V16M18 10V16M4 16H20M3 7L12 2L21 7M4 7H20M12 16V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="16" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}

function SwiftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21 12C21 7.5 17.8 4 14.5 2C15.5 5 13.5 8.5 10 10.5C7.2 12.1 3.5 13 2 13C2.5 15.5 4 18 7 20C5 18.5 3 15.5 3 15.5C3 15.5 6 18 10 18C13.5 18 18 16 21 12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function RedwoodIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3L21 8V16L12 21L3 16V8L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 8L18 11.5V15.5L12 19L6 15.5V11.5L12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <circle cx="18" cy="11.5" r="1" fill="currentColor" />
      <circle cx="18" cy="15.5" r="1" fill="currentColor" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
      <circle cx="6" cy="15.5" r="1" fill="currentColor" />
      <circle cx="6" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}
