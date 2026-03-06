export interface ComfortType {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  traits: string[];
  tip: string;
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
  myMessage: string; // 내가 보낸 메시지
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
    myMessage: "나 오늘 회사에서 진짜 망했어",
    emoji: "😮‍💨",
    options: [
      { text: "어 왜? 무슨 일 있었어 얘기해봐", type: "empathy" },
      { text: "어쩌다가? 같이 어떻게 할지 생각해볼까", type: "solution" },
      { text: "됐고 지금 나와 맛있는 거 먹으러 가자", type: "distraction" },
    ],
  },
  {
    id: 2,
    myMessage: "나 요즘 걍 다 싫어",
    emoji: "😶",
    options: [
      { text: "지금 어디야? 갈게", type: "presence" },
      { text: "그렇구나.. 연락하고 싶을 때 해 언제든 있어", type: "alone" },
      { text: "야 그래도 넌 진짜 대단한 사람이야 알지?", type: "cheer" },
    ],
  },
  {
    id: 3,
    myMessage: "이유도 모르겠는데 그냥 기분이 별로야",
    emoji: "🌧️",
    options: [
      { text: "그럴 수 있지 많이 힘들겠다", type: "empathy" },
      { text: "나 지금 가도 돼? 아무것도 안 해도 되는데", type: "presence" },
      { text: "그렇구나.. 혼자 좀 있을래?", type: "alone" },
    ],
  },
  {
    id: 4,
    myMessage: "열심히 준비했는데 결과가 너무 별로야",
    emoji: "📉",
    options: [
      { text: "어떻게 됐는데 다음엔 어떻게 할지 같이 생각해보자", type: "solution" },
      { text: "오늘은 생각하지 말고 우리 뭔가 재밌는 거 하러 가자", type: "distraction" },
      { text: "그래도 네가 열심히 한 거 나 알아 분명히 될 거야", type: "cheer" },
    ],
  },
  {
    id: 5,
    myMessage: "나 요즘 진짜 힘들어",
    emoji: "🥺",
    options: [
      { text: "많이 힘들었구나.. 얘기해봐", type: "empathy" },
      { text: "야 근데 넌 진짜 잘 버티고 있어 그거 알아?", type: "cheer" },
      { text: "그렇구나 나 옆에 있어도 돼?", type: "presence" },
    ],
  },
  {
    id: 6,
    myMessage: "나 요즘 걱정되는 게 있어",
    emoji: "😟",
    options: [
      { text: "뭔데 같이 생각해보자", type: "solution" },
      { text: "그렇구나.. 좀 정리되면 얘기해줘", type: "alone" },
      { text: "야 지금 당장 그 생각 끊고 카페 가자", type: "distraction" },
    ],
  },
  {
    id: 7,
    myMessage: "나 억울해 진짜",
    emoji: "😤",
    options: [
      { text: "뭔데 말해봐 나 네 편이야", type: "empathy" },
      { text: "어떻게 됐는데 어떻게 하면 해결될 것 같아?", type: "solution" },
      { text: "네가 억울하면 억울한 거야 넌 그럴 사람 아니야", type: "cheer" },
    ],
  },
  {
    id: 8,
    myMessage: "나 오늘 그냥 집에서 쉬려고",
    emoji: "🛋️",
    options: [
      { text: "야 그냥 나와 밖에 있으면 더 나을 거임", type: "distraction" },
      { text: "나도 같이 있어도 돼? 진짜 아무것도 안 해도 되는데", type: "presence" },
      { text: "ㅇㅇ 잘 쉬어 연락해", type: "alone" },
    ],
  },
  {
    id: 9,
    myMessage: "겨우 좀 나아진 것 같아",
    emoji: "🌤️",
    options: [
      { text: "다행이다.. 많이 힘들었지?", type: "empathy" },
      { text: "잘됐다 혼자서 잘 이겨낸 거야", type: "alone" },
      { text: "오 그래? 앞으로 어떻게 할지 생각해봤어?", type: "solution" },
    ],
  },
  {
    id: 10,
    myMessage: "나 아무것도 하기 싫다",
    emoji: "😮‍💨",
    options: [
      { text: "나 옆에서 같이 아무것도 안 해도 돼?", type: "presence" },
      { text: "야 그러면 더 힘들어 우리 뭔가 하러 나가자", type: "distraction" },
      { text: "그럴 때 있지 근데 넌 하고 나면 잘할 거야", type: "cheer" },
    ],
  },
  {
    id: 11,
    myMessage: "나 오늘 좀 울었어",
    emoji: "😢",
    options: [
      { text: "ㅠㅠ 왜.. 많이 힘들었겠다", type: "empathy" },
      { text: "그렇구나.. 실컷 울어 다 울고 나면 연락해", type: "alone" },
      { text: "많이 힘들었구나 근데 넌 진짜 잘 버텨왔어", type: "cheer" },
    ],
  },
  {
    id: 12,
    myMessage: "나 앞으로 어떻게 해야 하지",
    emoji: "🔭",
    options: [
      { text: "같이 생각해보자 일단 뭐부터 하면 좋을지", type: "solution" },
      { text: "야 일단 지금 당장 그 생각 끊고 뭔가 하러 가자", type: "distraction" },
      { text: "그냥 옆에 있어줄까 같이 있으면 좀 나을 것 같아서", type: "presence" },
    ],
  },
];
