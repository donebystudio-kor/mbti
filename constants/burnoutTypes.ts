export interface BurnoutType {
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

export const BURNOUT_TYPES: BurnoutType[] = [
  {
    id: "binge",
    name: "폭식모드형",
    emoji: "🍕",
    subtitle: "배 안 고파도 냉장고가 열리는 타입",
    description: "스트레스나 피로가 쌓이면 가장 먼저 식욕이 반응해요. 배가 고픈 게 아닌데도 뭔가 먹고 싶어지고, 먹으면서 기분이 잠깐 나아지는 것 같아요. 음식이 일시적인 도피처가 되는 타입이에요. 먹은 후 죄책감이 드는 경우도 있으니, 먹는 게 늘었다면 몸보다 마음이 지쳐있다는 신호일 수 있어요.",
    traits: ["식욕 변화로 감지", "먹으면서 해소", "감각으로 위로", "감정과 식욕 연결"],
    tip: "배고프지 않은데 뭔가 먹고 싶어진다면, 잠깐 멈추고 '나 지금 어떤 감정이야?'를 먼저 물어봐요.",
    color: "#F59E0B",
    gradient: "from-amber-50 to-orange-50",
  },
  {
    id: "numb",
    name: "감정무감각형",
    emoji: "🧊",
    subtitle: "아무 감정도 안 느껴지면 위험 신호",
    description: "번아웃이 오면 오히려 감정이 사라져요. 슬프지도 기쁘지도 않고, 그냥 멍해요. 예전에 좋아하던 것도 무덤덤하고, 사람들이 재밌다는 것도 잘 모르겠어요. 이 무감각이 번아웃의 가장 깊은 신호 중 하나예요. 괜찮은 척하기 쉽지만, 사실 가장 쉬어야 할 때예요.",
    traits: ["감정이 먼저 사라짐", "멍한 상태", "무감각으로 보호", "회복에 시간 필요"],
    tip: "억지로 무언가를 느끼려 하지 않아도 돼요. 그냥 조용히 쉬는 것, 그것만으로 충분한 시간이에요.",
    color: "#3B82F6",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "overwork",
    name: "과활동형",
    emoji: "⚡",
    subtitle: "번아웃인데 오히려 더 바빠지는 타입",
    description: "힘들수록 더 열심히 해야 할 것 같은 느낌이 들어요. 바쁘게 있으면 생각할 틈이 없으니까요. 그래서 할 일을 스스로 더 만들거나, 업무를 놓지 못해요. 겉으로는 에너지 넘쳐 보이지만 속에서는 고갈되고 있는 상태예요. 가장 조심해야 하는 번아웃 패턴 중 하나예요.",
    traits: ["바쁜 것으로 도피", "멈추는 것이 더 힘듦", "과잉 활동", "에너지 고갈 중"],
    tip: "아무것도 안 하는 시간을 일정에 '강제로' 넣어봐요. 쉬는 것도 할 일이에요.",
    color: "#EF4444",
    gradient: "from-red-50 to-rose-50",
  },
  {
    id: "irritable",
    name: "예민폭발형",
    emoji: "💢",
    subtitle: "사소한 것에도 예민하게 반응하는 타입",
    description: "평소엔 그냥 넘겼을 것들이 갑자기 엄청 거슬려요. 작은 소리, 별거 아닌 말, 사소한 상황에도 감정이 확 올라오는 게 번아웃 신호예요. 이건 성격이 나빠진 게 아니라, 감정 완충재가 닳아 없어진 거예요. 예민해졌다 싶으면 쉬어야 할 타이밍이에요.",
    traits: ["감정 완충재 소진", "예민함이 신호", "빠른 감지력", "회복하면 원래대로"],
    tip: "예민한 게 나쁜 게 아니에요. '나 요즘 왜 이렇게 예민하지?'가 드는 순간이 쉬어야 할 신호예요.",
    color: "#FF6B9D",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    id: "flat",
    name: "방전드러눕기형",
    emoji: "🛋️",
    subtitle: "몸이 알아서 멈추는 타입",
    description: "번아웃이 오면 몸이 먼저 멈춰버려요. 아무것도 하기 싫고, 좋아하던 것도 귀찮고, 그냥 누워 있게 돼요. 어디가 아픈 것도 아닌데 일어나지지 않는 그 상태 — 몸이 강제로 브레이크를 밟는 거예요. 죄책감 느끼지 말고, 이 신호를 무시하지 않는 게 중요해요.",
    traits: ["몸이 먼저 멈춤", "무기력 감지", "강제 브레이크", "충전 후 회복"],
    tip: "그냥 누워 있어도 괜찮아요. 몸이 요청하는 휴식이에요. 억지로 일어나려다 더 고갈되지 마요.",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "impulse",
    name: "지름신강림형",
    emoji: "🛍️",
    subtitle: "갑자기 물건이 쌓이기 시작하는 타입",
    description: "스트레스가 쌓이면 뭔가 새로운 걸 사면 나아질 것 같은 느낌이 들어요. 배송이 늘어나고, 앱에서 장바구니가 쌓이기 시작해요. 새 물건이 주는 일시적 도파민 때문이에요. 번아웃의 출구를 소비에서 찾는 타입으로, 사고 나서 공허함이 오는 게 특징이에요.",
    traits: ["소비로 해소 시도", "도파민 추구", "충동 구매 증가", "일시적 위로"],
    tip: "장바구니에 넣고 48시간 후에 다시 봐요. 그래도 사고 싶으면 사되, 그 전에 '나 지금 뭐가 필요한 걸까?'를 먼저 물어봐요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
];

export interface BurnoutQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

export const BURNOUT_QUESTIONS: BurnoutQuestion[] = [
  {
    id: 1,
    text: "뭔가 힘들 것 같다 싶을 때, 몸이 먼저 보내는 신호는?",
    emoji: "📡",
    options: [
      { text: "갑자기 식욕이 폭발함, 없던 식욕이 생겨남", type: "binge" },
      { text: "뭔가 감정이 잘 안 느껴지고 그냥 멍해짐", type: "numb" },
      { text: "오히려 할 일을 더 만들고 바빠짐", type: "overwork" },
    ],
  },
  {
    id: 2,
    text: "번아웃 초기에 나타나는 나만의 신호는?",
    emoji: "🚨",
    options: [
      { text: "평소엔 안 그러는데 사소한 것에도 짜증이 남", type: "irritable" },
      { text: "갑자기 뭔가 사고 싶어짐, 특히 필요하지도 않은 것", type: "impulse" },
      { text: "하려던 것도 다 귀찮아지고 그냥 눕게 됨", type: "flat" },
    ],
  },
  {
    id: 3,
    text: "스트레스받을 때 혼자 있으면 주로 뭐 해?",
    emoji: "🏠",
    options: [
      { text: "뭔가 먹음. 배가 안 고파도 일단 냉장고를 열어봄", type: "binge" },
      { text: "별생각 없이 짜증나는 게 생기면 혼자 투덜댐", type: "irritable" },
      { text: "쇼핑 앱 열어서 장바구니에 담기 시작함", type: "impulse" },
    ],
  },
  {
    id: 4,
    text: "주말인데 제대로 못 쉬는 이유는?",
    emoji: "😮‍💨",
    options: [
      { text: "쉬는 게 뭔지 모르겠고 그냥 다 무감각함", type: "numb" },
      { text: "괜히 뭔가 더 해야 할 것 같은 느낌이 들어서", type: "overwork" },
      { text: "일어나려고 하는데 몸이 말을 안 들음", type: "flat" },
    ],
  },
  {
    id: 5,
    text: "퇴근하고 집에 들어올 때 제일 먼저 하는 것은?",
    emoji: "🚪",
    options: [
      { text: "가방 내려놓기 전에 냉장고부터 열어봄", type: "binge" },
      { text: "침대에 그냥 쓰러짐. 옷도 안 갈아입음", type: "flat" },
      { text: "별거 아닌 게 눈에 거슬리고 정리하거나 치우기 시작함", type: "irritable" },
    ],
  },
  {
    id: 6,
    text: "오랜만에 만난 친구가 \"너 요즘 어때?\" 라고 물어봤을 때",
    emoji: "🫶",
    options: [
      { text: "\"그냥... 모르겠어\"가 가장 솔직한 대답임", type: "numb" },
      { text: "\"최근에 물건 좀 많이 샀어\"가 자연스럽게 나옴", type: "impulse" },
      { text: "\"바빠, 진짜 요즘 너무 바빠\" 라는 말이 먼저 나옴", type: "overwork" },
    ],
  },
  {
    id: 7,
    text: "'아 나 번아웃인가?' 싶은 순간은 언제야?",
    emoji: "💭",
    options: [
      { text: "요즘 먹는 양이 이상하게 늘었다는 걸 알아챌 때", type: "binge" },
      { text: "왜 이렇게 바빠야 하지? 라는 생각이 처음 들 때", type: "overwork" },
      { text: "좋아하던 것도 하기 싫어지기 시작할 때", type: "flat" },
    ],
  },
  {
    id: 8,
    text: "충분히 잔 것 같은데 계속 피곤할 때 나는?",
    emoji: "😪",
    options: [
      { text: "그냥 멍하니 있는 시간이 늘어남", type: "numb" },
      { text: "사소한 소리나 상황에도 예민하게 반응하게 됨", type: "irritable" },
      { text: "뭔가 새로운 게 생기면 좀 나아질 것 같다는 생각이 듦", type: "impulse" },
    ],
  },
  {
    id: 9,
    text: "번아웃 해소에 나한테 제일 효과 있었던 것은?",
    emoji: "🌱",
    options: [
      { text: "맛있는 거 실컷 먹기", type: "binge" },
      { text: "그냥 원하는 거 사버리기", type: "impulse" },
      { text: "아무것도 안 하고 멍하게 있기", type: "numb" },
    ],
  },
  {
    id: 10,
    text: "오늘도 열심히 하기 싫을 때 드는 생각은?",
    emoji: "🤯",
    options: [
      { text: "\"왜 나만 이렇게 해야 하지?\" 라는 억울한 감정", type: "irritable" },
      { text: "\"좀만 더 하면 돼, 다 끝내야 해\" 라고 스스로를 몰아붙임", type: "overwork" },
      { text: "\"그냥 다 관두고 싶다\" 라는 생각", type: "flat" },
    ],
  },
  {
    id: 11,
    text: "번아웃이 왔을 때 주변에서 알아채는 방식은?",
    emoji: "👀",
    options: [
      { text: "밥 먹는 양이나 패턴이 바뀐 걸 주변에서 알아챔", type: "binge" },
      { text: "갑자기 물건이 많아지거나 배송이 늘어남", type: "impulse" },
      { text: "연락이 뜸해지거나 약속을 잘 안 잡게 됨", type: "flat" },
    ],
  },
  {
    id: 12,
    text: "\"나 번아웃이야\"를 스스로 인정하는 순간은?",
    emoji: "🏳️",
    options: [
      { text: "예전에 좋아하던 것도 감동이 전혀 안 올 때", type: "numb" },
      { text: "뭔가를 해도 성취감이 없고 그냥 의무감만 남을 때", type: "overwork" },
      { text: "별것도 아닌 일로 화가 나고, 그게 반복될 때", type: "irritable" },
    ],
  },
];
