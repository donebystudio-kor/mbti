"use client";

import { useState } from "react";
import { LEADER_QUESTIONS, LEADER_TYPES, type LeaderType } from "@/constants/leaderTypes";
import ResultShare from "@/components/ResultShare";

type Step = "quiz" | "result";

function calcLeaderType(answers: string[]): LeaderType {
  const counts: Record<string, number> = {};
  answers.forEach((type) => {
    counts[type] = (counts[type] || 0) + 1;
  });
  const topId = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return LEADER_TYPES.find((t) => t.id === topId)!;
}

export default function LeaderTypeFinder() {
  const [step, setStep] = useState<Step>("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<LeaderType | null>(null);

  const q = LEADER_QUESTIONS[current];
  const progress = ((current + 1) / LEADER_QUESTIONS.length) * 100;

  function handleAnswer(type: string) {
    const newAnswers = [...answers, type];

    if (current < LEADER_QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      return;
    }

    const leaderType = calcLeaderType(newAnswers);
    setResult(leaderType);
    setAnswers(newAnswers);
    setStep("result");
  }

  function handleBack() {
    if (current === 0) return;
    setAnswers(answers.slice(0, -1));
    setCurrent(current - 1);
  }

  function handleReset() {
    setStep("quiz");
    setCurrent(0);
    setAnswers([]);
    setResult(null);
  }

  if (step === "quiz") {
    return (
      <div className="max-w-sm mx-auto">
        <div className="mb-8">
          <div className="flex justify-between text-xs text-[#9CA3AF] mb-2">
            <span>{current + 1} / {LEADER_QUESTIONS.length}</span>
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
                key={opt.type}
                onClick={() => handleAnswer(opt.type)}
                className="w-full bg-white border-2 border-[#E5E7EB] hover:border-[#FF6B9D] hover:bg-pink-50
                  rounded-2xl px-6 py-4 text-left transition-all duration-150 group"
              >
                <span className="text-[#374151] font-medium group-hover:text-[#FF6B9D] transition-colors text-sm leading-6">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {current > 0 && (
          <button
            onClick={handleBack}
            className="mt-6 w-full text-[#9CA3AF] text-sm hover:text-[#6B7280] transition-colors"
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
          👑 나의 리더 타입
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
        <p className="text-[#9CA3AF] text-xs font-bold tracking-wider mb-3">🌱 리더십 성장 팁</p>
        <p className="text-[#374151] text-sm leading-6">{result.tip}</p>
      </div>

      <ResultShare
        emoji={result.emoji}
        name={result.name}
        subtitle={result.subtitle}
        traits={result.traits}
        color={result.color}
        gradient={result.gradient}
        label="나의 리더 타입"
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
