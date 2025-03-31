"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Database, Lock, Globe, Database as DatabaseIcon, Layers, Box, Code } from "lucide-react";

export function ProductsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Postgres Database"
            description="Every project is a full Postgres database, the world's most trusted relational database."
            icon={<Database className="h-10 w-10 text-primary" />}
            features={[
              "100% portable",
              "Built-in Auth with RLS",
              "Easy to extend",
            ]}
            href="/database"
          />

          <ProductCard
            title="Authentication"
            description="Add user sign ups and logins, securing your data with Row Level Security."
            icon={<Lock className="h-10 w-10 text-primary" />}
            href="/auth"
          />

          <ProductCard
            title="Edge Functions"
            description="Easily write custom code without deploying or scaling servers."
            icon={<Globe className="h-10 w-10 text-primary" />}
            href="/edge-functions"
            codeSnippet="$supabasefunctions deploy"
          />

          <ProductCard
            title="Storage"
            description="Store, organize, and serve large files, from videos to images."
            icon={<Box className="h-10 w-10 text-primary" />}
            href="/storage"
          />

          <ProductCard
            title="Realtime"
            description="Build multiplayer experiences with real-time data synchronization."
            icon={<Layers className="h-10 w-10 text-primary" />}
            href="/realtime"
          />

          <ProductCard
            title="Vector"
            description="Integrate your favorite ML-models to store, index and search vector embeddings."
            icon={<DatabaseIcon className="h-10 w-10 text-primary" />}
            features={[
              "OpenAI",
              "Hugging Face",
            ]}
            href="/modules/vector"
          />
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl font-medium mb-6">
            Use one or all. Best of breed products. Integrated as a platform.
          </h3>
        </div>
      </div>

      {/* Background effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  href: string;
  codeSnippet?: string;
}

function ProductCard({ title, description, icon, features, href, codeSnippet }: ProductCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-secondary/20 transition-all duration-300">
        <CardContent className="p-6">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          {features && features.length > 0 && (
            <ul className="space-y-2 mt-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {codeSnippet && (
            <div className="mt-6 bg-secondary/80 p-3 rounded-md font-mono text-xs overflow-x-auto">
              {codeSnippet}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
