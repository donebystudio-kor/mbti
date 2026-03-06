import Link from "next/link";
import { CONTENTS } from "@/constants/mbti";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-14">
      {/* 헤더 */}
      <div className="text-center mb-14">
        <div className="inline-block bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium tracking-wide">
          🔬 Psychology Lab
        </div>
        <h1 className="text-4xl font-extrabold text-[#1A1A2E] mb-3">인생재부팅연구소</h1>
        <p className="text-[#6B7280] text-base">나를 탐구하는 재미있는 심리 테스트 모음</p>
      </div>

      {/* 콘텐츠 카드 */}
      <div className="max-w-sm mx-auto fade-in-up space-y-4">
        {CONTENTS.map((content) => (
          content.available ? (
            <Link
              key={content.id}
              href={content.href}
              className="block bg-white border-2 border-transparent hover:border-[#FF6B9D]
                rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{content.emoji}</div>
                <div>
                  <div className="text-[#1A1A2E] font-bold group-hover:text-[#FF6B9D] transition-colors">
                    {content.title}
                  </div>
                  <div className="text-[#9CA3AF] text-sm mt-0.5">{content.description}</div>
                </div>
                <div className="ml-auto text-[#D1D5DB] group-hover:text-[#FF6B9D] transition-colors text-xl">→</div>
              </div>
            </Link>
          ) : (
            <div
              key={content.id}
              className="bg-[#F9FAFB] border-2 border-[#F3F4F6] rounded-2xl p-6 flex items-center gap-4 cursor-not-allowed"
            >
              <div className="text-4xl opacity-40">{content.emoji}</div>
              <div>
                <div className="text-[#9CA3AF] font-bold flex items-center gap-2">
                  {content.title}
                  <span className="text-xs bg-[#E5E7EB] text-[#9CA3AF] px-2 py-0.5 rounded-full">준비중</span>
                </div>
                <div className="text-[#D1D5DB] text-sm mt-0.5">{content.description}</div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* 푸터 */}
      <footer className="max-w-sm mx-auto mt-16 text-center text-xs text-[#D1D5DB]">
        <Link href="/privacy" className="hover:text-[#FF6B9D] transition-colors mr-4">개인정보처리방침</Link>
        <p className="mt-2">인생재부팅연구소는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
        <p className="mt-1">donebystudio@gmail.com</p>
      </footer>
    </main>
  );
}
