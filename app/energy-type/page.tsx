import type { Metadata } from "next";
import Link from "next/link";
import EnergyTypeFinder from "@/components/EnergyTypeFinder";

export const metadata: Metadata = {
  title: "나의 에너지 도둑 유형 테스트 — 인생재부팅연구소",
  description: "12가지 질문으로 나의 에너지를 갉아먹는 유형을 알아봐요. 인간관계 소모형, 생각 과부하형, 책임 과다형, 미루기 스트레스형 중 당신은?",
  keywords: ["에너지도둑유형", "에너지테스트", "심리테스트", "인생재부팅연구소", "번아웃"],
};

export default function EnergyTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          ⚡ Energy Thief Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">나의 에너지 도둑 유형</h1>
        <p className="text-[#9CA3AF] text-sm">내 에너지를 가장 많이 갉아먹는 게 뭔지 알아봐요</p>
      </div>

      <EnergyTypeFinder />

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
