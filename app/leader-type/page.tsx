import type { Metadata } from "next";
import Link from "next/link";
import LeaderTypeFinder from "@/components/LeaderTypeFinder";

export const metadata: Metadata = {
  title: "나의 리더 타입 테스트 — 인생재부팅연구소",
  description: "12가지 질문으로 나의 리더십 스타일을 알아봐요. 비전캐스터형, 현장지휘형, 팀케어형, 전략가형, 서포터형, 자율형 중 당신은?",
  keywords: ["리더타입", "리더십테스트", "심리테스트", "인생재부팅연구소", "리더십유형"],
};

export default function LeaderTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          👑 Leader Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">나의 리더 타입</h1>
        <p className="text-[#9CA3AF] text-sm">나는 어떤 리더십 스타일을 가진 타입일까?</p>
      </div>

      <LeaderTypeFinder />

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">리더 타입이란?</h2>
          <p>
            리더십은 한 가지 스타일이 아니에요. 앞에서 비전을 제시하는 사람, 현장에서 직접 이끄는 사람, 팀원을
            세심하게 챙기는 사람, 뒤에서 전략을 세우는 사람. 모두 훌륭한 리더의 모습이에요. 나는 어떤 방식으로
            사람들과 함께할 때 가장 빛나는지 알아봐요.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">6가지 리더십 스타일</h2>
          <ul className="space-y-1.5">
            <li>🌟 <span className="font-medium text-[#4B5563]">비전캐스터형</span> — 큰 그림과 방향을 제시하는 리더</li>
            <li>⚔️ <span className="font-medium text-[#4B5563]">현장지휘형</span> — 함께 뛰며 직접 이끄는 리더</li>
            <li>🤝 <span className="font-medium text-[#4B5563]">팀케어형</span> — 팀원 한 명 한 명을 챙기는 리더</li>
            <li>♟️ <span className="font-medium text-[#4B5563]">전략가형</span> — 분석하고 계획하며 이끄는 리더</li>
            <li>🌱 <span className="font-medium text-[#4B5563]">서포터형</span> — 팀이 잘 될 수 있도록 지원하는 리더</li>
            <li>🦅 <span className="font-medium text-[#4B5563]">자율형</span> — 각자의 자율성을 존중하는 리더</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          리더십 스타일을 알면 팀에서 더 효과적으로 기여하는 방법을 찾을 수 있어요.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
