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

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">번아웃 신호 유형이란?</h2>
          <p>
            번아웃은 모두에게 같은 방식으로 오지 않아요. 어떤 사람은 몸이 먼저 지치고, 어떤 사람은 감정이 무뎌지며,
            어떤 사람은 오히려 더 과하게 움직이다 쓰러집니다. 내 번아웃 신호를 알면 조기에 감지하고 대처할 수 있어요.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">번아웃의 대표 신호들</h2>
          <ul className="space-y-1.5">
            <li>💤 <span className="font-medium text-[#4B5563]">신체소진형</span> — 몸이 먼저 멈춰달라고 신호 보내는 타입</li>
            <li>🌫️ <span className="font-medium text-[#4B5563]">무기력형</span> — 의욕 자체가 사라진 것 같은 타입</li>
            <li>🌀 <span className="font-medium text-[#4B5563]">과부하형</span> — 머리가 퇴근을 못 하는 타입</li>
            <li>😤 <span className="font-medium text-[#4B5563]">예민폭발형</span> — 사소한 것에도 감정이 폭발하는 타입</li>
            <li>🛒 <span className="font-medium text-[#4B5563]">과소비형</span> — 지름신과 폭식으로 해소하려는 타입</li>
            <li>🏃 <span className="font-medium text-[#4B5563]">과활동형</span> — 멈추면 무너질 것 같아 계속 달리는 타입</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          번아웃 신호를 일찍 알아챌수록 더 빨리 회복할 수 있어요. 내 패턴을 이해하는 것이 첫 번째 단계입니다.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
