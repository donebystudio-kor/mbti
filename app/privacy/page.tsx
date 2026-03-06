import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 인생재부팅연구소",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[#8888AA] text-sm hover:text-[#A78BFA] transition-colors mb-8 inline-block">
          ← 홈으로
        </Link>
        <h1 className="text-2xl font-bold text-[#E8E8FF] mb-2">개인정보처리방침</h1>
        <p className="text-[#8888AA] text-sm mb-10">최종 수정일: 2026년 3월 4일</p>

        <div className="space-y-8 text-sm leading-7 text-[#C8C8EE]">
          <section>
            <h2 className="text-[#E8E8FF] text-base font-semibold mb-3">1. 수집하는 개인정보</h2>
            <p>인생재부팅연구소 서비스는 회원가입 없이 이용 가능하며, 별도의 개인정보를 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-[#E8E8FF] text-base font-semibold mb-3">2. 제3자 서비스</h2>
            <ul className="list-disc list-inside space-y-1 text-[#8888AA]">
              <li>Vercel — 서비스 호스팅</li>
              <li>Groq API (Llama 모델) — AI 궁합 분석 생성</li>
            </ul>
            <p className="mt-3">AI 분석 생성 시 선택하신 MBTI 유형 정보만 전송되며, 개인 식별 정보는 포함되지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-[#E8E8FF] text-base font-semibold mb-3">3. 문의</h2>
            <p className="text-[#8888AA]">이메일: donebystudio@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
