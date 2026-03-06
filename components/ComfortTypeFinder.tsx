"use client";

import { useState } from "react";
import { COMFORT_QUESTIONS, COMFORT_TYPES, type ComfortType } from "@/constants/comfortTypes";

type Step = "quiz" | "result";

function calcComfortType(answers: string[]): ComfortType {
  const counts: Record<string, number> = {};
  answers.forEach((type) => {
    counts[type] = (counts[type] || 0) + 1;
  });
  const topId = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return COMFORT_TYPES.find((t) => t.id === topId)!;
}

export default function ComfortTypeFinder() {
  const [step, setStep] = useState<Step>("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ComfortType | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const q = COMFORT_QUESTIONS[current];
  const progress = ((current + 1) / COMFORT_QUESTIONS.length) * 100;

  function handleAnswer(type: string) {
    if (selected) return;
    setSelected(type);

    setTimeout(() => {
      const newAnswers = [...answers, type];

      if (current < COMFORT_QUESTIONS.length - 1) {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
        return;
      }

      const comfortType = calcComfortType(newAnswers);
      setResult(comfortType);
      setAnswers(newAnswers);
      setStep("result");
    }, 400);
  }

  function handleBack() {
    if (current === 0) return;
    setAnswers(answers.slice(0, -1));
    setCurrent(current - 1);
    setSelected(null);
  }

  function handleReset() {
    setStep("quiz");
    setCurrent(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  }

  if (step === "quiz") {
    return (
      <div className="max-w-sm mx-auto">
        {/* 진행바 */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#9CA3AF] mb-2">
            <span>{current + 1} / {COMFORT_QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 채팅창 */}
        <div key={current} className="fade-in-up">
          {/* 상단: 채팅 헤더 */}
          <div className="bg-[#F7F7F7] rounded-t-2xl px-4 py-3 flex items-center gap-2 border border-[#E5E7EB] border-b-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] flex items-center justify-center text-white text-xs font-bold">
              친
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A2E]">친구</p>
              <p className="text-[10px] text-[#9CA3AF]">온라인</p>
            </div>
          </div>

          {/* 채팅 본문 */}
          <div className="bg-white border border-[#E5E7EB] border-t-0 rounded-b-2xl px-4 pt-4 pb-5 min-h-[320px]">
            {/* 내 메시지 (오른쪽) */}
            <div className="flex justify-end mb-5">
              <div className="max-w-[75%]">
                <div className="bg-[#FEE500] rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm">
                  <p className="text-[#1A1A2E] text-sm font-medium leading-5">{q.myMessage}</p>
                </div>
                <p className="text-[10px] text-[#C4C4C4] text-right mt-1">방금</p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-px bg-[#F3F4F6]" />
              <p className="text-[10px] text-[#C4C4C4]">어떤 답장이 가장 좋아?</p>
              <div className="flex-1 h-px bg-[#F3F4F6]" />
            </div>

            {/* 친구 답장 선택지 */}
            <div className="space-y-2.5">
              {q.options.map((opt, i) => (
                <button
                  key={opt.type}
                  onClick={() => handleAnswer(opt.type)}
                  disabled={!!selected}
                  className={`w-full flex items-start gap-2.5 text-left transition-all duration-200 group ${
                    selected === opt.type ? "opacity-100" : selected ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {/* 프로필 */}
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold transition-all ${
                    selected === opt.type
                      ? "bg-gradient-to-br from-[#FF6B9D] to-[#A855F7]"
                      : "bg-[#D1D5DB] group-hover:bg-gradient-to-br group-hover:from-[#FF6B9D] group-hover:to-[#A855F7]"
                  }`}>
                    친
                  </div>
                  {/* 말풍선 */}
                  <div className={`rounded-2xl rounded-tl-sm px-4 py-2.5 transition-all duration-200 ${
                    selected === opt.type
                      ? "bg-gradient-to-r from-[#FF6B9D]/10 to-[#A855F7]/10 border-2 border-[#FF6B9D]/30"
                      : "bg-[#F7F7F7] border-2 border-transparent group-hover:border-[#FF6B9D]/20 group-hover:bg-pink-50"
                  }`}>
                    <p className={`text-sm leading-5 transition-colors ${
                      selected === opt.type ? "text-[#FF6B9D] font-semibold" : "text-[#374151] group-hover:text-[#FF6B9D]"
                    }`}>
                      {opt.text}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {current > 0 && (
          <button
            onClick={handleBack}
            className="mt-4 w-full text-[#9CA3AF] text-sm hover:text-[#6B7280] transition-colors"
          >
            ← 이전 질문
          </button>
        )}
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="max-w-sm mx-auto fade-in-up">
      <div
        className={`bg-gradient-to-br ${result.gradient} border-2 rounded-3xl p-8 mb-5 text-center bounce-in`}
        style={{ borderColor: result.color + "33" }}
      >
        <p className="text-xs font-bold tracking-widest mb-5" style={{ color: result.color }}>
          💌 나에게 필요한 위로 유형
        </p>
        <div className="text-7xl mb-4">{result.emoji}</div>
        <h2 className="text-3xl font-extrabold text-[#1A1A2E] mb-1">{result.name}</h2>
        <p className="font-medium text-base mb-6" style={{ color: result.color }}>{result.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {result.traits.map((t) => (
            <span
              key={t}
              className="bg-white text-sm px-4 py-1.5 rounded-full font-medium shadow-sm"
              style={{ color: result.color }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="border-t pt-5" style={{ borderColor: result.color + "22" }}>
          <p className="text-[#4B5563] text-sm leading-7 text-left">{result.description}</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-5 shadow-sm">
        <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">💡 이렇게 요청해봐요</p>
        <p className="text-[#374151] text-sm leading-6">{result.tip}</p>
      </div>

      <button
        onClick={handleReset}
        className="w-full py-3.5 rounded-2xl border-2 border-[#E5E7EB] text-[#9CA3AF] hover:border-[#FF6B9D] hover:text-[#FF6B9D] transition-all text-sm font-medium"
      >
        다시 테스트하기 🔄
      </button>
    </div>
  );
}
