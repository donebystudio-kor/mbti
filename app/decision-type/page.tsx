import type { Metadata } from "next";
import Link from "next/link";
import DecisionTypeFinder from "@/components/DecisionTypeFinder";

export const metadata: Metadata = {
  title: "나의 결정 방식 유형 테스트 — 인생재부팅연구소",
  description: "12가지 질문으로 나의 결정 방식 유형을 알아봐요. 분석수집형, 직감형, 여론조사형, 마감결정형, 장단점표형, 운명위탁형 중 당신은?",
  keywords: ["결정방식유형", "결정테스트", "심리테스트", "인생재부팅연구소", "결정유형"],
};

export default function DecisionTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          🤔 Decision Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">나의 결정 방식 유형</h1>
        <p className="text-[#9CA3AF] text-sm">나는 어떻게 결정을 내리는 타입일까?</p>
      </div>

      <DecisionTypeFinder />

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
