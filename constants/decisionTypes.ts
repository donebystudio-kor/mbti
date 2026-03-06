export interface DecisionType {
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

export const DECISION_TYPES: DecisionType[] = [
  {
    id: "analysis",
    name: "분석수집형",
    emoji: "🔬",
    subtitle: "정보를 다 모으다가... 결국 결정",
    description: "결정 전에 리뷰, 비교, 후기, 유튜브 영상까지 전부 수집해요. 정보가 충분하면 마음이 편해지는 타입이라 조사하는 시간이 길어지기도 하지만, 그만큼 후회가 적은 결정을 해요. 가끔 정보가 너무 많아서 오히려 더 헷갈리는 게 함정.",
    traits: ["꼼꼼한 조사", "데이터 기반", "신중한 편", "후회가 적음"],
    tip: "정보 수집에 시간 제한을 두어봐요. '오늘까지만 조사하고 내일 결정'처럼 데드라인을 스스로 만들면 훨씬 편해져요.",
    color: "#6366F1",
    gradient: "from-indigo-50 to-blue-50",
  },
  {
    id: "instinct",
    name: "직감형",
    emoji: "⚡",
    subtitle: "느낌이 오면 1초 만에 결정",
    description: "길게 고민할 필요 없어요. 처음 눈에 들어온 것, 처음 느낌이 온 것 — 그게 답이에요. 결정이 빠르고 후련하며, 오히려 길게 생각했을 때보다 직감으로 고른 게 잘 되는 경우가 많아요. 단, 충동적으로 보일 수 있으니 큰 결정은 잠깐 숨 한번 쉬고.",
    traits: ["결단력 있음", "빠른 결정", "직감을 믿음", "후련함"],
    tip: "직감은 훌륭한 능력이에요. 다만 큰 결정일수록 직감 + 한 가지 이유만 확인해보면 더 완벽해져요.",
    color: "#F59E0B",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: "survey",
    name: "여론조사형",
    emoji: "📊",
    subtitle: "주변 다 물어보고 나서 결정",
    description: "혼자 결정하기보다 주변의 경험과 의견을 모으는 게 더 편해요. 다양한 시각을 들으면 놓친 부분이 보이고, 모두가 괜찮다고 하면 마음이 편해지거든요. 다만 의견이 너무 많으면 더 헷갈릴 수 있고, 결국 본인이 원하는 게 뭔지가 제일 중요해요.",
    traits: ["사람 의견 중시", "다각도 시각", "합의 중시", "경험담 활용"],
    tip: "모든 결정을 투표로 할 필요는 없어요. 진짜 중요한 결정일수록 가장 비슷한 상황을 겪은 한 명의 조언이 더 유용해요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "deadline",
    name: "마감결정형",
    emoji: "⏰",
    subtitle: "마감이 결정을 대신 해주는 타입",
    description: "사실 결정 자체는 어렵지 않아요. 그냥 아직 '결정해야 할 시점'이 아닌 것 같을 뿐이에요. 마감이 코앞에 닥치면 놀랍도록 명확하게 결정이 돼요. 데드라인 압박이 있어야 집중이 되는 타입으로, 여유 있는 상황에서는 오히려 결정이 안 되기도 해요.",
    traits: ["마감에 강함", "압박이 집중력", "데드라인 의존", "마지막에 명확함"],
    tip: "스스로 가짜 마감을 만들어봐요. '이번 주 일요일까지 결정'처럼 인위적인 데드라인이 실제처럼 작동할 수 있어요.",
    color: "#EF4444",
    gradient: "from-red-50 to-orange-50",
  },
  {
    id: "proscons",
    name: "장단점표형",
    emoji: "📝",
    subtitle: "노트에 써서 비교해야 직성이 풀리는 타입",
    description: "장점 몇 개, 단점 몇 개 — 눈으로 봐야 마음이 정리돼요. 메모장이든 노션이든 직접 써서 비교하는 게 제일 확실해요. 논리적으로 맞는 선택을 하고 싶은 타입이라, 감정보다 근거가 중요해요. 단, 장단점이 팽팽할 때는 오히려 더 힘들어질 수 있어요.",
    traits: ["논리적 비교", "근거 중시", "정리하는 편", "체계적"],
    tip: "장단점이 팽팽할 때는 '5년 후에도 이 선택을 후회하지 않을까?'를 기준으로 해봐요. 감정도 꽤 중요한 데이터예요.",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "fate",
    name: "운명위탁형",
    emoji: "🎲",
    subtitle: "동전이 알아서 결정해주는 타입",
    description: "너무 팽팽해서 결정 못 하겠을 때, 동전 던지기나 랜덤이 해결해줘요. 사실 이미 마음에 원하는 답이 있는데 확인이 필요한 거기도 하고, 진짜로 어떻게 돼도 괜찮다는 여유가 있기도 해요. 결과를 받아들이는 능력이 뛰어난 타입이에요.",
    traits: ["결과 수용 잘 함", "흘러가는 대로", "집착 없음", "여유로운 편"],
    tip: "동전 던지는 순간 어느 면이 나왔으면 하는지 느끼는 그 감정 — 그게 진짜 당신의 마음이에요.",
    color: "#FF6B9D",
    gradient: "from-pink-50 to-rose-50",
  },
];

export interface DecisionQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

export const DECISION_QUESTIONS: DecisionQuestion[] = [
  {
    id: 1,
    text: "점심 메뉴 고를 때 나는?",
    emoji: "🍜",
    options: [
      { text: "네이버 별점, 리뷰, 웨이팅 시간까지 다 검색하고 비교", type: "analysis" },
      { text: "그냥 처음 눈에 들어온 거로 바로 결정", type: "instinct" },
      { text: "같이 가는 사람들한테 다 물어보고 다수결로", type: "survey" },
    ],
  },
  {
    id: 2,
    text: "오래 고민하던 중요한 결정, 결국 어떻게 돼?",
    emoji: "🤔",
    options: [
      { text: "더 이상 못 미루게 되는 상황이 오면 그때 결정됨", type: "deadline" },
      { text: "그냥 동전 던지거나 랜덤으로 정해버림", type: "fate" },
      { text: "종이에 진짜로 장단점 써서 비교하고 결정함", type: "proscons" },
    ],
  },
  {
    id: 3,
    text: "새 핸드폰 살 때 나의 결정 과정은?",
    emoji: "📱",
    options: [
      { text: "스펙 비교 사이트, 유튜브 리뷰, 커뮤니티 후기까지 싹 다 챙김", type: "analysis" },
      { text: "약정 끝나는 날 그냥 그때 나온 신상으로 결정", type: "deadline" },
      { text: "그냥 색깔이나 디자인이 마음에 드는 거로", type: "fate" },
    ],
  },
  {
    id: 4,
    text: "여행지 고를 때는?",
    emoji: "✈️",
    options: [
      { text: "갑자기 '거기 가고 싶다'는 느낌이 오면 거기로 결정", type: "instinct" },
      { text: "같이 가는 사람들 의견 다 모아서 원하는 곳으로", type: "survey" },
      { text: "날씨, 비용, 이동거리, 비자 여부 다 따지고 결정", type: "proscons" },
    ],
  },
  {
    id: 5,
    text: "이직이나 큰 변화를 앞두고 있을 때?",
    emoji: "🚪",
    options: [
      { text: "업계 정보, 연봉 시세, 회사 리뷰 엄청나게 조사함", type: "analysis" },
      { text: "현재 vs 새 선택지 장단점을 꼼꼼하게 비교해봄", type: "proscons" },
      { text: "제안 수락 기한이나 마감이 결국 결정을 대신 해줌", type: "deadline" },
    ],
  },
  {
    id: 6,
    text: "넷플릭스에서 뭐 볼지 고를 때?",
    emoji: "🎬",
    options: [
      { text: "썸네일 보다가 끌리는 느낌 오면 그걸 바로 클릭", type: "instinct" },
      { text: "추천 알고리즘이나 아무 데나 누르고 보기로 함", type: "fate" },
      { text: "같이 보는 사람한테 '뭐 보고 싶어?' 먼저 물어봄", type: "survey" },
    ],
  },
  {
    id: 7,
    text: "결정이 잘 됐다 싶을 때는 어떤 경우야?",
    emoji: "✅",
    options: [
      { text: "충분히 조사하고 근거 있는 결정이었을 때", type: "analysis" },
      { text: "여러 사람 의견 들어보고 결정했을 때", type: "survey" },
      { text: "직접 비교해서 논리적으로 옳은 결정이었을 때", type: "proscons" },
    ],
  },
  {
    id: 8,
    text: "결정하고 나서 마음이 편한 편이야?",
    emoji: "😌",
    options: [
      { text: "직감대로 했으면 보통 편함. 찝찝함이 없어", type: "instinct" },
      { text: "어쩔 수 없었으니까 이미 됐음. 후회 없음", type: "deadline" },
      { text: "내가 결정한 게 아니니까 책임감이 좀 덜함ㅋㅋ", type: "fate" },
    ],
  },
  {
    id: 9,
    text: "결정하고 나서도 다시 검색해보는 편이야?",
    emoji: "🔍",
    options: [
      { text: "더 좋은 선택지 없었는지 또 찾아봄. 가끔 후회도 함", type: "analysis" },
      { text: "어차피 랜덤이었으니까 그냥 받아들임", type: "fate" },
      { text: "한번 마음 먹으면 별로 안 돌아봄. 직감을 믿으니까", type: "instinct" },
    ],
  },
  {
    id: 10,
    text: "결정을 미루는 가장 큰 이유는?",
    emoji: "⏳",
    options: [
      { text: "아직 결정할 만한 시점이 아닌 것 같아서", type: "deadline" },
      { text: "좀 더 다른 사람들 얘기를 들어보고 싶어서", type: "survey" },
      { text: "아직 정리 안 된 부분이 있는 것 같아서", type: "proscons" },
    ],
  },
  {
    id: 11,
    text: "충동구매 vs 계획구매, 나는?",
    emoji: "🛍️",
    options: [
      { text: "리뷰 다 보고 장바구니에 담아두고 일주일 후에 구매", type: "analysis" },
      { text: "그냥 눈에 띄면 삼ㅋㅋ 일단 사고 봄", type: "fate" },
      { text: "사야 할 이유 vs 안 사야 할 이유 직접 따지고 구매", type: "proscons" },
    ],
  },
  {
    id: 12,
    text: "친구가 결정 못 하고 있을 때 해주는 말은?",
    emoji: "🗣️",
    options: [
      { text: "\"솔직히 둘 중에 더 끌리는 게 뭐야? 그게 답이야\"", type: "instinct" },
      { text: "\"주변에 해본 사람 없어? 일단 물어봐봐\"", type: "survey" },
      { text: "\"언제까지 결정해야 돼? 그 때 되면 알아서 될 거야\"", type: "deadline" },
    ],
  },
];
