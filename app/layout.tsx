import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mbti-lab.vercel.app"),
  title: "유형연구소 — MBTI 이상형 & 궁합 분석",
  description: "내 MBTI로 이상형 유형을 찾고 궁합을 분석해보세요. 16가지 MBTI 유형별 연애 궁합과 이상형을 AI가 분석해드립니다.",
  keywords: ["MBTI", "MBTI궁합", "MBTI이상형", "MBTI연애", "유형연구소", "성격유형"],
  openGraph: {
    title: "유형연구소 — MBTI 이상형 & 궁합 분석",
    description: "내 MBTI로 이상형 유형을 찾고 궁합을 분석해보세요.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
