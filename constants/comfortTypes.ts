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
  myMessage: string;
  options: { text: string; type: string }[];
}

// 하나의 이어지는 대화 — 나쁜 하루에 대해 친구와 카톡하는 흐름
// 12문항 × 3지선다, 6개 유형 각각 정확히 6번 등장
// Q1:  empathy, solution, distraction
// Q2:  presence, alone, cheer
// Q3:  empathy, presence, alone
// Q4:  solution, distraction, cheer
// Q5:  empathy, cheer, presence
// Q6:  solution, alone, distraction
// Q7:  empathy, solution, cheer
// Q8:  distraction, presence, alone
// Q9:  empathy, alone, solution
// Q10: presence, distraction, cheer
// Q11: empathy, alone, cheer
// Q12: solution, distraction, presence
export const COMFORT_QUESTIONS: ComfortQuestion[] = [
  {
    id: 1,
    myMessage: "나 오늘 진짜 별로야",
    options: [
      { text: "왜? 무슨 일 있었어", type: "empathy" },
      { text: "어떻게 된 거야? 얘기해봐", type: "solution" },
      { text: "됐고 지금 나와 맛있는 거 먹자", type: "distraction" },
    ],
  },
  {
    id: 2,
    myMessage: "열심히 준비했는데 다 망했어 진짜",
    options: [
      { text: "지금 어디야 갈게", type: "presence" },
      { text: "그렇구나.. 혼자 있고 싶어?", type: "alone" },
      { text: "야 그래도 넌 열심히 한 거잖아", type: "cheer" },
    ],
  },
  {
    id: 3,
    myMessage: "억울하기도 하고 내 잘못인가 싶기도 하고",
    options: [
      { text: "그럴 수 있지 진짜 많이 억울하겠다", type: "empathy" },
      { text: "나 지금 가도 돼? 같이 있어줄게", type: "presence" },
      { text: "좀 정리되면 얘기해줘 기다릴게", type: "alone" },
    ],
  },
  {
    id: 4,
    myMessage: "그냥 다 싫다는 생각이 드는 요즘",
    options: [
      { text: "뭐가 제일 걸려? 같이 생각해보자", type: "solution" },
      { text: "야 그러니까 지금 나오자고 기분이라도 전환해", type: "distraction" },
      { text: "야 그러면 안 돼 넌 분명히 잘 될 거야", type: "cheer" },
    ],
  },
  {
    id: 5,
    myMessage: "ㅠ 그냥 집에나 있으려고",
    options: [
      { text: "많이 지쳤구나.. 쉬어 당연하지", type: "empathy" },
      { text: "나도 같이 있어도 돼? 아무것도 안 해도 되는데", type: "presence" },
      { text: "야 그냥 나와 집에 있으면 더 생각만 해", type: "distraction" },
    ],
  },
  {
    id: 6,
    myMessage: "근데 혼자 있으면 생각이 더 많아지거든",
    options: [
      { text: "어떤 생각 드는데? 같이 정리해보자", type: "solution" },
      { text: "그래도 혼자 있고 싶어? 존중할게", type: "alone" },
      { text: "그러니까 나와ㅋㅋ 나랑 있으면 딴 생각 할 틈 없어", type: "distraction" },
    ],
  },
  {
    id: 7,
    myMessage: "그냥 내가 못하는 건가 싶고...",
    options: [
      { text: "야 그런 생각 하지마 네가 못하는 게 아니야", type: "empathy" },
      { text: "뭘 보고 그런 생각 들어? 같이 얘기해봐", type: "solution" },
      { text: "야 넌 못하는 거 아니야 진짜로 믿어", type: "cheer" },
    ],
  },
  {
    id: 8,
    myMessage: "모르겠어 그냥 요즘 아무것도 하기 싫어",
    options: [
      { text: "야 그러면 억지로라도 뭔가 하자 같이 나가자", type: "distraction" },
      { text: "나 옆에서 같이 아무것도 안 해도 돼?", type: "presence" },
      { text: "그럴 때 있어 좀 쉬어 연락해", type: "alone" },
    ],
  },
  {
    id: 9,
    myMessage: "쉬어도 안 쉬어지는 느낌 있잖아",
    options: [
      { text: "그 느낌 진짜 힘들지 많이 지쳐있구나", type: "empathy" },
      { text: "그럴 땐 혼자 있는 게 나을 수도 있어", type: "alone" },
      { text: "그럼 뭐 할 때 그나마 좀 낫더라? 그거라도 해보자", type: "solution" },
    ],
  },
  {
    id: 10,
    myMessage: "ㄹㅇ.. 아 좀 울고 싶다",
    options: [
      { text: "나 지금 갈까?", type: "presence" },
      { text: "야 그러면 더 힘들어 우리 뭔가 하러 나가자", type: "distraction" },
      { text: "야 넌 충분히 잘하고 있어 그거 알아?", type: "cheer" },
    ],
  },
  {
    id: 11,
    myMessage: "고마워 그냥 얘기할 수 있어서 다행이야",
    options: [
      { text: "얼마나 힘들었을지.. 많이 참았겠다", type: "empathy" },
      { text: "언제든 연락해 혼자 끙끙 앓지 말고", type: "alone" },
      { text: "야 힘들어도 이렇게 버티고 있잖아 대단한 거야", type: "cheer" },
    ],
  },
  {
    id: 12,
    myMessage: "응.. 내일은 좀 나아지겠지?",
    options: [
      { text: "뭐부터 하면 좋을지 같이 생각해볼까", type: "solution" },
      { text: "야 당연하지 분명히 나아질 거야", type: "distraction" },
      { text: "뭐가 됐든 나 있어", type: "presence" },
    ],
  },
];
