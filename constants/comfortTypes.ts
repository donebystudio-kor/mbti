export interface ComfortType {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  traits: string[];
  tip: string; // 이런 위로를 요청해봐요
  color: string;
  gradient: string;
}

export const COMFORT_TYPES: ComfortType[] = [
  {
    id: "empathy",
    name: "공감수혈형",
    emoji: "💬",
    subtitle: "\"그랬구나\" 한마디면 살아나는 타입",
    description:
      "해결책보다 공감이 먼저예요. '그거 힘들었겠다, 네 마음 이해해'라는 말 한마디가 그 어떤 조언보다 훨씬 큰 위로가 됩니다. 내 이야기를 끝까지 들어주고, 판단하지 않고, 그냥 내 편이 돼주는 것 — 그게 전부예요.",
    traits: ["공감에 민감함", "말보다 감정", "내 편이 필요함", "경청에 감동"],
    tip: "\"일단 내 얘기 좀 들어줄 수 있어?\" 라고 먼저 말해보세요. 해결책 말고 공감이 필요하다고 알려주는 것만으로 달라져요.",
    color: "#FF6B9D",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    id: "solution",
    name: "문제해결형",
    emoji: "🔧",
    subtitle: "방향이 잡혀야 마음이 풀리는 타입",
    description:
      "감정보다 상황 정리가 우선이에요. 막막한 게 제일 힘들어서, 누군가 같이 '그럼 이렇게 해보자'를 찾아줄 때 진짜로 숨이 트입니다. 위로의 말도 좋지만, 실제로 뭔가가 나아질 것 같은 느낌이 와야 안심이 돼요.",
    traits: ["현실적", "행동 지향", "막막함을 제일 힘들어함", "방향 제시에 안도"],
    tip: "\"같이 방법 좀 생각해볼 수 있어?\" 라고 물어보세요. 같이 머리 맞대는 것만으로도 절반은 해결된 느낌이 들 거예요.",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "presence",
    name: "동행형",
    emoji: "🤝",
    subtitle: "말 없이 곁에 있어주는 것만으로 충분한 타입",
    description:
      "뭔가를 해주지 않아도 돼요. 옆에 그냥 있어주는 것, 같이 멍하니 있어주는 것, 아무 말 없이 시간을 함께 보내는 것 — 그게 제일 큰 위로예요. 혼자인 것 같은 느낌이 제일 힘들고, 누군가 곁에 있다는 사실 자체가 버팀목이 됩니다.",
    traits: ["존재감에 위로받음", "혼자 있는 느낌이 제일 힘듦", "말보다 온도", "함께하는 시간"],
    tip: "\"지금 어디야? 그냥 옆에 있어도 돼?\" 라고 물어보거나, 먼저 그렇게 요청해보세요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "distraction",
    name: "탈출형",
    emoji: "🎉",
    subtitle: "일단 딴 데 가야 충전되는 타입",
    description:
      "힘든 상황을 계속 생각하면 더 힘들어져요. 억지로라도 다른 세상에 빠지면 — 웃긴 영상, 맛있는 음식, 새로운 장소 — 어느새 에너지가 회복돼 있어요. '지금 이 순간 딴 걸 하자'는 제안이 제일 반가운 타입입니다.",
    traits: ["기분 전환에 강함", "생각 끊기가 회복의 시작", "현재 집중형", "새로운 자극 선호"],
    tip: "힘들 때 일부러라도 밖으로 나가거나, 평소에 재밌어하던 걸 찾아보세요. 도망치는 게 아니라 재충전이에요.",
    color: "#F59E0B",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: "alone",
    name: "자가처리형",
    emoji: "🏠",
    subtitle: "혼자 있어야 진짜 회복되는 타입",
    description:
      "위로받으러 누군가를 만나는 게 오히려 더 피곤해요. 혼자 생각 정리하고, 일기 쓰고, 조용히 있다 보면 어느새 스스로 해결이 돼 있어요. 내버려두는 것이 제일 큰 배려인 타입 — '연락하고 싶을 때 해'가 제일 고마운 말입니다.",
    traits: ["혼자만의 시간이 필수", "자기 회복력 강함", "강요받는 위로가 오히려 부담", "내버려두기 = 사랑"],
    tip: "\"나 혼자 있을 시간이 필요해\"라고 솔직하게 말해도 괜찮아요. 그게 냉정한 게 아니라 나만의 회복 방식이에요.",
    color: "#3B82F6",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "cheer",
    name: "응원주입형",
    emoji: "📣",
    subtitle: "\"넌 할 수 있어\"가 진짜 필요한 타입",
    description:
      "공감도 좋고 해결책도 좋지만, 결국 제일 필요한 건 '나는 네가 될 줄 알았어'라는 믿음이에요. 나를 믿어주는 사람이 한 명만 있어도 다시 일어날 수 있어요. 응원 한마디에 눈물이 나는 타입, 그게 약한 게 아니라 그만큼 진심에 반응하는 거예요.",
    traits: ["신뢰에 민감함", "응원에 에너지 충전", "나를 믿어주는 사람이 원동력", "감동받기 쉬움"],
    tip: "스스로에게도 응원을 해보세요. \"잘하고 있어, 충분해\"를 매일 말해주면 실제로 달라집니다.",
    color: "#EF4444",
    gradient: "from-red-50 to-orange-50",
  },
];

