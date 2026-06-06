import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://keerthick-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Keerthick Ravikumar — Frontend Engineer",
    template: "%s | Keerthick Ravikumar",
  },
  description:
    "Frontend engineer with 3 years of experience building fast, accessible web experiences with React and Next.js. Based in Bengaluru, India. Open to new opportunities.",
  keywords: [
    "Keerthick Ravikumar",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Bengaluru",
    "Frontend Developer India",
    "React Engineer",
    "Performance Optimization",
    "Accessible Web",
  ],
  authors: [{ name: "Keerthick Ravikumar", url: BASE_URL }],
  creator: "Keerthick Ravikumar",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Keerthick Ravikumar — Frontend Engineer",
    description:
      "Frontend engineer with 3 years of experience building fast, accessible web experiences with React and Next.js. Based in Bengaluru, India.",
    url: BASE_URL,
    siteName: "Keerthick Ravikumar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keerthick Ravikumar — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keerthick Ravikumar — Frontend Engineer",
    description: "Frontend engineer building fast, accessible web experiences with React and Next.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Anti-FOUC: apply saved/preferred theme before first paint */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var v=t==='light'?{'--background':'#faf6f3','--surface':'#ffffff','--border':'#e8ddd8','--text-primary':'#1a1008','--text-secondary':'#7a6560','--accent':'#ea6c0a','--accent-glow':'rgba(234,108,10,0.1)','--nav-bg':'rgba(250,246,243,0.85)'}:{'--background':'#0e0b09','--surface':'#1a1512','--border':'#2e2520','--text-primary':'#f0ebe8','--text-secondary':'#9a8880','--accent':'#f97316','--accent-glow':'rgba(249,115,22,0.15)','--nav-bg':'rgba(14,11,9,0.85)'};var r=document.documentElement;Object.keys(v).forEach(function(k){r.style.setProperty(k,v[k]);});r.setAttribute('data-theme',t);})();` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Keerthick Ravikumar",
              url: BASE_URL,
              jobTitle: "Frontend Engineer",
              description: "Frontend engineer with 3 years of experience building fast, accessible web experiences with React and Next.js.",
              address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
              email: "rkeerthick1@gmail.com",
              sameAs: [
                "https://github.com/rkeerthick",
                "https://linkedin.com/in/rkeerthick",
              ],
              knowsAbout: ["React.js", "Next.js", "TypeScript", "Frontend Development", "Web Performance", "Accessibility"],
            }),
          }}
        />
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
