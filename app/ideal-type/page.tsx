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

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">이상형 MBTI란?</h2>
          <p>
            내가 원하는 연인의 모습을 몇 가지 질문으로 정리해보면, 어떤 MBTI 유형과 잘 맞을지 힌트를 얻을 수 있어요.
            물론 실제 궁합은 개인차가 크지만, 내가 중요하게 여기는 가치와 성향을 파악하는 데 도움이 됩니다.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">MBTI 유형별 연애 특징</h2>
          <ul className="space-y-1.5">
            <li>🏛️ <span className="font-medium text-[#4B5563]">NT형(분석가)</span> — 깊은 대화와 지적 교감을 중시해요</li>
            <li>🌸 <span className="font-medium text-[#4B5563]">NF형(외교관)</span> — 감정적 연결과 진정성 있는 관계를 원해요</li>
            <li>🔧 <span className="font-medium text-[#4B5563]">SP형(탐험가)</span> — 즉흥적이고 활동적인 연애를 즐겨요</li>
            <li>📋 <span className="font-medium text-[#4B5563]">SJ형(관리자)</span> — 안정적이고 헌신적인 관계를 추구해요</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          이상형 유형을 알면 연애에서 내가 무엇을 중요하게 여기는지 더 명확하게 이해할 수 있어요.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
