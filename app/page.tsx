import Link from "next/link";
import { CONTENTS } from "@/constants/mbti";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12">
      {/* 헤더 */}
      <div className="text-center mb-12">
        <p className="text-[#A78BFA] text-sm tracking-[0.3em] uppercase mb-2">🔬 MBTI Type Lab 🔬</p>
        <h1 className="text-4xl font-bold text-[#E8E8FF] mb-1">유형연구소</h1>
        <p className="text-[#8888AA] text-xs mb-3">유형연구소</p>
        <p className="text-[#8888AA] text-sm">내 MBTI로 이상형을 찾고 궁합을 분석해보세요</p>
      </div>

      {/* 콘텐츠 카드 */}
      <div className="max-w-md mx-auto fade-in-up">
        <p className="text-center text-[#E8E8FF] mb-6 text-lg">무엇을 알고 싶으신가요?</p>
        <div className="flex flex-col gap-4">
          {CONTENTS.map((content) => (
            content.available ? (
              <Link
                key={content.id}
                href={content.href}
                className="bg-[#1A1A35] border border-[#2D2D5E] hover:border-[#A78BFA] hover:bg-[#1E1E3A]
                  rounded-xl p-6 text-left transition-all duration-200 group flex items-center gap-4"
              >
                <div className="text-4xl">{content.emoji}</div>
                <div>
                  <div className="text-[#E8E8FF] font-semibold group-hover:text-[#A78BFA] transition-colors">
                    {content.title}
                  </div>
                  <div className="text-[#8888AA] text-sm mt-1">{content.description}</div>
                </div>
              </Link>
            ) : (
              <div
                key={content.id}
                className="bg-[#13132A] border border-[#1E1E3A] rounded-xl p-6 flex items-center gap-4 opacity-50 cursor-not-allowed"
              >
                <div className="text-4xl grayscale">{content.emoji}</div>
                <div>
                  <div className="text-[#8888AA] font-semibold flex items-center gap-2">
                    {content.title}
                    <span className="text-xs bg-[#2D2D5E] text-[#6666AA] px-2 py-0.5 rounded-full">준비중</span>
                  </div>
                  <div className="text-[#555577] text-sm mt-1">{content.description}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* SEO 텍스트 */}
      <div className="max-w-md mx-auto mt-16 text-center">
        <p className="text-[#2D2D5E] text-xs leading-6">
          유형연구소는 MBTI 성격 유형을 기반으로 이상형과 궁합을 분석하는 서비스입니다.
          16가지 MBTI 유형별 연애 궁합과 이상형을 확인해보세요.
        </p>
      </div>

      {/* 푸터 */}
      <footer className="max-w-md mx-auto mt-8 text-center text-xs">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-[#8888AA]">
          <Link href="/privacy" className="hover:text-[#A78BFA] transition-colors">개인정보처리방침</Link>
        </div>
        <p className="text-[#2D2D5E]">유형연구소는 재미와 참고용입니다 · © 2026 유형연구소</p>
        <p className="mt-1 text-[#2D2D5E]">donebystudio@gmail.com</p>
      </footer>
    </main>
  );
}
