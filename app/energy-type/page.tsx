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

      <section className="max-w-sm mx-auto mt-12 space-y-5 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">에너지 도둑 유형이란?</h2>
          <p>
            같은 하루를 보내도 어떤 사람은 충분히 쉰 것 같고, 어떤 사람은 아무것도 안 한 것 같이 피곤한 경험 있으신가요?
            그건 에너지를 갉아먹는 원인이 사람마다 다르기 때문이에요. 내 에너지를 가장 많이 소모하는 것이 무엇인지
            알면, 더 효율적으로 에너지를 관리할 수 있습니다.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">에너지를 갉아먹는 주요 원인들</h2>
          <ul className="space-y-1.5">
            <li>👥 <span className="font-medium text-[#4B5563]">인간관계 소모형</span> — 사람들과의 관계에서 에너지가 많이 소비되는 타입</li>
            <li>🧠 <span className="font-medium text-[#4B5563]">생각 과부하형</span> — 끊임없는 생각과 걱정이 에너지를 소비하는 타입</li>
            <li>📌 <span className="font-medium text-[#4B5563]">책임 과다형</span> — 과도한 책임감과 완벽주의가 에너지를 소비하는 타입</li>
            <li>⏳ <span className="font-medium text-[#4B5563]">미루기 스트레스형</span> — 미룬 일들이 쌓여 에너지를 소비하는 타입</li>
          </ul>
        </div>
        <p className="text-xs text-[#9CA3AF]">
          에너지 도둑을 파악하면 의식적으로 그 상황을 줄이거나 대비할 수 있어요.
        </p>
      </section>

      <footer className="max-w-sm mx-auto mt-8 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
