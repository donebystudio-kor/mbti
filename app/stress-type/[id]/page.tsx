import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STRESS_TYPES } from "@/constants/stressTypes";

export function generateStaticParams() {
  return STRESS_TYPES.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const type = STRESS_TYPES.find((t) => t.id === id);
  if (!type) return {};
  return {
    title: `${type.emoji} ${type.name} — 스트레스 대처 유형 | 인생재부팅연구소`,
    description: type.description,
    openGraph: {
      title: `나의 스트레스 대처 유형은 ${type.name}!`,
      description: type.subtitle,
    },
  };
}

export default async function StressTypeResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const type = STRESS_TYPES.find((t) => t.id === id);
  if (!type) notFound();

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <Link href="/stress-type" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
            ← 테스트 하러 가기
          </Link>
        </div>

        {/* 메인 결과 카드 */}
        <div
          className={`bg-gradient-to-br ${type.gradient} border-2 rounded-3xl p-8 mb-5 text-center`}
          style={{ borderColor: type.color + "33" }}
        >
          <p className="text-xs font-bold tracking-widest mb-5" style={{ color: type.color }}>
            🖥️ 스트레스 대처 유형
          </p>
          <div className="text-7xl mb-4">{type.emoji}</div>
          <h1 className="text-3xl font-extrabold text-[#1A1A2E] mb-1">{type.name}</h1>
          <p className="font-medium text-base mb-6" style={{ color: type.color }}>{type.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {type.traits.map((t) => (
              <span
                key={t}
                className="bg-white text-sm px-4 py-1.5 rounded-full font-medium shadow-sm"
                style={{ color: type.color }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="border-t pt-5" style={{ borderColor: type.color + "22" }}>
            <p className="text-[#4B5563] text-sm leading-7 text-left">{type.description}</p>
          </div>
        </div>

        {/* 재부팅 방법 */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-5 shadow-sm">
          <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">🔄 나만의 재부팅 방법</p>
          <p className="text-[#374151] text-sm leading-6">{type.reboot}</p>
        </div>

        {/* 다른 유형 보기 */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-5 shadow-sm">
          <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">🖥️ 다른 스트레스 유형</p>
          <div className="flex flex-wrap gap-2">
            {STRESS_TYPES.filter((t) => t.id !== id).map((t) => (
              <Link
                key={t.id}
                href={`/stress-type/${t.id}`}
                className="text-sm px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF6B9D] hover:text-[#FF6B9D] transition-colors"
              >
                {t.emoji} {t.name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/stress-type"
          className="block w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity"
        >
          나도 테스트 해보기 →
        </Link>
      </div>

      <footer className="max-w-sm mx-auto mt-12 text-center text-xs text-[#D1D5DB]">
        <p>테스트 결과는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
      </footer>
    </main>
  );
}
