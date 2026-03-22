import type { Metadata } from "next";
import Link from "next/link";
import DecisionTypeFinder from "@/components/DecisionTypeFinder";

export const metadata: Metadata = {
  title: "나의 결정 방식 유형 테스트 — 인생재부팅연구소",
  description: "12가지 질문으로 나의 결정 방식 유형을 알아봐요. 분석수집형, 직감형, 여론조사형, 마감결정형, 장단점표형, 운명위탁형 중 당신은?",
  keywords: ["결정방식유형", "결정테스트", "심리테스트", "인생재부팅연구소", "결정유형"],
};

const quizJsonLd = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "나의 결정 방식 유형 테스트",
  "description": "12가지 질문으로 나의 결정 방식 유형을 알아봐요. 분석수집형, 직감형, 여론조사형, 마감결정형, 장단점표형, 운명위탁형 중 당신은?",
  "url": "https://mbti-three-bay.vercel.app/decision-type",
};

export default function DecisionTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }}
      />
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

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">결정 방식 유형이란?</h2>
          <p>
            밥 메뉴 하나를 고르는 것부터 직업 선택까지, 우리는 매일 수많은 결정을 내립니다. 그런데 어떤 사람은 즉흥적으로,
            어떤 사람은 데이터를 모아서, 어떤 사람은 주변 의견을 듣고 결정하죠. 나만의 결정 패턴을 알면 더 빠르고
            현명하게 선택할 수 있어요.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">6가지 결정 방식</h2>
          <ul className="space-y-1.5">
            <li>📊 <span className="font-medium text-[#4B5563]">분석수집형</span> — 정보를 충분히 모은 후 결정하는 타입</li>
            <li>⚡ <span className="font-medium text-[#4B5563]">직감형</span> — 느낌으로 빠르게 결정하는 타입</li>
            <li>🗣️ <span className="font-medium text-[#4B5563]">여론조사형</span> — 주변 의견을 듣고 결정하는 타입</li>
            <li>⏰ <span className="font-medium text-[#4B5563]">마감결정형</span> — 데드라인이 와야 결정되는 타입</li>
            <li>📋 <span className="font-medium text-[#4B5563]">장단점표형</span> — 체계적으로 비교하고 결정하는 타입</li>
            <li>🎲 <span className="font-medium text-[#4B5563]">운명위탁형</span> — 결국 흘러가는 대로 두는 타입</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          내 결정 방식의 장점과 함정을 알면 중요한 선택 앞에서 더 나은 결정을 내릴 수 있어요.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
