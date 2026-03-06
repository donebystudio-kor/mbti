import type { Metadata } from "next";
import Link from "next/link";
import StressTypeFinder from "@/components/StressTypeFinder";

export const metadata: Metadata = {
  title: "스트레스 대처 유형 테스트 — 인생재부팅연구소",
  description: "10가지 질문에 답하면 나의 스트레스 대처 유형을 알려드려요. 강제종료형, 임시저장형, 디버깅형, 재시작형, 백그라운드실행형, 업데이트형 중 당신은?",
  keywords: ["스트레스대처유형", "스트레스테스트", "심리테스트", "인생재부팅연구소", "스트레스유형"],
};

export default function StressTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      {/* 헤더 */}
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          🖥️ Stress Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">스트레스 대처 유형</h1>
        <p className="text-[#9CA3AF] text-sm">나는 스트레스를 어떻게 처리하는 타입일까?</p>
      </div>

      <StressTypeFinder />

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
