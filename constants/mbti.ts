export interface MbtiType {
  id: string;
  name: string;
  nickname: string;
  emoji: string;
  group: "NT" | "NF" | "SP" | "SJ";
  traits: string[];
  keywords: string[];
  color: string;
}

export const MBTI_TYPES: MbtiType[] = [
  // NT - 분석가
  { id: "INTJ", name: "INTJ", nickname: "전략가", emoji: "🏛️", group: "NT", traits: ["독립적", "전략적", "완벽주의"], keywords: ["계획", "목표", "논리"], color: "#6366F1" },
  { id: "INTP", name: "INTP", nickname: "논리술사", emoji: "🔬", group: "NT", traits: ["분석적", "창의적", "탐구적"], keywords: ["이론", "분석", "혁신"], color: "#8B5CF6" },
  { id: "ENTJ", name: "ENTJ", nickname: "통솔자", emoji: "👑", group: "NT", traits: ["결단력", "리더십", "효율적"], keywords: ["목표", "성취", "주도"], color: "#7C3AED" },
  { id: "ENTP", name: "ENTP", nickname: "변론가", emoji: "💡", group: "NT", traits: ["창의적", "논쟁적", "적응력"], keywords: ["토론", "아이디어", "도전"], color: "#6D28D9" },
  // NF - 외교관
  { id: "INFJ", name: "INFJ", nickname: "옹호자", emoji: "🌸", group: "NF", traits: ["통찰력", "공감", "이상주의"], keywords: ["의미", "연결", "성장"], color: "#EC4899" },
  { id: "INFP", name: "INFP", nickname: "중재자", emoji: "🌙", group: "NF", traits: ["공감력", "창의적", "이상적"], keywords: ["감성", "진정성", "자유"], color: "#DB2777" },
  { id: "ENFJ", name: "ENFJ", nickname: "선도자", emoji: "✨", group: "NF", traits: ["카리스마", "이타적", "공감"], keywords: ["영감", "관계", "발전"], color: "#BE185D" },
  { id: "ENFP", name: "ENFP", nickname: "활동가", emoji: "🌈", group: "NF", traits: ["열정적", "창의적", "사교적"], keywords: ["가능성", "열정", "자유"], color: "#9D174D" },
  // SP - 탐험가
  { id: "ISTP", name: "ISTP", nickname: "장인", emoji: "🔧", group: "SP", traits: ["실용적", "독립적", "관찰력"], keywords: ["행동", "기술", "현재"], color: "#0891B2" },
  { id: "ISFP", name: "ISFP", nickname: "모험가", emoji: "🎨", group: "SP", traits: ["온화함", "예술적", "유연함"], keywords: ["감각", "아름다움", "자유"], color: "#0E7490" },
  { id: "ESTP", name: "ESTP", nickname: "사업가", emoji: "⚡", group: "SP", traits: ["대담함", "현실적", "에너지"], keywords: ["행동", "흥미", "현재"], color: "#155E75" },
  { id: "ESFP", name: "ESFP", nickname: "연예인", emoji: "🎭", group: "SP", traits: ["즉흥적", "사교적", "재미"], keywords: ["즐거움", "사람", "현재"], color: "#164E63" },
  // SJ - 관리자
  { id: "ISTJ", name: "ISTJ", nickname: "현실주의자", emoji: "📋", group: "SJ", traits: ["책임감", "신뢰성", "체계적"], keywords: ["의무", "전통", "안정"], color: "#15803D" },
  { id: "ISFJ", name: "ISFJ", nickname: "수호자", emoji: "🛡️", group: "SJ", traits: ["배려심", "헌신적", "충실함"], keywords: ["보호", "조화", "안정"], color: "#166534" },
  { id: "ESTJ", name: "ESTJ", nickname: "경영자", emoji: "⚖️", group: "SJ", traits: ["조직적", "리더십", "책임감"], keywords: ["질서", "효율", "규칙"], color: "#14532D" },
  { id: "ESFJ", name: "ESFJ", nickname: "집정관", emoji: "🤝", group: "SJ", traits: ["친절함", "협력적", "충실함"], keywords: ["조화", "관계", "보살핌"], color: "#052E16" },
];

