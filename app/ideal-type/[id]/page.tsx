import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MBTI_TYPES } from "@/constants/mbti";

export function generateStaticParams() {
  return MBTI_TYPES.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const type = MBTI_TYPES.find((t) => t.id === id);
  if (!type) return {};
  return {
    title: `${type.emoji} ${type.id} ${type.nickname} — 이상형 MBTI | 인생재부팅연구소`,
    description: `${type.id} ${type.nickname} 타입과의 연애. ${type.traits.join(", ")} 성향의 이상형 분석.`,
    openGraph: {
      title: `나의 이상형 MBTI는 ${type.id} ${type.nickname}!`,
      description: `${type.traits.join(", ")} 성향의 ${type.nickname} 타입.`,
    },
  };
}

export default async function IdealTypeResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const type = MBTI_TYPES.find((t) => t.id === id);
  if (!type) notFound();

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <Link href="/ideal-type" className="text-[#9CA3AF] text-sm hover:text-[#FF6B9D] transition-colors mb-6 inline-block">
            ← 테스트 하러 가기
          </Link>
        </div>

        {/* 메인 카드 */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-[#FF6B9D]/20 rounded-3xl p-8 mb-5 text-center">
          <p className="text-[#FF6B9D] text-xs font-bold tracking-widest mb-5">💘 이상형 MBTI 유형</p>
          <div className="text-7xl mb-4">{type.emoji}</div>
          <h1 className="text-4xl font-extrabold text-[#1A1A2E] mb-1">{type.id}</h1>
          <p className="text-[#A855F7] font-bold text-lg mb-6">{type.nickname}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {type.traits.map((t) => (
              <span key={t} className="bg-white text-[#A855F7] text-sm px-4 py-1.5 rounded-full font-medium shadow-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="border-t border-[#FF6B9D]/15 pt-5">
            <p className="text-[#4B5563] text-sm leading-7 text-left">
              {type.nickname} 타입({type.id})과의 연애는 <strong>{type.keywords[0]}</strong>, <strong>{type.keywords[1]}</strong>, <strong>{type.keywords[2]}</strong>을 중심으로 이어져요.
              {type.traits.join(", ")} 성향을 지닌 이 유형은 관계에서 진정성과 깊이를 중요하게 생각해요.
            </p>
          </div>
        </div>

        {/* 이 유형과 연애하면 */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-5 shadow-sm">
          <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">✨ {type.id}와 연애하면</p>
          <div className="space-y-2">
            {type.keywords.map((k) => (
              <div key={k} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] flex-shrink-0" />
                <span className="text-[#374151] text-sm">{k} 중심의 관계</span>
              </div>
            ))}
          </div>
        </div>

        {/* 같은 그룹 유형 */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-5 shadow-sm">
          <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">💘 비슷한 유형</p>
          <div className="flex flex-wrap gap-2">
            {MBTI_TYPES.filter((t) => t.group === type.group && t.id !== id).map((t) => (
              <Link
                key={t.id}
                href={`/ideal-type/${t.id}`}
                className="text-sm px-3 py-1.5 rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF6B9D] hover:text-[#FF6B9D] transition-colors"
              >
                {t.emoji} {t.id}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/ideal-type"
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
