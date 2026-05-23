import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keerthick Ravikumar — Frontend Engineer",
  description:
    "Frontend engineer with 3 years of experience building performant, inclusive web experiences with React and Next.js.",
  openGraph: {
    title: "Keerthick Ravikumar — Frontend Engineer",
    description: "Fast by design. Accessible by default.",
    type: "website",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
