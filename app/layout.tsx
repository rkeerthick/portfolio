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
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var v=t==='light'?{'--background':'#f5f5f7','--surface':'#ffffff','--border':'#e2e2ea','--text-primary':'#111118','--text-secondary':'#636380','--accent':'#6c5ff7','--accent-glow':'rgba(108,95,247,0.1)','--nav-bg':'rgba(245,245,247,0.85)'}:{'--background':'#0d0d0f','--surface':'#16161a','--border':'#2a2a35','--text-primary':'#f0f0f5','--text-secondary':'#9090a8','--accent':'#7c6af7','--accent-glow':'rgba(124,106,247,0.15)','--nav-bg':'rgba(13,13,15,0.85)'};var r=document.documentElement;Object.keys(v).forEach(function(k){r.style.setProperty(k,v[k]);});r.setAttribute('data-theme',t);})();` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
