import { NextRequest, NextResponse } from "next/server";
import { MBTI_TYPES, COMPATIBILITY } from "@/constants/mbti";

export async function POST(req: NextRequest) {
  const { myMbti, topType } = await req.json();

  const myType = MBTI_TYPES.find((t) => t.id === myMbti);
  const idealType = MBTI_TYPES.find((t) => t.id === topType);
  const score = COMPATIBILITY[myMbti]?.[topType] ?? 0;

  if (!myType || !idealType) {
    return NextResponse.json({ analysis: "" });
  }

  const prompt = `당신은 MBTI 성격 유형 전문가입니다.

${myMbti}(${myType.nickname}) 유형과 ${topType}(${idealType.nickname}) 유형의 연애 궁합 점수는 ${score}점입니다.

두 유형이 연애할 때의 궁합을 3-4문장으로 분석해주세요.
- ${myMbti}가 ${topType}에게 끌리는 이유
- 두 유형이 함께할 때 좋은 점
- 주의할 점 한 가지

인사말 없이 바로 분석 내용부터 시작하세요. 친근하고 따뜻한 톤으로 작성하세요.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300,
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ analysis });
  } catch {
    return NextResponse.json({ analysis: "" });
  }
}
