import type { Metadata } from "next";
import Link from "next/link";
import LazyTypeFinder from "@/components/LazyTypeFinder";

export const metadata: Metadata = {
  title: "나의 게으름 유형 테스트 — 인생재부팅연구소",
  description: "12가지 질문으로 나의 게으름 유형을 알아봐요. 계획러형, 핑계장인형, 마감스프린터형, 완벽주의형, 딴짓달인형, 여유러형 중 당신은?",
  keywords: ["게으름유형", "게으름테스트", "심리테스트", "인생재부팅연구소", "게으름"],
};

export default function LazyTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          🛋️ Lazy Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">나의 게으름 유형</h1>
        <p className="text-[#9CA3AF] text-sm">나는 어떤 방식으로 게으른 타입일까?</p>
      </div>

      <LazyTypeFinder />

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">게으름 유형이란?</h2>
          <p>
            게으름은 단순히 '의지력 부족'이 아니에요. 사람마다 미루는 방식, 게으름의 원인, 그리고 극복하는 방법이
            전혀 다릅니다. 완벽해야 시작할 수 있어 못 시작하는 사람과, 마감이 다가와야 움직이는 사람은 근본적으로
            다른 문제를 가지고 있어요.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">6가지 게으름 유형</h2>
          <ul className="space-y-1.5">
            <li>📅 <span className="font-medium text-[#4B5563]">계획러형</span> — 계획만 세우고 실행을 미루는 타입</li>
            <li>🙅 <span className="font-medium text-[#4B5563]">핑계장인형</span> — 항상 이유가 생기는 타입</li>
            <li>🏃 <span className="font-medium text-[#4B5563]">마감스프린터형</span> — 마감 직전에 폭발적으로 집중하는 타입</li>
            <li>✨ <span className="font-medium text-[#4B5563]">완벽주의형</span> — 완벽하지 않으면 시작을 못 하는 타입</li>
            <li>🦋 <span className="font-medium text-[#4B5563]">딴짓달인형</span> — 항상 더 재미있는 게 눈에 보이는 타입</li>
            <li>🌿 <span className="font-medium text-[#4B5563]">여유러형</span> — 느긋하게 내 페이스로 가는 타입</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          내 게으름 유형을 알면 더 효과적인 동기부여 방법을 찾을 수 있어요.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
