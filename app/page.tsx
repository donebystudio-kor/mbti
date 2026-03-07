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

      {/* 소개 콘텐츠 */}
      <section className="max-w-sm mx-auto mt-14 space-y-6 text-sm text-[#6B7280] leading-7">
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">심리 테스트로 나를 탐구하는 이유</h2>
          <p>
            우리는 매일 스트레스를 받고, 결정을 내리고, 에너지를 쏟으며 살아갑니다. 그런데 정작 자신이 어떤 패턴으로
            행동하고 반응하는지 잘 모를 때가 많아요. 심리 유형 테스트는 내 안에 이미 존재하는 패턴을 언어로 표현해줍니다.
            '나는 왜 이럴까?'라는 질문에 힌트가 될 수 있어요.
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">각 테스트에서 무엇을 알 수 있나요?</h2>
          <ul className="space-y-2">
            <li><span className="font-semibold text-[#FF6B9D]">스트레스 대처 유형</span> — 압박이 올 때 나는 어떻게 반응하는지, 내 스트레스 해소 방식의 패턴을 파악해요.</li>
            <li><span className="font-semibold text-[#FF6B9D]">번아웃 신호 유형</span> — 번아웃이 왔을 때 내 몸과 마음이 보내는 고유한 신호를 이해해요.</li>
            <li><span className="font-semibold text-[#FF6B9D]">결정 방식 유형</span> — 나는 직관으로 결정하는 타입인지, 분석으로 결정하는 타입인지 알아봐요.</li>
            <li><span className="font-semibold text-[#FF6B9D]">게으름 유형</span> — 모든 게으름은 다 달라요. 나만의 게으름 패턴을 알면 극복 방법도 달라져요.</li>
            <li><span className="font-semibold text-[#FF6B9D]">리더 타입</span> — 나는 어떤 방식으로 사람들과 함께 일하고 이끄는 스타일인지 확인해요.</li>
            <li><span className="font-semibold text-[#FF6B9D]">에너지 도둑 유형</span> — 무엇이 내 에너지를 가장 많이 소모하는지 알면 더 잘 관리할 수 있어요.</li>
            <li><span className="font-semibold text-[#FF6B9D]">이상형 MBTI 찾기</span> — 내가 원하는 연인의 성향을 바탕으로 어울리는 MBTI 유형을 찾아봐요.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1A1A2E] mb-2">테스트 결과, 어떻게 활용하면 좋을까요?</h2>
          <p>
            테스트 결과는 '정답'이 아니라 '힌트'예요. 결과를 보면서 "맞아, 나 이럴 때 이러지" 하고 공감되는 부분에
            집중해보세요. 자신을 좀 더 이해하고 나면, 비슷한 상황에서 더 현명하게 대응할 수 있게 됩니다. 결과를
            친구나 가족과 공유하면 서로를 이해하는 데도 도움이 되고요.
          </p>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="max-w-sm mx-auto mt-16 text-center text-xs text-[#D1D5DB]">
        <Link href="/privacy" className="hover:text-[#FF6B9D] transition-colors mr-4">개인정보처리방침</Link>
        <p className="mt-2">인생재부팅연구소는 재미와 참고용입니다 · © 2026 인생재부팅연구소</p>
        <p className="mt-1">donebystudio@gmail.com</p>
      </footer>
    </main>
  );
}
