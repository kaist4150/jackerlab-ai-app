import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AdSenseScript, AdBannerBottom } from "@/components/ads";
import { GoogleAnalytics, SiteVerification } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI - 인공지능 도구",
    template: "%s | JackerLab AI",
  },
  description: "ChatGPT, Claude, Gemini 등 AI 도구 활용 가이드와 프롬프트 엔지니어링 팁",
  keywords: ["AI", "인공지능", "ChatGPT", "Claude", "프롬프트", "머신러닝"],
  authors: [{ name: "JackerLab" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "JackerLab AI",
    title: "AI - 인공지능 도구",
    description: "AI 도구 활용 가이드와 프롬프트 엔지니어링",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI - 인공지능 도구",
    description: "AI 도구 활용 가이드와 프롬프트 엔지니어링",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
        <AdSenseScript />
        <SiteVerification />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <div className="p-4 flex justify-center">
            <AdBannerBottom slot="9727264203" />
          </div>
        </div>
      </body>
    </html>
  );
}
