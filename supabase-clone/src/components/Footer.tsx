"use client";

import Link from "next/link";
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <Link href="/" className="flex items-center">
              <SupabaseLogo className="h-6 w-auto" />
            </Link>

            <div className="flex items-center space-x-4 mt-6">
              <SocialLink href="https://github.com/supabase" icon={<GitHubLogoIcon className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://twitter.com/supabase" icon={<TwitterLogoIcon className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="https://www.linkedin.com/company/supabase" icon={<LinkedInLogoIcon className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/supabase/" icon={<InstagramLogoIcon className="h-5 w-5" />} label="Instagram" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            <FooterCategory title="Product">
              <FooterLink href="/database">Database</FooterLink>
              <FooterLink href="/auth">Authentication</FooterLink>
              <FooterLink href="/storage">Storage</FooterLink>
              <FooterLink href="/edge-functions">Edge Functions</FooterLink>
              <FooterLink href="/realtime">Realtime</FooterLink>
            </FooterCategory>

            <FooterCategory title="Resources">
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/changelog">Changelog</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/brand-assets">Brand Assets</FooterLink>
            </FooterCategory>

            <FooterCategory title="Developers">
              <FooterLink href="/docs/guides">Guides</FooterLink>
              <FooterLink href="/docs/reference">API Reference</FooterLink>
              <FooterLink href="/docs/integrations">Integrations</FooterLink>
              <FooterLink href="/partners">Partner Program</FooterLink>
              <FooterLink href="https://github.com/supabase/supabase">GitHub</FooterLink>
            </FooterCategory>

            <FooterCategory title="Company">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </FooterCategory>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Supabase Inc.</p>
          <p className="mt-4 md:mt-0">Made with 💚 from all over the world</p>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}

interface FooterCategoryProps {
  title: string;
  children: React.ReactNode;
}