export interface ComfortQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

// 12문항 × 3지선다, 6개 유형 각각 정확히 6번 등장
// Q1: empathy, solution, distraction
// Q2: presence, alone, cheer
// Q3: empathy, presence, alone
// Q4: solution, distraction, cheer
// Q5: empathy, cheer, presence
// Q6: solution, alone, distraction
// Q7: empathy, solution, cheer
// Q8: distraction, presence, alone
// Q9: empathy, alone, solution
// Q10: presence, distraction, cheer
// Q11: empathy, alone, cheer
// Q12: solution, distraction, presence
export const COMFORT_QUESTIONS: ComfortQuestion[] = [
  {
    id: 1,
    text: "진짜 힘든 하루였어. 친구한테 카톡을 보냈을 때, 이상적인 답장은?",
    emoji: "📱",
    options: [
      { text: "\"아 진짜? 무슨 일 있었어, 얘기해봐\"", type: "empathy" },
      { text: "\"어떻게 된 거야? 내가 같이 방법 생각해볼게\"", type: "solution" },
      { text: "\"야 지금 당장 나와, 맛있는 거 먹으러 가자\"", type: "distraction" },
    ],
  },
  {
    id: 2,
    text: "울고 싶은 날, 친구가 \"내가 어떻게 해줄까?\" 물어봤을 때 솔직한 대답은?",
    emoji: "🥺",
    options: [
      { text: "\"그냥 옆에 있어줘, 아무 말 안 해도 돼\"", type: "presence" },
      { text: "\"괜찮아, 그냥 혼자 있을게. 연락하면 받아줘\"", type: "alone" },
      { text: "\"나 좀 믿어줘. 잘 할 수 있다고 해줘\"", type: "cheer" },
    ],
  },
  {
    id: 3,
    text: "딱히 이유 없이 기분이 다운됐을 때, 가장 편한 건?",
    emoji: "🌧️",
    options: [
      { text: "\"말 안 해도 돼, 근데 힘들겠다\" 한마디만 들어도 충분", type: "empathy" },
      { text: "아무 말 없이 옆에서 그냥 같이 있어주는 것", type: "presence" },
      { text: "아무도 연락 안 하고 혼자 조용히 있게 두는 것", type: "alone" },
    ],
  },
  {
    id: 4,
    text: "열심히 준비한 게 잘 안 됐을 때, 듣고 싶은 말은?",
    emoji: "📉",
    options: [
      { text: "\"다음엔 이렇게 해봐, 같이 생각해보자\"", type: "solution" },
      { text: "\"됐고, 오늘은 그냥 잊어버리고 놀러 가자\"", type: "distraction" },
      { text: "\"이게 실패가 아니야, 너는 분명히 될 사람이야\"", type: "cheer" },
    ],
  },
  {
    id: 5,
    text: "가장 힘들었던 순간, 결국 나를 버티게 해준 건?",
    emoji: "🕯️",
    options: [
      { text: "\"진짜 힘들었겠다\"고 진심으로 공감해준 한마디", type: "empathy" },
      { text: "\"넌 할 수 있어, 나는 네가 해낼 줄 알았어\" 응원의 말", type: "cheer" },
      { text: "아무 말 없이 그냥 곁에 있어준 사람", type: "presence" },
    ],
  },
  {
    id: 6,
    text: "힘든 걸 털어놓고 났더니 친구 반응이 별로였어. 제일 상처되는 반응은? (= 반대가 내가 원하는 것)",
    emoji: "😶",
    options: [
      { text: "\"왜 그랬어?\" 하며 내 잘못을 짚음 → 판단 말고 공감이 필요했던 것", type: "solution" },
      { text: "\"오히려 잘됐다!\" 하며 바로 긍정적으로 전환 → 사실 혼자 정리할 시간이 필요했던 것", type: "alone" },
      { text: "\"다음엔 어떻게 할 거야?\" 바로 행동 얘기 → 사실 그냥 기분 전환이 필요했던 것", type: "distraction" },
    ],
  },
  {
    id: 7,
    text: "억울한 일이 생겼을 때 제일 필요한 건?",
    emoji: "😤",
    options: [
      { text: "내 편이 돼서 \"진짜 억울하겠다, 네가 맞아\" 해주는 것", type: "empathy" },
      { text: "비슷한 경험이나 실질적인 대처법을 알려주는 것", type: "solution" },
      { text: "\"너라면 이겨낼 수 있어, 나는 믿어\" 해주는 것", type: "cheer" },
    ],
  },
  {
    id: 8,
    text: "기분이 완전 바닥일 때 혼자 있으면 주로 뭐 해?",
    emoji: "🛋️",
    options: [
      { text: "유튜브, 드라마, 게임 등 완전히 딴 세상에 빠짐", type: "distraction" },
      { text: "아무것도 안 하고 그냥 멍하니 누워 있음", type: "presence" },
      { text: "일기 쓰거나 생각 정리하며 혼자 처리함", type: "alone" },
    ],
  },
  {
    id: 9,
    text: "위로받고 나서 \"아, 살 것 같다\" 싶은 순간은?",
    emoji: "🌤️",
    options: [
      { text: "내 감정을 완전히 이해받았다는 느낌이 들 때", type: "empathy" },
      { text: "충분히 혼자 있다가 스스로 정리가 됐을 때", type: "alone" },
      { text: "문제가 어느 정도 해결되거나 방향이 잡혔을 때", type: "solution" },
    ],
  },
  {
    id: 10,
    text: "힘들 때 연락해준 친구, 어떤 유형이 제일 고마워?",
    emoji: "📞",
    options: [
      { text: "\"어디야? 지금 갈게\" 하고 그냥 달려오는 친구", type: "presence" },
      { text: "\"야 오늘 나랑 놀자, 생각하지 말고\" 끌고 나가는 친구", type: "distraction" },
      { text: "\"너 진짜 대단해, 나는 네가 자랑스러워\" 해주는 친구", type: "cheer" },
    ],
  },
  {
    id: 11,
    text: "나도 몰랐던 내 감정이 터져나오는 순간은?",
    emoji: "💧",
    options: [
      { text: "누군가 진심으로 \"많이 힘들었구나\"라고 해줄 때", type: "empathy" },
      { text: "혼자 조용히 앉아서 생각하다가 갑자기", type: "alone" },
      { text: "\"넌 할 수 있어\"라는 말에 갑자기 눈물이 날 때", type: "cheer" },
    ],
  },
  {
    id: 12,
    text: "시간이 지나고 돌이켜봤을 때, \"그때 그게 도움이 됐다\" 싶은 건?",
    emoji: "🔭",
    options: [
      { text: "방향을 잡아줘서 실제로 상황이 나아진 것", type: "solution" },
      { text: "억지로라도 기분 전환을 하며 에너지가 회복된 것", type: "distraction" },
      { text: "말없이 곁에 있어줬던 누군가가 생각나는 것", type: "presence" },
    ],
  },
];
