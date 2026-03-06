"use client";

import { useState, useRef, useEffect } from "react";
import { COMFORT_QUESTIONS, COMFORT_TYPES, type ComfortType } from "@/constants/comfortTypes";

type Step = "quiz" | "result";
type Message = { sender: "me" | "friend"; text: string };

function calcComfortType(answers: string[]): ComfortType {
  const counts: Record<string, number> = {};
  answers.forEach((type) => { counts[type] = (counts[type] || 0) + 1; });
  const topId = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return COMFORT_TYPES.find((t) => t.id === topId)!;
}

export default function ComfortTypeFinder() {
  const [step, setStep] = useState<Step>("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [history, setHistory] = useState<Message[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<ComfortType | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const q = COMFORT_QUESTIONS[current];
  const progress = ((current + 1) / COMFORT_QUESTIONS.length) * 100;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, current]);

  function handleAnswer(type: string, text: string) {
    if (selected) return;
    setSelected(type);

    setTimeout(() => {
      const friendMsg: Message = { sender: "friend", text };
      const meMsg: Message = { sender: "me", text: q.myMessage };
      const newHistory = [...history, meMsg, friendMsg];
      const newAnswers = [...answers, type];

      if (current < COMFORT_QUESTIONS.length - 1) {
        setHistory(newHistory);
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setHistory(newHistory);
        setAnswers(newAnswers);
        const comfortType = calcComfortType(newAnswers);
        setResult(comfortType);
        setStep("result");
      }
    }, 380);
  }

  function handleReset() {
    setStep("quiz");
    setCurrent(0);
    setAnswers([]);
    setHistory([]);
    setSelected(null);
    setResult(null);
  }

  if (step === "quiz") {
    return (
      <div className="max-w-sm mx-auto">
        {/* 진행바 */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-[#9CA3AF] mb-1.5">
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

        {/* 채팅 헤더 */}
        <div className="bg-[#F7F7F7] rounded-t-2xl px-4 py-3 flex items-center gap-2.5 border border-[#E5E7EB] border-b-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            친
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1A1A2E]">친구</p>
            <p className="text-[10px] text-[#9CA3AF]">온라인</p>
          </div>
        </div>

        {/* 채팅 본문 — 대화 누적 + 현재 질문 */}
        <div className="bg-white border border-[#E5E7EB] border-t-0 rounded-b-2xl px-4 pt-4 pb-5 max-h-[420px] overflow-y-auto">
          {/* 누적된 대화 */}
          {history.map((msg, i) => (
            <div key={i} className={`flex mb-3 ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "friend" && (
                <div className="w-6 h-6 rounded-full bg-[#D1D5DB] flex items-center justify-center text-white text-[9px] font-bold mr-1.5 flex-shrink-0 mt-0.5">
                  친
                </div>
              )}
              <div className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-5 ${
                msg.sender === "me"
                  ? "bg-[#FEE500] rounded-tr-sm text-[#1A1A2E] font-medium"
                  : "bg-[#F0F0F0] rounded-tl-sm text-[#374151]"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {/* 현재 내 메시지 */}
          <div className="flex justify-end mb-4">
            <div className="max-w-[78%] bg-[#FEE500] rounded-2xl rounded-tr-sm px-3.5 py-2 shadow-sm">
              <p className="text-[#1A1A2E] text-sm font-medium leading-5">{q.myMessage}</p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="flex items-center gap-2 mb-3.5">
            <div className="flex-1 h-px bg-[#F0F0F0]" />
            <p className="text-[10px] text-[#C4C4C4] whitespace-nowrap">어떤 답장이 제일 좋아?</p>
            <div className="flex-1 h-px bg-[#F0F0F0]" />
          </div>

          {/* 선택지 */}
          <div className="space-y-2">
            {q.options.map((opt) => (
              <button
                key={opt.type}
                onClick={() => handleAnswer(opt.type, opt.text)}
                disabled={!!selected}
                className={`w-full flex items-start gap-2 text-left transition-all duration-200 group ${
                  selected === opt.type ? "opacity-100" : selected ? "opacity-30" : "opacity-100"
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5 transition-all ${
                  selected === opt.type
                    ? "bg-gradient-to-br from-[#FF6B9D] to-[#A855F7]"
                    : "bg-[#D1D5DB] group-hover:bg-gradient-to-br group-hover:from-[#FF6B9D] group-hover:to-[#A855F7]"
                }`}>
                  친
                </div>
                <div className={`flex-1 rounded-2xl rounded-tl-sm px-3.5 py-2 transition-all duration-200 ${
                  selected === opt.type
                    ? "bg-gradient-to-r from-[#FF6B9D]/10 to-[#A855F7]/10 border-2 border-[#FF6B9D]/40"
                    : "bg-[#F0F0F0] border-2 border-transparent group-hover:border-[#FF6B9D]/20 group-hover:bg-pink-50"
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
          <div ref={bottomRef} />
        </div>
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
            <span key={t} className="bg-white text-sm px-4 py-1.5 rounded-full font-medium shadow-sm" style={{ color: result.color }}>
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