// 궁합 점수 (0-100): 잘 알려진 MBTI 궁합 기반
export const COMPATIBILITY: Record<string, Record<string, number>> = {
  INTJ: { INTJ: 70, INTP: 85, ENTJ: 80, ENTP: 90, INFJ: 88, INFP: 72, ENFJ: 75, ENFP: 82, ISTP: 65, ISFP: 60, ESTP: 58, ESFP: 55, ISTJ: 70, ISFJ: 62, ESTJ: 68, ESFJ: 55 },
  INTP: { INTJ: 85, INTP: 72, ENTJ: 78, ENTP: 88, INFJ: 82, INFP: 80, ENFJ: 70, ENFP: 85, ISTP: 75, ISFP: 65, ESTP: 60, ESFP: 58, ISTJ: 68, ISFJ: 60, ESTJ: 62, ESFJ: 55 },
  ENTJ: { INTJ: 80, INTP: 78, ENTJ: 72, ENTP: 85, INFJ: 80, INFP: 68, ENFJ: 75, ENFP: 78, ISTP: 70, ISFP: 60, ESTP: 72, ESFP: 60, ISTJ: 78, ISFJ: 65, ESTJ: 80, ESFJ: 65 },
  ENTP: { INTJ: 90, INTP: 88, ENTJ: 85, ENTP: 75, INFJ: 92, INFP: 80, ENFJ: 78, ENFP: 82, ISTP: 72, ISFP: 65, ESTP: 70, ESFP: 65, ISTJ: 60, ISFJ: 58, ESTJ: 65, ESFJ: 58 },
  INFJ: { INTJ: 88, INTP: 82, ENTJ: 80, ENTP: 92, INFJ: 78, INFP: 85, ENFJ: 80, ENFP: 90, ISTP: 60, ISFP: 70, ESTP: 58, ESFP: 62, ISTJ: 65, ISFJ: 72, ESTJ: 60, ESFJ: 68 },
  INFP: { INTJ: 72, INTP: 80, ENTJ: 68, ENTP: 80, INFJ: 85, INFP: 75, ENFJ: 88, ENFP: 82, ISTP: 65, ISFP: 78, ESTP: 58, ESFP: 65, ISTJ: 60, ISFJ: 75, ESTJ: 55, ESFJ: 70 },
  ENFJ: { INTJ: 75, INTP: 70, ENTJ: 75, ENTP: 78, INFJ: 80, INFP: 88, ENFJ: 72, ENFP: 85, ISTP: 62, ISFP: 75, ESTP: 65, ESFP: 72, ISTJ: 70, ISFJ: 80, ESTJ: 70, ESFJ: 78 },
  ENFP: { INTJ: 82, INTP: 85, ENTJ: 78, ENTP: 82, INFJ: 90, INFP: 82, ENFJ: 85, ENFP: 75, ISTP: 68, ISFP: 78, ESTP: 65, ESFP: 75, ISTJ: 60, ISFJ: 72, ESTJ: 60, ESFJ: 70 },
  ISTP: { INTJ: 65, INTP: 75, ENTJ: 70, ENTP: 72, INFJ: 60, INFP: 65, ENFJ: 62, ENFP: 68, ISTP: 70, ISFP: 80, ESTP: 85, ESFP: 78, ISTJ: 78, ISFJ: 72, ESTJ: 75, ESFJ: 65 },
  ISFP: { INTJ: 60, INTP: 65, ENTJ: 60, ENTP: 65, INFJ: 70, INFP: 78, ENFJ: 75, ENFP: 78, ISTP: 80, ISFP: 75, ESTP: 78, ESFP: 85, ISTJ: 70, ISFJ: 80, ESTJ: 65, ESFJ: 78 },
  ESTP: { INTJ: 58, INTP: 60, ENTJ: 72, ENTP: 70, INFJ: 58, INFP: 58, ENFJ: 65, ENFP: 65, ISTP: 85, ISFP: 78, ESTP: 72, ESFP: 85, ISTJ: 78, ISFJ: 68, ESTJ: 82, ESFJ: 72 },
  ESFP: { INTJ: 55, INTP: 58, ENTJ: 60, ENTP: 65, INFJ: 62, INFP: 65, ENFJ: 72, ENFP: 75, ISTP: 78, ISFP: 85, ESTP: 85, ESFP: 75, ISTJ: 68, ISFJ: 78, ESTJ: 70, ESFJ: 82 },
  ISTJ: { INTJ: 70, INTP: 68, ENTJ: 78, ENTP: 60, INFJ: 65, INFP: 60, ENFJ: 70, ENFP: 60, ISTP: 78, ISFP: 70, ESTP: 78, ESFP: 68, ISTJ: 80, ISFJ: 85, ESTJ: 88, ESFJ: 80 },
  ISFJ: { INTJ: 62, INTP: 60, ENTJ: 65, ENTP: 58, INFJ: 72, INFP: 75, ENFJ: 80, ENFP: 72, ISTP: 72, ISFP: 80, ESTP: 68, ESFP: 78, ISTJ: 85, ISFJ: 80, ESTJ: 80, ESFJ: 88 },
  ESTJ: { INTJ: 68, INTP: 62, ENTJ: 80, ENTP: 65, INFJ: 60, INFP: 55, ENFJ: 70, ENFP: 60, ISTP: 75, ISFP: 65, ESTP: 82, ESFP: 70, ISTJ: 88, ISFJ: 80, ESTJ: 78, ESFJ: 82 },
  ESFJ: { INTJ: 55, INTP: 55, ENTJ: 65, ENTP: 58, INFJ: 68, INFP: 70, ENFJ: 78, ENFP: 70, ISTP: 65, ISFP: 78, ESTP: 72, ESFP: 82, ISTJ: 80, ISFJ: 88, ESTJ: 82, ESFJ: 78 },
};

export const CONTENTS = [
  {
    id: "comfort-type",
    title: "내가 받고 싶은 위로 유형",
    description: "나는 어떤 위로를 받을 때 진짜 힘이 날까?",
    emoji: "💌",
    href: "/comfort-type",
    available: true,
  },
  {
    id: "stress-type",
    title: "스트레스 대처 유형",
    description: "나는 스트레스를 어떻게 처리하는 타입일까?",
    emoji: "🖥️",
    href: "/stress-type",
    available: true,
  },
  {
    id: "ideal-type",
    title: "이상형 MBTI 찾기",
    description: "내가 원하는 연인의 성향으로 이상형 유형을 찾아요",
    emoji: "💘",
    href: "/ideal-type",
    available: true,
  },
  {
    id: "compatibility",
    title: "MBTI 궁합 분석",
    description: "두 유형 사이의 궁합을 자세히 분석해드려요",
    emoji: "🔍",
    href: "/compatibility",
    available: false,
  },
  {
    id: "find-type",
    title: "내 MBTI 찾기",
    description: "몇 가지 질문으로 나의 MBTI 유형을 찾아보세요",
    emoji: "🧩",
    href: "/find-type",
    available: false,
  },
];
