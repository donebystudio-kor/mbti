import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mbti-three-bay.vercel.app"),
  title: "인생재부팅연구소 — 나를 알아가는 심리 테스트",
  description: "스트레스 대처 유형, MBTI 이상형 찾기 등 나를 탐구하는 재미있는 심리 테스트 모음. 결과를 공유하고 친구와 비교해보세요.",
  keywords: ["심리테스트", "스트레스유형", "MBTI이상형", "성격테스트", "인생재부팅연구소", "재부팅"],
  openGraph: {
    title: "인생재부팅연구소 — 나를 알아가는 심리 테스트",
    description: "스트레스 대처 유형, MBTI 이상형 등 나를 탐구하는 테스트 모음.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7048160642416104"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
