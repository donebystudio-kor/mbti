"use client";

import { useState } from "react";
import { QUESTIONS } from "@/constants/questions";
import { MBTI_TYPES, type MbtiType } from "@/constants/mbti";
import ResultShare from "@/components/ResultShare";

type Step = "quiz" | "result";

function calcMbti(answers: Record<number, string>): string {
  const scores: Record<string, number> = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
  Object.values(answers).forEach((v) => { scores[v] = (scores[v] || 0) + 1; });
  return (
    (scores.E >= scores.I ? "E" : "I") +
    (scores.N >= scores.S ? "N" : "S") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P")
  );
}

export default function IdealTypeFinder() {
  const [step, setStep] = useState<Step>("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [idealMbti, setIdealMbti] = useState<string>("");
  const [aiAnalysis, setAiAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const q = QUESTIONS[current];
  const progress = ((current + 1) / QUESTIONS.length) * 100;

  async function handleAnswer(value: string) {
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1);
      return;
    }

    // 마지막 답변 → 이상형 MBTI 계산
    const result = calcMbti(newAnswers);
    setIdealMbti(result);
    setLoading(true);
    setStep("result");

    try {
      const res = await fetch("/api/compatibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idealMbti: result }),
      });
      const data = await res.json();
      setAiAnalysis(data.analysis);
    } catch {
      setAiAnalysis("");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setStep("quiz");
    setCurrent(0);
    setAnswers({});
    setIdealMbti("");
    setAiAnalysis("");
    setLoading(false);
  }

  const idealType = MBTI_TYPES.find((t) => t.id === idealMbti);

  // 퀴즈 화면
  if (step === "quiz") {
    return (
      <div className="max-w-sm mx-auto">
        {/* 진행바 */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-[#9CA3AF] mb-2">
            <span>{current + 1} / {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div key={current} className="fade-in-up">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{q.emoji}</div>
            <h2 className="text-xl font-bold text-[#1A1A2E] leading-8">{q.text}</h2>
          </div>

          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full bg-white border-2 border-[#E5E7EB] hover:border-[#FF6B9D] hover:bg-pink-50
                  rounded-2xl px-6 py-5 text-left transition-all duration-150 group"
              >
                <span className="text-[#374151] font-medium group-hover:text-[#FF6B9D] transition-colors">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {current > 0 && (
          <button
            onClick={() => setCurrent(current - 1)}
            className="mt-6 w-full text-[#9CA3AF] text-sm hover:text-[#6B7280] transition-colors"
          >
            ← 이전 질문
          </button>
        )}
      </div>
    );
  }

  // 결과 화면
  return (
    <div className="max-w-sm mx-auto fade-in-up">
      {/* 이상형 유형 */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-[#FF6B9D]/20 rounded-3xl p-8 mb-5 text-center bounce-in">
        <p className="text-[#FF6B9D] text-xs font-bold tracking-widest mb-5">💘 당신의 이상형 유형</p>
        <div className="text-7xl mb-4">{idealType?.emoji}</div>
        <h2 className="text-4xl font-extrabold text-[#1A1A2E] mb-1">{idealMbti}</h2>
        <p className="text-[#A855F7] font-bold text-lg mb-5">{idealType?.nickname}</p>

        {/* 키워드 태그 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {idealType?.traits.map((t) => (
            <span key={t} className="bg-white text-[#A855F7] text-sm px-4 py-1.5 rounded-full font-medium shadow-sm">
              {t}
            </span>
          ))}
        </div>

        {/* 구분선 */}
        <div className="border-t border-[#FF6B9D]/15 pt-5">
          {loading && (
            <p className="text-[#9CA3AF] text-sm shimmer">이상형을 분석하고 있어요...</p>
          )}
          {aiAnalysis && (
            <p className="text-[#4B5563] text-sm leading-7 text-left">{aiAnalysis}</p>
          )}
        </div>
      </div>

      {/* 이 유형의 연애 스타일 */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-5 shadow-sm">
        <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">✨ {idealMbti}와 연애하면</p>
        <div className="space-y-2">
          {idealType?.keywords.map((k) => (
            <div key={k} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] flex-shrink-0" />
              <span className="text-[#374151] text-sm">{k} 중심의 관계</span>
            </div>
          ))}
        </div>
      </div>

      <ResultShare
        emoji={idealType?.emoji ?? "✨"}
        name={idealMbti}
        subtitle={idealType?.nickname ?? ""}
        traits={idealType?.traits ?? []}
        color={idealType?.color ?? "#FF6B9D"}
        gradient="from-pink-50 to-purple-50"
        label="나의 이상형 MBTI"
        shareUrl={`/ideal-type/${idealMbti}`}
      />

      <button
        onClick={handleReset}
        className="w-full py-3.5 rounded-2xl border-2 border-[#E5E7EB] text-[#9CA3AF] hover:border-[#FF6B9D] hover:text-[#FF6B9D] transition-all text-sm font-medium"
      >
        다시 테스트하기 🔄
      </button>
    </div>
  );
}
