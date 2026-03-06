import type { Metadata } from "next";
import Link from "next/link";
import IdealTypeFinder from "@/components/IdealTypeFinder";

export const metadata: Metadata = {
  title: "이상형 MBTI 찾기 — 인생재부팅연구소",
  description: "내가 원하는 연인의 성향에 답하면 이상형 MBTI 유형을 알려드려요. 무료 MBTI 이상형 테스트.",
  keywords: ["MBTI이상형", "이상형MBTI찾기", "MBTI테스트", "MBTI궁합", "인생재부팅연구소"],
};

export default function IdealTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      {/* 헤더 */}
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          💘 Ideal Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">이상형 MBTI 찾기</h1>
        <p className="text-[#9CA3AF] text-sm">내가 원하는 연인의 성향을 답하면 이상형 유형을 찾아드려요</p>
      </div>

      <IdealTypeFinder />

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
