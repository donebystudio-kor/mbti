"use client";

import { useState } from "react";
import { MBTI_TYPES, COMPATIBILITY, type MbtiType } from "@/constants/mbti";

type Step = "select" | "result";

interface CompatibilityResult {
  type: MbtiType;
  score: number;
  level: "최고" | "좋음" | "보통" | "낮음";
}

function getLevel(score: number): CompatibilityResult["level"] {
  if (score >= 85) return "최고";
  if (score >= 70) return "좋음";
  if (score >= 58) return "보통";
  return "낮음";
}

function getLevelColor(level: string) {
  if (level === "최고") return "text-[#F472B6]";
  if (level === "좋음") return "text-[#A78BFA]";
  if (level === "보통") return "text-[#60A5FA]";
  return "text-[#6B7280]";
}

function getLevelBg(level: string) {
  if (level === "최고") return "border-[#F472B6]/40 bg-[#F472B6]/5";
  if (level === "좋음") return "border-[#A78BFA]/40 bg-[#A78BFA]/5";
  if (level === "보통") return "border-[#2D2D5E] bg-[#1A1A35]";
  return "border-[#1E1E3A] bg-[#13132A]";
}

export default function IdealTypeFinder() {
  const [step, setStep] = useState<Step>("select");
  const [myMbti, setMyMbti] = useState<string | null>(null);
  const [results, setResults] = useState<CompatibilityResult[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const groups = [
    { label: "분석가 (NT)", types: MBTI_TYPES.filter((t) => t.group === "NT") },
    { label: "외교관 (NF)", types: MBTI_TYPES.filter((t) => t.group === "NF") },
    { label: "탐험가 (SP)", types: MBTI_TYPES.filter((t) => t.group === "SP") },
    { label: "관리자 (SJ)", types: MBTI_TYPES.filter((t) => t.group === "SJ") },
  ];

  async function handleSelect(mbtiId: string) {
    setMyMbti(mbtiId);
    setLoading(true);

    // 궁합 점수 계산 및 정렬
    const compat = COMPATIBILITY[mbtiId];
    const sorted: CompatibilityResult[] = MBTI_TYPES
      .filter((t) => t.id !== mbtiId)
      .map((t) => ({
        type: t,
        score: compat[t.id],
        level: getLevel(compat[t.id]),
      }))
      .sort((a, b) => b.score - a.score);

    setResults(sorted);
    setStep("result");

    // AI 분석 요청
    try {
      const res = await fetch("/api/compatibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ myMbti: mbtiId, topType: sorted[0].type.id }),
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
    setStep("select");
    setMyMbti(null);
    setResults([]);
    setAiAnalysis("");
    setLoading(false);
  }

  const myType = MBTI_TYPES.find((t) => t.id === myMbti);
  const topResult = results[0];

  if (step === "select") {
    return (
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#E8E8FF] text-lg font-medium mb-2">내 MBTI를 선택해주세요</p>
          <p className="text-[#8888AA] text-sm">16가지 유형 중 나의 유형을 고르면 이상형을 분석해드려요</p>
        </div>

        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-[#8888AA] text-xs mb-3 tracking-wider">{group.label}</p>
              <div className="grid grid-cols-4 gap-2">
                {group.types.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleSelect(t.id)}
                    className="bg-[#1A1A35] border border-[#2D2D5E] hover:border-[#A78BFA] hover:bg-[#1E1E3A]
                      rounded-xl p-3 text-center transition-all duration-150 group"
                  >
                    <div className="text-2xl mb-1">{t.emoji}</div>
                    <div className="text-[#E8E8FF] text-xs font-bold group-hover:text-[#A78BFA]">{t.id}</div>
                    <div className="text-[#8888AA] text-[10px] mt-0.5">{t.nickname}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto fade-in-up">
      {/* 내 유형 */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-2">{myType?.emoji}</div>
        <h2 className="text-2xl font-bold text-[#E8E8FF]">{myMbti} <span className="text-[#8888AA] font-normal text-lg">· {myType?.nickname}</span></h2>
        <p className="text-[#8888AA] text-sm mt-2">{myType?.keywords.join(" · ")}</p>
      </div>

      {/* 이상형 TOP 1 */}
      {topResult && (
        <div className="bg-gradient-to-br from-[#1E1A3A] to-[#1A1535] border border-[#F472B6]/30 rounded-2xl p-6 mb-6 text-center">
          <p className="text-[#F472B6] text-xs tracking-widest mb-3">💘 최고의 이상형</p>
          <div className="text-5xl mb-2">{topResult.type.emoji}</div>
          <div className="text-2xl font-bold text-[#E8E8FF]">{topResult.type.id}</div>
          <div className="text-[#8888AA] text-sm mb-3">{topResult.type.nickname}</div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex-1 bg-[#2D2D5E] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#F472B6] to-[#A78BFA] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${topResult.score}%` }}
              />
            </div>
            <span className="text-[#F472B6] font-bold text-sm">{topResult.score}%</span>
          </div>

          {/* AI 분석 */}
          {loading && (
            <p className="text-[#8888AA] text-sm mt-4 pulse-glow">AI가 궁합을 분석하고 있어요...</p>
          )}
          {aiAnalysis && (
            <p className="text-[#C8C8EE] text-sm mt-4 leading-7 text-left">{aiAnalysis}</p>
          )}
        </div>
      )}

      {/* 전체 궁합 랭킹 */}
      <div className="bg-[#13132A] border border-[#1E1E3A] rounded-2xl p-5 mb-6">
        <p className="text-[#8888AA] text-xs tracking-wider mb-4">전체 궁합 랭킹</p>
        <div className="space-y-2">
          {results.map((r, i) => (
            <div
              key={r.type.id}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all ${getLevelBg(r.level)}`}
            >
              <span className="text-[#555577] text-xs w-4">{i + 1}</span>
              <span className="text-lg">{r.type.emoji}</span>
              <div className="flex-1">
                <span className="text-[#E8E8FF] text-sm font-medium">{r.type.id}</span>
                <span className="text-[#8888AA] text-xs ml-2">{r.type.nickname}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-[#2D2D5E] rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-[#A78BFA] to-[#F472B6] h-1.5 rounded-full"
                    style={{ width: `${r.score}%` }}
                  />
                </div>
                <span className={`text-xs font-bold w-8 text-right ${getLevelColor(r.level)}`}>{r.score}</span>
                <span className={`text-xs w-8 ${getLevelColor(r.level)}`}>{r.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleReset}
        className="w-full py-3 rounded-xl border border-[#2D2D5E] text-[#8888AA] hover:border-[#A78BFA] hover:text-[#A78BFA] transition-all text-sm"
      >
        다시 선택하기
      </button>
    </div>
  );
}
