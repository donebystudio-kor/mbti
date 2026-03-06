import type { Metadata } from "next";
import Link from "next/link";
import BurnoutTypeFinder from "@/components/BurnoutTypeFinder";

export const metadata: Metadata = {
  title: "나의 번아웃 신호 유형 테스트 — 인생재부팅연구소",
  description: "12가지 질문으로 나의 번아웃 신호 유형을 알아봐요. 폭식모드형, 감정무감각형, 과활동형, 예민폭발형, 방전드러눕기형, 지름신강림형 중 당신은?",
  keywords: ["번아웃신호유형", "번아웃테스트", "심리테스트", "인생재부팅연구소", "번아웃유형"],
};

export default function BurnoutTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          🔋 Burnout Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">나의 번아웃 신호 유형</h1>
        <p className="text-[#9CA3AF] text-sm">나는 번아웃이 오면 어떤 신호를 보내는 타입일까?</p>
      </div>

      <BurnoutTypeFinder />

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
