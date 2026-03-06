import type { Metadata } from "next";
import Link from "next/link";
import ComfortTypeFinder from "@/components/ComfortTypeFinder";

export const metadata: Metadata = {
  title: "내가 받고 싶은 위로 유형 — 인생재부팅연구소",
  description: "12가지 질문에 답하면 내가 진짜 원하는 위로 유형을 알려드려요. 공감수혈형, 문제해결형, 동행형, 탈출형, 자가처리형, 응원주입형 중 당신은?",
  keywords: ["위로유형", "심리테스트", "위로방식", "인생재부팅연구소", "공감테스트"],
};

export default function ComfortTypePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="text-center mb-10">
        <Link href="/" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
          ← 인생재부팅연구소
        </Link>
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
          💌 Comfort Type Finder
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">내가 받고 싶은 위로 유형</h1>
        <p className="text-[#9CA3AF] text-sm">나는 어떤 위로를 받을 때 진짜 힘이 날까?</p>
      </div>

      <ComfortTypeFinder />

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
