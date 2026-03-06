"use client";

import { useRef, useState } from "react";

interface ResultShareProps {
  emoji: string;
  name: string;
  subtitle: string;
  traits: string[];
  color: string;
  gradient: string;
  label?: string; // e.g. "나에게 필요한 위로 유형"
}

export default function ResultShare({ emoji, name, subtitle, traits, color, gradient, label = "나의 테스트 결과" }: ResultShareProps) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  async function handleSave() {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}-결과.png`;
      a.click();
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-sm font-semibold hover:opacity-90 transition-opacity mb-3"
      >
        결과 이미지 저장하기 📤
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
            <p className="text-center text-xs text-[#9CA3AF] mb-3 font-medium">저장될 이미지 미리보기</p>

            {/* 저장될 카드 */}
            <div ref={cardRef} className={`bg-gradient-to-br ${gradient} rounded-2xl p-7 text-center`}>
              {/* 사이트 이름 */}
              <p className="text-[10px] font-bold tracking-widest mb-4" style={{ color }}>
                인생재부팅연구소
              </p>
              <div className="text-6xl mb-3">{emoji}</div>
              <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-1">{name}</h2>
              <p className="text-sm font-semibold mb-4" style={{ color }}>{subtitle}</p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {traits.map((t) => (
                  <span
                    key={t}
                    className="bg-white/80 text-xs px-3 py-1 rounded-full font-medium"
                    style={{ color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="border-t pt-4" style={{ borderColor: color + "30" }}>
                <p className="text-[11px] text-[#9CA3AF]">mbti-three-bay.vercel.app</p>
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {saving ? "저장 중..." : "저장하기 💾"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl border-2 border-[#E5E7EB] text-[#9CA3AF] text-sm hover:border-[#D1D5DB] transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