function FooterCategory({ title, children }: FooterCategoryProps) {
  return (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SupabaseLogo({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 109 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M61.0367 13.6891C59.0646 13.1031 58.1392 12.8101 58.1392 12.0361C58.1392 11.3551 58.7368 10.9691 59.7552 10.9691C60.9528 10.9691 62.1504 11.4621 63.3772 12.4191L65.0971 10.1401C63.5797 8.81711 61.9235 8.18311 59.8773 8.18311C57.0933 8.18311 54.8823 9.78011 54.8823 12.2971C54.8823 14.9131 56.9468 15.7781 59.2797 16.4591C61.0367 16.9811 62.0259 17.2761 62.0259 18.1101C62.0259 18.8511 61.3065 19.2691 60.1088 19.2691C58.5623 19.2691 57.2136 18.6351 56.1361 17.5521L54.2602 19.7721C55.9218 21.4291 58.0837 22.0951 60.0501 22.0951C63.0736 22.0951 65.3437 20.6481 65.3437 17.9391C65.3437 15.0921 63.0099 14.2851 61.0367 13.6891Z"
        fill="currentColor"
      />
      <path
        d="M107.896 8.18311C106.025 8.18311 104.562 8.99011 103.54 10.5761V8.47711H100.402V25.2291H103.716V19.7421C104.737 21.2361 106.201 22.0111 107.896 22.0111C111.298 22.0111 114 19.3361 114 15.0921C114 10.8471 111.298 8.18311 107.896 8.18311ZM107.34 18.9871C105.39 18.9871 103.803 17.3631 103.803 15.0921C103.803 12.8211 105.39 11.1971 107.34 11.1971C109.29 11.1971 110.877 12.8211 110.877 15.0921C110.877 17.3631 109.29 18.9871 107.34 18.9871Z"
        fill="currentColor"
      />
      <path
        d="M94.7172 8.18311C91.1977 8.18311 88.5057 10.8791 88.5057 15.0921C88.5057 19.3051 91.1977 22.0111 94.7172 22.0111C98.2366 22.0111 100.929 19.3051 100.929 15.0921C100.929 10.8791 98.2366 8.18311 94.7172 8.18311ZM94.7172 18.9871C92.7441 18.9871 91.628 17.3961 91.628 15.0921C91.628 12.7881 92.7441 11.1971 94.7172 11.1971C96.6903 11.1971 97.8063 12.7881 97.8063 15.0921C97.8063 17.3961 96.6903 18.9871 94.7172 18.9871Z"
        fill="currentColor"
      />
      <path
        d="M81.7126 11.9101H79.5507V6.82811H76.2367V11.9101H74.8586V14.6851H76.2367V22.0111H79.5507V14.6851H81.7126V11.9101Z"
        fill="currentColor"
      />
      <path
        d="M71.8022 8.94811L71.7435 8.47711H68.6056V22.0111H71.9196V15.5541C71.9196 12.8211 73.3223 11.8311 75.5625 11.8311H75.8067V8.47711C73.7422 8.44611 72.5445 9.29411 71.8022 8.94811Z"
        fill="currentColor"
      />
      <path
        d="M36.0694 20.9631C35.3789 20.9631 34.8115 20.3771 34.8115 19.6501C34.8115 18.9231 35.3789 18.3371 36.0694 18.3371C36.781 18.3371 37.3485 18.9231 37.3485 19.6501C37.3485 20.3771 36.781 20.9631 36.0694 20.9631Z"
        fill="#3ECF8E"
      />
      <path
        d="M29.2693 20.9631C28.5788 20.9631 28.0113 20.3771 28.0113 19.6501C28.0113 18.9231 28.5788 18.3371 29.2693 18.3371C29.9809 18.3371 30.5483 18.9231 30.5483 19.6501C30.5483 20.3771 29.9809 20.9631 29.2693 20.9631Z"
        fill="#3ECF8E"
      />
      <path
        d="M47.2564 8.18311C45.3804 8.18311 43.8642 9.01211 42.8457 10.6381V0.535106H39.5317V22.0111H42.6696V19.9381C43.6881 21.3911 45.2347 22.0111 47.1108 22.0111C50.5429 22.0111 53.2446 19.3361 53.2446 15.0921C53.2446 10.8471 50.5429 8.18311 47.2564 8.18311ZM46.701 18.9871C44.7513 18.9871 42.9932 17.5461 42.9932 15.0921C42.9932 12.6371 44.7513 11.1971 46.701 11.1971C48.6508 11.1971 50.4089 12.6371 50.4089 15.0921C50.4089 17.5461 48.6508 18.9871 46.701 18.9871Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.268066 17.8913C1.71698 24.938 10.0368 26.0472 14.8381 22.1361C18.3521 19.2976 17.2426 15.8278 17.2426 13.2403L17.2435 5.74021C17.2444 5.11235 17.7404 4.60961 18.3683 4.60961H18.3813C19.0092 4.60961 19.4981 5.11235 19.499 5.74021L19.4972 12.9153C19.4981 12.9153 19.5055 13.1943 19.7478 13.1943L22.9243 13.1971C23.5522 13.1971 24.0336 12.6869 24.0336 12.0639V5.74021C24.0345 5.11235 24.5305 4.60961 25.1584 4.60961H25.1714C25.7984 4.60961 26.289 5.11235 26.2899 5.74021L26.2881 11.7785C26.2881 11.7793 26.2964 12.0583 26.5296 12.0583L29.7061 12.0612C30.334 12.0612 30.8145 11.551 30.8145 10.9262V5.74021C30.8154 5.11235 31.3113 4.60961 31.9392 4.60961H31.9523C32.5802 4.60961 33.0672 5.11235 33.0691 5.74021L33.0682 10.6407C33.0682 10.6407 33.0858 10.9206 33.3113 10.9206L36.4878 10.9235C37.1166 10.9235 37.5971 10.4132 37.5971 9.78844C37.5971 5.79961 33.9372 0 23.003 0C12.9675 0 -1.89733 7.06669 0.268066 17.8913Z"
        fill="url(#paint0_linear_9818_82438)"
      />
      <path
        d="M19.748 13.1973C19.506 13.1973 19.4979 12.9184 19.4979 12.9184L19.4979 3.14823C19.4979 1.40965 17.4417 0.536338 16.0466 1.69516C11.7259 5.26723 5.63147 12.6733 5.5863 19.2981C5.5413 26.0475 15.8466 28.9391 21.6773 20.2166C22.3047 19.3059 22.9242 17.7489 22.9242 16.6259V13.1973L19.748 13.1973Z"
        fill="url(#paint1_linear_9818_82438)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9818_82438"
          x1="18.7968"
          y1="0"
          x2="18.7968"
          y2="24.0032"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9818_82438"
          x1="14.2376"
          y1="1.07458"
          x2="14.2376"
          y2="24.9203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
