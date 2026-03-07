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

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">스트레스 대처 유형이란?</h2>
          <p>
            스트레스를 받았을 때 사람마다 반응하는 방식은 전혀 달라요. 어떤 사람은 즉각적으로 폭발하고 깔끔하게
            털어내는가 하면, 어떤 사람은 조용히 쌓아두다 나중에 혼자 처리합니다. 또 어떤 사람은 원인부터 분석하고,
            어떤 사람은 환경을 바꿔서 리셋하죠. 이 테스트는 나만의 스트레스 대처 패턴을 6가지 유형으로 분류해드려요.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">6가지 스트레스 유형</h2>
          <ul className="space-y-1.5">
            <li>💥 <span className="font-medium text-[#4B5563]">강제종료형</span> — 한 번에 터뜨리고 깔끔하게 끝내는 타입</li>
            <li>💾 <span className="font-medium text-[#4B5563]">임시저장형</span> — 일단 눌러두고 혼자 조용히 처리하는 타입</li>
            <li>🔍 <span className="font-medium text-[#4B5563]">디버깅형</span> — 원인부터 분석하고 논리적으로 해결하는 타입</li>
            <li>🔄 <span className="font-medium text-[#4B5563]">재시작형</span> — 환경을 바꿔서 기분을 리셋하는 타입</li>
            <li>⚙️ <span className="font-medium text-[#4B5563]">백그라운드실행형</span> — 스트레스를 품고 계속 달리는 타입</li>
            <li>🔼 <span className="font-medium text-[#4B5563]">업데이트형</span> — 스트레스를 성장의 신호로 바꾸는 타입</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          내 유형을 알면 왜 특정 상황에서 힘든지 이해하고, 나에게 맞는 해소 방법을 찾을 수 있어요.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
