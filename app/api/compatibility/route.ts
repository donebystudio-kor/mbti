import { NextRequest, NextResponse } from "next/server";
import { MBTI_TYPES } from "@/constants/mbti";

export async function POST(req: NextRequest) {
  const { idealMbti } = await req.json();

  const idealType = MBTI_TYPES.find((t) => t.id === idealMbti);
  if (!idealType) return NextResponse.json({ analysis: "" });

  const prompt = `당신은 MBTI 연애 전문가입니다.

사용자의 이상형 유형은 ${idealMbti}(${idealType.nickname})입니다.

${idealMbti} 유형이 연인으로서 어떤 사람인지 3-4문장으로 설명해주세요:
- 연애할 때 어떤 모습을 보이는지
- 어떤 방식으로 사랑을 표현하는지
- 함께하면 어떤 느낌인지

인사말 없이 바로 시작하고, 이모지 1-2개를 자연스럽게 섞어서 따뜻하게 작성하세요.`;

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
        max_tokens: 250,
        temperature: 0.85,
      }),
    });
    const data = await response.json();
    return NextResponse.json({ analysis: data.choices?.[0]?.message?.content ?? "" });
  } catch {
    return NextResponse.json({ analysis: "" });
  }
}
