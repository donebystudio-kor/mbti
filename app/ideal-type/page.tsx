import type { Metadata } from "next";
import Link from "next/link";
import IdealTypeFinder from "@/components/IdealTypeFinder";

export const metadata: Metadata = {
  title: "이상형 MBTI 찾기 — 유형연구소",
  description: "내 MBTI를 선택하면 가장 잘 맞는 이상형 MBTI 유형을 찾아드려요. 16가지 유형별 연애 궁합 랭킹과 AI 분석을 확인해보세요.",
  keywords: ["MBTI이상형", "MBTI궁합", "이상형MBTI찾기", "MBTI연애궁합", "유형연구소"],
};

export default function IdealTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      {/* 헤더 */}
      <div className="text-center mb-10">
        <Link href="/" className="text-[#8888AA] text-sm hover:text-[#A78BFA] transition-colors mb-6 inline-block">
          ← 유형연구소
        </Link>
        <p className="text-[#A78BFA] text-sm tracking-[0.3em] uppercase mb-2">💘 Ideal Type Finder</p>
        <h1 className="text-3xl font-bold text-[#E8E8FF] mb-2">이상형 MBTI 찾기</h1>
        <p className="text-[#8888AA] text-sm">내 유형을 선택하면 가장 잘 맞는 이상형을 알려드려요</p>
      </div>

      {/* 메인 컴포넌트 */}
      <IdealTypeFinder />

      {/* 푸터 */}
      <footer className="max-w-lg mx-auto mt-12 text-center text-xs text-[#2D2D5E]">
        <p>궁합 분석은 재미와 참고용입니다 · © 2026 유형연구소</p>
      </footer>
    </main>
  );
}
