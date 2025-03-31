"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build in a weekend
            <br />
            <span className="supabase-gradient-text">Scale to millions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Supabase is an open source Firebase alternative. Start your project with a Postgres database,
            Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 rounded-md">
                Start your project
              </Button>
            </Link>
            <Link href="/contact/sales">
              <Button size="lg" variant="outline" className="px-8 rounded-md">
                Request a demo
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <TrustedByLogo name="GitHub" />
          <TrustedByLogo name="PWC" />
          <TrustedByLogo name="Humata" />
          <TrustedByLogo name="UDIO" />
          <TrustedByLogo name="Resend" />
          <TrustedByLogo name="Mobbin" />
          <TrustedByLogo name="Chatbase" />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Trusted by fast-growing companies worldwide
        </p>
      </div>

      {/* Background gradient effect */}
      <motion.div
        className="absolute top-[-10%] right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30"
        animate={{
          x: [50, 0, 50],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[140px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [30, 0, 30],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
}

function TrustedByLogo({ name }: { name: string }) {
  return (
    <div className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity">
      <span className="sr-only">{name}</span>
      {name === "GitHub" && <GitHubLogoIcon className="h-8 w-8" />}
      {name === "PWC" && <div className="h-8 w-10 bg-foreground/70 rounded-sm" />}
      {name === "Humata" && <div className="h-8 w-20 bg-foreground/70 rounded-sm" />}
      {name === "UDIO" && <div className="h-8 w-10 bg-foreground/70 rounded-sm" />}
      {name === "Resend" && <div className="h-8 w-16 bg-foreground/70 rounded-sm" />}
      {name === "Mobbin" && <div className="h-8 w-12 bg-foreground/70 rounded-sm" />}
      {name === "Chatbase" && <div className="h-8 w-16 bg-foreground/70 rounded-sm" />}
    </div>
  );
}
