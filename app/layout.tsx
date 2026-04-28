import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Chen — Full-Stack Developer",
    template: "%s | Alex Chen",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web applications.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexchen.dev",
    title: "Alex Chen — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js.",
    siteName: "Alex Chen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js.",
    creator: "@alexchendev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
