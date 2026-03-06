export interface EnergyType {
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

export const ENERGY_TYPES: EnergyType[] = [
  {
    id: "social",
    name: "인간관계 소모형",
    emoji: "👥",
    subtitle: "사람 때문에 에너지가 빠지는 타입",
    description: "혼자 있을 때는 괜찮은데 사람을 만나고 나면 유독 피곤해요. 대화 자체가 싫은 게 아니라, 사람과 함께하는 것 자체에 에너지를 많이 쓰는 타입이에요. 모임이 즐거워도 끝나면 방전되고, 혼자만의 시간이 있어야 충전이 돼요. 나쁜 것도, 이상한 것도 아니에요. 그냥 나는 혼자 있어야 충전되는 사람인 거예요.",
    traits: ["사람 만나면 방전", "혼자가 충전 시간", "관계 피로 높음", "회복엔 고독 필요"],
    tip: "사람을 만난 날은 의도적으로 혼자만의 시간을 확보해요. '이기적'인 게 아니라 충전하는 거예요. 약속 사이에 짬을 두고, 혼자 조용히 있는 시간을 일부러 만들어보세요.",
    color: "#FF6B9D",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    id: "mental",
    name: "생각 과부하형",
    emoji: "🌀",
    subtitle: "머리가 쉬질 않아서 지치는 타입",
    description: "몸은 쉬고 있어도 머릿속은 계속 돌아가요. 별거 아닌 말 한마디가 계속 생각나고, 상황을 여러 방향으로 분석하다 보면 어느새 지쳐 있어요. 생각 자체를 멈추기가 어렵고, 뇌가 쉬는 시간이 잘 없는 타입이에요. 이 피로는 몸 피로랑 달라서 잠을 자도 머릿속이 정리되지 않으면 충전이 안 돼요.",
    traits: ["생각이 끝없이 이어짐", "분석 과잉", "뇌 피로 누적", "조용한 환경이 필요"],
    tip: "생각이 너무 많을 때는 종이에 지금 머릿속에 있는 걸 다 써보세요. 뇌가 '이건 기록됐다'고 인식하면 반복적으로 떠올리는 걸 줄일 수 있어요. 글쓰기, 메모가 생각 정리에 도움돼요.",
    color: "#6366F1",
    gradient: "from-indigo-50 to-violet-50",
  },
  {
    id: "responsibility",
    name: "책임 과다형",
    emoji: "🏋️",
    subtitle: "짊어진 게 많아서 지치는 타입",
    description: "해야 할 일, 부탁받은 일, 내가 맡은 것들이 계속 머릿속에 쌓여요. 하나를 끝내도 또 다른 게 떠오르고, 쉬는 시간에도 '이거 해야 하는데'가 계속 남아 있어요. 책임감이 강한 건 장점이지만, 스스로에게 너무 많이 지우면 에너지가 버텨주질 않아요. 가끔은 내려놓는 연습도 필요해요.",
    traits: ["할 일이 항상 머릿속에", "내려놓기 어려움", "책임감 강함", "쉬어도 찜찜함"],
    tip: "모든 책임을 완벽하게 지지 않아도 괜찮아요. 오늘 할 일 목록을 적고, 그 목록 밖의 것들은 '내일'로 명확히 분리해두세요. '지금은 이것만'이라는 기준이 에너지를 아껴줘요.",
    color: "#F59E0B",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: "procrastination",
    name: "미루기 스트레스형",
    emoji: "⏳",
    subtitle: "미루는 것 자체가 에너지를 갉아먹는 타입",
    description: "해야 한다는 걸 알면서도 시작이 안 돼요. 미루다 보면 죄책감이 쌓이고, 그 죄책감이 또 에너지를 갉아먹는 악순환이에요. 게으른 게 아니에요. 시작의 장벽이 높거나, 완벽하게 해야 한다는 부담 때문일 수 있어요. 미루는 행동 자체보다, 미루면서 드는 감정이 더 피로를 만들어요.",
    traits: ["시작이 어려움", "미루는 죄책감", "시작만 하면 되는데", "완료 후 해방감 큼"],
    tip: "일을 시작하는 것 자체를 작게 쪼개보세요. '5분만 해보기', '딱 한 줄만 쓰기'처럼 허들을 낮추면 생각보다 시작이 쉬워져요. 시작하면 대부분은 계속 하게 돼요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
];

export interface EnergyQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

export const ENERGY_QUESTIONS: EnergyQuestion[] = [
  {
    id: 1,
    text: "하루가 끝나고 유독 지칠 때, 가장 먼저 드는 느낌은?",
    emoji: "🌙",
    options: [
      { text: "사람 만나고 나면 유독 피곤하다", type: "social" },
      { text: "머릿속 생각이 계속 돌아간다", type: "mental" },
      { text: "해야 할 일이 계속 떠오른다", type: "responsibility" },
      { text: "특별히 한 것도 없는데 지친다", type: "procrastination" },
    ],
  },
  {
    id: 2,
    text: "누군가 고민을 털어놓으면 나는 보통?",
    emoji: "💬",
    options: [
      { text: "공감하다 보면 같이 지친다", type: "social" },
      { text: "해결 방법까지 계속 생각하게 된다", type: "mental" },
      { text: "들어주긴 하지만 에너지가 많이 든다", type: "responsibility" },
      { text: "듣고 나면 머릿속에 계속 남는다", type: "mental" },
    ],
  },
  {
    id: 3,
    text: "할 일이 평소보다 많아졌을 때 나는?",
    emoji: "📋",
    options: [
      { text: "시작 전에 이미 부담이 커진다", type: "procrastination" },
      { text: "머릿속 정리부터 하느라 지친다", type: "mental" },
      { text: "하나라도 제대로 해야 한다는 생각이 든다", type: "responsibility" },
      { text: "계속 미루다가 더 스트레스 받는다", type: "procrastination" },
    ],
  },
  {
    id: 4,
    text: "에너지가 빠진다고 느낄 때, 가장 자주 떠오르는 생각은?",
    emoji: "💭",
    options: [
      { text: "\"사람 만나는 것도 체력이다\"", type: "social" },
      { text: "\"생각이 너무 많다\"", type: "mental" },
      { text: "\"해야 할 게 계속 쌓인다\"", type: "responsibility" },
      { text: "\"왜 이렇게 미루게 되지\"", type: "procrastination" },
    ],
  },
  {
    id: 5,
    text: "주말 약속이 많으면 나는?",
    emoji: "📅",
    options: [
      { text: "재밌긴 한데 끝나면 확 지친다", type: "social" },
      { text: "집에 와서 생각 정리하느라 또 피곤하다", type: "mental" },
      { text: "약속 사이에 해야 할 일이 계속 떠오른다", type: "responsibility" },
      { text: "나가기 전까지 계속 미루고 싶다", type: "procrastination" },
    ],
  },
  {
    id: 6,
    text: "하루 중 가장 피곤해지는 순간은?",
    emoji: "😮‍💨",
    options: [
      { text: "사람을 많이 만난 날", type: "social" },
      { text: "생각이 멈추지 않을 때", type: "mental" },
      { text: "일이 한꺼번에 몰릴 때", type: "responsibility" },
      { text: "해야 할 걸 계속 미룰 때", type: "procrastination" },
    ],
  },
  {
    id: 7,
    text: "작은 일 하나가 생겼을 때 나는?",
    emoji: "📌",
    options: [
      { text: "괜히 신경이 오래 간다", type: "social" },
      { text: "여러 경우의 수를 계속 생각한다", type: "mental" },
      { text: "제대로 해야 한다는 부담이 생긴다", type: "responsibility" },
      { text: "나중에 해야지 하고 미룬다", type: "procrastination" },
    ],
  },
  {
    id: 8,
    text: "지쳐 있을 때 나를 가장 잘 설명하는 문장은?",
    emoji: "🪞",
    options: [
      { text: "사람 때문에 에너지가 많이 든다", type: "social" },
      { text: "머리가 계속 바쁘다", type: "mental" },
      { text: "책임이 많다고 느낀다", type: "responsibility" },
      { text: "시작하기가 어렵다", type: "procrastination" },
    ],
  },
  {
    id: 9,
    text: "연락이 많이 오는 날 나는?",
    emoji: "📱",
    options: [
      { text: "답장만 해도 피곤하다", type: "social" },
      { text: "무슨 말 해야 할지 계속 생각한다", type: "mental" },
      { text: "하나씩 처리해야 할 일처럼 느껴진다", type: "responsibility" },
      { text: "답장을 자꾸 미루게 된다", type: "procrastination" },
    ],
  },
  {
    id: 10,
    text: "에너지가 바닥났다고 느낄 때 나의 상태는?",
    emoji: "🔋",
    options: [
      { text: "사람 만나고 나면 충전이 필요하다", type: "social" },
      { text: "생각이 멈추는 시간이 부족하다", type: "mental" },
      { text: "해야 할 일이 계속 떠오른다", type: "responsibility" },
      { text: "미루다가 스트레스 받는 게 반복된다", type: "procrastination" },
    ],
  },
  {
    id: 11,
    text: "쉬려고 앉았을 때 나는 보통?",
    emoji: "🛋️",
    options: [
      { text: "혼자 있는 시간이 필요하다", type: "social" },
      { text: "머리를 쉬게 하려고 노력한다", type: "mental" },
      { text: "할 일 정리부터 하게 된다", type: "responsibility" },
      { text: "쉬어야 하는데 미루던 일이 생각난다", type: "procrastination" },
    ],
  },
  {
    id: 12,
    text: "에너지가 빠지는 가장 큰 이유를 하나 고른다면?",
    emoji: "⚡",
    options: [
      { text: "인간관계", type: "social" },
      { text: "끝없는 생각", type: "mental" },
      { text: "쌓이는 책임", type: "responsibility" },
      { text: "미루는 습관", type: "procrastination" },
    ],
  },
];
