export type Dimension = "EI" | "NS" | "TF" | "JP";

export interface Question {
  id: number;
  text: string;
  emoji: string;
  dimension: Dimension;
  options: [
    { text: string; value: "E" | "N" | "T" | "J" },
    { text: string; value: "I" | "S" | "F" | "P" }
  ];
}

export const QUESTIONS: Question[] = [
  // EI
  {
    id: 1,
    text: "연인이 퇴근 후 뭘 하고 있으면 좋겠어?",
    emoji: "🌇",
    dimension: "EI",
    options: [
      { text: "친구 만나거나 뭔가 활동적인 걸 하고 있어", value: "E" },
      { text: "집에서 좋아하는 것들로 여유롭게 충전해", value: "I" },
    ],
  },
  {
    id: 2,
    text: "연인의 친구 관계가 어떤 편이 좋아?",
    emoji: "👥",
    dimension: "EI",
    options: [
      { text: "친구가 많고 두루두루 활발하게 지내", value: "E" },
      { text: "친한 친구 몇 명과 깊게 사귀어", value: "I" },
    ],
  },
  {
    id: 3,
    text: "연인이 처음 보는 사람과 있는 상황, 어떤 모습이길 바라?",
    emoji: "🤝",
    dimension: "EI",
    options: [
      { text: "먼저 말 걸고 금세 친해져", value: "E" },
      { text: "천천히 알아가는 스타일, 한번 친해지면 정말 깊은 사이가 돼", value: "I" },
    ],
  },
  {
    id: 4,
    text: "같이 가고 싶은 데이트 장소는?",
    emoji: "📍",
    dimension: "EI",
    options: [
      { text: "새로 생긴 핫플, 사람 많은 곳도 OK", value: "E" },
      { text: "한적하고 조용한 카페나 공원", value: "I" },
    ],
  },
  {
    id: 5,
    text: "연인이 에너지를 충전하는 방식이 어떤 게 좋아?",
    emoji: "🔋",
    dimension: "EI",
    options: [
      { text: "사람들과 어울리면서 충전하는 스타일", value: "E" },
      { text: "혼자만의 시간을 가지면서 충전하는 스타일", value: "I" },
    ],
  },
  {
    id: 6,
    text: "여행 스타일이 어떤 게 맞아?",
    emoji: "🌏",
    dimension: "EI",
    options: [
      { text: "현지인과 어울리고 새로운 사람 많이 만나는 여행", value: "E" },
      { text: "우리 둘만 조용히 즐기는 여행", value: "I" },
    ],
  },
  {
    id: 7,
    text: "모임에 같이 갔을 때 연인이 어떤 모습이길 바라?",
    emoji: "🎊",
    dimension: "EI",
    options: [
      { text: "분위기 메이커로 자연스럽게 어울려줬으면", value: "E" },
      { text: "내 옆에서 나랑 조용히 함께 있어줬으면", value: "I" },
    ],
  },
  {
    id: 8,
    text: "연인이 혼자 있는 시간을 즐기는 걸 어떻게 생각해?",
    emoji: "🧘",
    dimension: "EI",
    options: [
      { text: "각자 따로 바쁘게 노는 것도 건강한 관계라 생각해", value: "E" },
      { text: "같이 있으면서 각자 좋아하는 걸 하는 편안한 분위기", value: "I" },
    ],
  },

  // NS
  {
    id: 9,
    text: "연인이 선물을 줄 때 어떤 스타일이 좋아?",
    emoji: "🎁",
    dimension: "NS",
    options: [
      { text: "내가 지나가며 한 말 기억했다가 사온 의미 있는 선물", value: "N" },
      { text: "내가 실제로 필요한 걸 딱 맞게 사온 실용적인 선물", value: "S" },
    ],
  },
  {
    id: 10,
    text: "대화할 때 어떤 주제가 나왔으면 좋겠어?",
    emoji: "💬",
    dimension: "NS",
    options: [
      { text: "미래 계획, 꿈, 인생관 같은 깊은 이야기", value: "N" },
      { text: "오늘 있었던 일, 재미있는 것들 공유하기", value: "S" },
    ],
  },
  {
    id: 11,
    text: "연인의 취미 스타일은?",
    emoji: "🎨",
    dimension: "NS",
    options: [
      { text: "새로운 걸 계속 시도하는 편 (여러 취미 탐색)", value: "N" },
      { text: "좋아하는 걸 꾸준히 깊게 파는 편", value: "S" },
    ],
  },
  {
    id: 12,
    text: "내가 고민을 털어놨을 때 연인이 어떻게 반응하면 좋겠어?",
    emoji: "🔍",
    dimension: "NS",
    options: [
      { text: "\"혹시 이런 방향은 어때?\" 새로운 관점을 제시해줘", value: "N" },
      { text: "\"지금 상황이 어떻게 된 거야?\" 구체적으로 파악하려 해줘", value: "S" },
    ],
  },
  {
    id: 13,
    text: "연인이 어떤 영화나 콘텐츠를 좋아했으면 해?",
    emoji: "🎬",
    dimension: "NS",
    options: [
      { text: "SF, 판타지, 미스터리 같이 상상력 넘치는 것", value: "N" },
      { text: "실화 기반, 일상물, 공감 가는 현실적인 것", value: "S" },
    ],
  },
  {
    id: 14,
    text: "둘이 함께하는 공간이 어떻게 꾸며져 있으면 좋겠어?",
    emoji: "🏠",
    dimension: "NS",
    options: [
      { text: "독특하고 개성 있게, 의미 있는 소품들로", value: "N" },
      { text: "깔끔하고 실용적이게, 편리함 위주로", value: "S" },
    ],
  },
  {
    id: 15,
    text: "연인이 문제가 생겼을 때 어떻게 해결하면 좋겠어?",
    emoji: "💡",
    dimension: "NS",
    options: [
      { text: "창의적이고 새로운 방법을 먼저 생각해봐", value: "N" },
      { text: "검증된 방법, 확실한 방법을 선택해", value: "S" },
    ],
  },

  // TF
  {
    id: 16,
    text: "싸우고 나서 연인이 어떻게 해줬으면 해?",
    emoji: "🌧️",
    dimension: "TF",
    options: [
      { text: "왜 싸웠는지 차분하게 이야기하고 함께 해결하기", value: "T" },
      { text: "일단 안아주고 \"힘들었지\" 먼저 달래주기", value: "F" },
    ],
  },
  {
    id: 17,
    text: "힘든 일이 있을 때 연인이 어떻게 해줬으면 해?",
    emoji: "💪",
    dimension: "TF",
    options: [
      { text: "\"이렇게 하면 해결될 것 같아\" 현실적인 조언", value: "T" },
      { text: "\"많이 힘들었겠다\" 그냥 들어주고 공감해주기", value: "F" },
    ],
  },
  {
    id: 18,
    text: "연인이 나를 칭찬할 때 어떤 방식이 좋아?",
    emoji: "✨",
    dimension: "TF",
    options: [
      { text: "\"이 부분이 특히 대단하더라\" 구체적인 이유 포함해서", value: "T" },
      { text: "\"그냥 너 진짜 최고야\" 감정 가득한 칭찬", value: "F" },
    ],
  },
  {
    id: 19,
    text: "중요한 결정을 함께 내릴 때 연인이 어떻게 했으면 해?",
    emoji: "⚖️",
    dimension: "TF",
    options: [
      { text: "장단점 리스트 뽑아서 논리적으로 분석하자고 해", value: "T" },
      { text: "\"우리 어떻게 하고 싶어?\" 서로 감정을 먼저 나눠", value: "F" },
    ],
  },
  {
    id: 20,
    text: "내가 잘못했을 때 연인이 어떻게 반응했으면 해?",
    emoji: "😔",
    dimension: "TF",
    options: [
      { text: "뭐가 잘못됐는지 명확하게 짚어줘", value: "T" },
      { text: "서운한 감정을 솔직하게 표현해줘", value: "F" },
    ],
  },
  {
    id: 21,
    text: "연인의 애정표현 방식은?",
    emoji: "💝",
    dimension: "TF",
    options: [
      { text: "말보단 행동 — 챙겨주고 옆에 있어주기", value: "T" },
      { text: "\"보고 싶어\", \"좋아해\" 말로 자주 표현해주기", value: "F" },
    ],
  },
  {
    id: 22,
    text: "연인이 친구 고민을 들어줄 때 어떤 모습이길 바라?",
    emoji: "🤗",
    dimension: "TF",
    options: [
      { text: "현실적인 해결책을 바로 제시해주는 스타일", value: "T" },
      { text: "해결보다 충분히 들어주고 공감해주는 스타일", value: "F" },
    ],
  },
  {
    id: 23,
    text: "연인이 내 선택을 어떻게 대해줬으면 해?",
    emoji: "🙌",
    dimension: "TF",
    options: [
      { text: "나중에 후회하는 것보다 솔직하게 말해줘", value: "T" },
      { text: "내 감정과 선택을 먼저 존중해줘", value: "F" },
    ],
  },

  // JP
  {
    id: 24,
    text: "약속 시간에 대해 연인이 어떻길 바라?",
    emoji: "⏰",
    dimension: "JP",
    options: [
      { text: "시간 약속을 소중히 여기는 믿음직한 스타일", value: "J" },
      { text: "자잘한 것에 얽매이지 않는 여유로운 스타일", value: "P" },
    ],
  },
  {
    id: 25,
    text: "여행 준비는 어떻게 했으면 해?",
    emoji: "✈️",
    dimension: "JP",
    options: [
      { text: "숙소, 식당, 동선 다 미리 완벽하게 짜두기", value: "J" },
      { text: "대충 방향만 잡고 현지에서 즉흥으로 결정하기", value: "P" },
    ],
  },
  {
    id: 26,
    text: "연인의 집이 어떤 모습이길 바라?",
    emoji: "🏡",
    dimension: "JP",
    options: [
      { text: "항상 정돈되어 있고 물건 제자리 있는 집", value: "J" },
      { text: "아늑하고 자유로운 분위기의 편안한 공간", value: "P" },
    ],
  },
  {
    id: 27,
    text: "저녁 메뉴 정할 때 연인은 어떤 스타일?",
    emoji: "🍽️",
    dimension: "JP",
    options: [
      { text: "\"오늘 뭐 먹을지 미리 정해두자\" 계획파", value: "J" },
      { text: "\"그냥 나가서 당기는 거 먹자\" 즉흥파", value: "P" },
    ],
  },
  {
    id: 28,
    text: "연락 스타일이 어떤 게 맞아?",
    emoji: "📱",
    dimension: "JP",
    options: [
      { text: "아침저녁 안부는 기본, 규칙적으로 연락", value: "J" },
      { text: "서로의 페이스를 존중하며 자연스럽게 연락하는 스타일", value: "P" },
    ],
  },
  {
    id: 29,
    text: "주말 계획을 어떻게 잡는 사람이 좋아?",
    emoji: "📅",
    dimension: "JP",
    options: [
      { text: "주중에 미리 \"이번 주말에 뭐 하자\" 정해두는 스타일", value: "J" },
      { text: "주말 아침에 일어나서 \"오늘 뭐 할까?\" 하는 스타일", value: "P" },
    ],
  },
  {
    id: 30,
    text: "연인이 할 일을 처리하는 방식은?",
    emoji: "📋",
    dimension: "JP",
    options: [
      { text: "할 일 목록 작성하고 하나씩 체크하는 계획형", value: "J" },
      { text: "자유롭게 흘러가다 필요할 때 집중력이 폭발하는 타입", value: "P" },
    ],
  },
];
