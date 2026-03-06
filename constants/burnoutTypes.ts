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
    id: "physical",
    name: "신체소진형",
    emoji: "💤",
    subtitle: "몸이 먼저 멈춰달라고 신호 보내는 타입",
    description: "번아웃의 신호가 가장 먼저 몸으로 나타나요. 잠을 자도 피곤하고, 움직이기 귀찮고, 몸이 무겁게 느껴져요. 정신은 하고 싶은 게 있는데 몸이 따라주지 않는 것 같은 느낌이죠. 이런 신체적 소진은 가장 직접적인 번아웃 신호 중 하나예요. 몸이 보내는 신호를 무시하지 말고, 진짜 쉬는 시간이 필요해요.",
    traits: ["몸이 먼저 반응", "지속적 피로감", "회복에 시간 필요", "휴식이 최우선"],
    tip: "잠을 충분히 자는 것 외에도 가볍게 걷거나 스트레칭처럼 몸을 조금 움직이는 게 오히려 피로 회복에 도움이 될 수 있어요. 아주 작게 시작해봐요.",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "apathy",
    name: "무기력형",
    emoji: "🌫️",
    subtitle: "의욕 자체가 사라진 것 같은 타입",
    description: "뭔가 해야 한다는 건 알겠는데 하고 싶다는 마음이 안 생겨요. 좋아하던 것도 귀찮고, 감정도 잘 안 느껴지고, 그냥 시간이 흘러가요. 이 무기력감은 게으른 게 아니라 에너지가 바닥났다는 신호예요. 억지로 의욕을 만들려고 하면 더 지치니까, 지금은 그냥 쉬어도 괜찮아요.",
    traits: ["의욕 저하", "감정 평탄화", "에너지 고갈", "회복 중"],
    tip: "'아무것도 하기 싫다'는 느낌이 들 때는 진짜로 아무것도 안 해도 괜찮아요. 아무것도 안 하는 게 지금 당신에게 필요한 것일 수 있어요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "mental",
    name: "과부하형",
    emoji: "🌀",
    subtitle: "머리가 퇴근을 못 하는 타입",
    description: "몸은 집에 왔는데 머리는 아직 일 모드예요. 쉬려고 누워도 해야 할 일이 떠오르고, 끝나지 않은 것들이 계속 머릿속을 맴돌아요. 이 상태가 지속되면 쉬어도 쉬는 것 같지 않고, 결국 정신적으로 고갈돼요. 머릿속 업무 스위치를 의식적으로 꺼주는 연습이 필요해요.",
    traits: ["머리가 쉬질 않음", "생각 과부하", "퇴근 후도 업무 모드", "정신적 피로"],
    tip: "퇴근 후 '오늘의 할 일 목록'을 종이에 적고 덮어두는 것만으로도 뇌가 '이건 정리됐다'고 인식해요. 작은 마감 의식 하나가 도움이 돼요.",
    color: "#3B82F6",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "sensitive",
    name: "예민반응형",
    emoji: "🔔",
    subtitle: "감정 안테나가 너무 예민해진 타입",
    description: "평소엔 그냥 넘겼을 것들이 요즘 유독 마음에 걸려요. 별거 아닌 말에 예민하게 반응하거나, 쉬면서도 괜히 불안한 느낌이 들거나, 감정 기복이 조금 커진 것 같죠. 이건 성격 문제가 아니라 내 감정이 한계에 가까워졌다는 신호예요. 스스로를 탓하지 말고, 감정이 안정될 수 있는 환경을 만들어주세요.",
    traits: ["감정 과민", "작은 것에 반응", "불안감 증가", "감정 기복"],
    tip: "예민해졌다는 걸 알아챈 것 자체가 좋은 신호예요. 그 감정을 억누르기보다, 왜 그런지 잠깐 들여다보는 시간을 가져봐요.",
    color: "#FF6B9D",
    gradient: "from-pink-50 to-rose-50",
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
    text: "요즘 퇴근 후 집에 오면 가장 먼저 하는 행동은?",
    emoji: "🏠",
    options: [
      { text: "씻고 누워서 폰 보다가 시간 순삭", type: "physical" },
      { text: "아무것도 하기 싫어서 그냥 멍 때림", type: "apathy" },
      { text: "해야 할 일이 떠올라서 괜히 마음이 불편함", type: "mental" },
      { text: "뭔가 하고 싶긴 한데 몸이 안 따라줌", type: "physical" },
    ],
  },
  {
    id: 2,
    text: "주말이 왔을 때 내 상태는 보통?",
    emoji: "📅",
    options: [
      { text: "쉬어도 피로가 잘 안 풀린다", type: "physical" },
      { text: "약속 잡는 것 자체가 귀찮다", type: "apathy" },
      { text: "아무 계획 없이 그냥 흘려보낸다", type: "apathy" },
      { text: "쉬어도 월요일 생각이 먼저 난다", type: "mental" },
    ],
  },
  {
    id: 3,
    text: "평소보다 일이 많아졌을 때 나는 보통?",
    emoji: "📈",
    options: [
      { text: "일단 시작하기가 더 어려워진다", type: "apathy" },
      { text: "계속 해야 할 것만 생각나서 머리가 복잡하다", type: "mental" },
      { text: "그냥 아무 생각 없이 버틴다", type: "apathy" },
      { text: "집중이 금방 끊긴다", type: "physical" },
    ],
  },
  {
    id: 4,
    text: "요즘 가장 자주 드는 생각은?",
    emoji: "💭",
    options: [
      { text: "\"좀 쉬어야 할 것 같은데…\"", type: "physical" },
      { text: "\"왜 이렇게 의욕이 없지\"", type: "apathy" },
      { text: "\"해야 할 건 많은데 손이 안 간다\"", type: "mental" },
      { text: "\"괜히 예민해진 것 같다\"", type: "sensitive" },
    ],
  },
  {
    id: 5,
    text: "친구가 약속을 잡자고 하면 내 반응은?",
    emoji: "📱",
    options: [
      { text: "일단 피곤해서 미루고 싶다", type: "physical" },
      { text: "만나면 괜찮은데 나가기까지가 어렵다", type: "apathy" },
      { text: "약속 자체가 부담스럽게 느껴진다", type: "sensitive" },
      { text: "괜히 귀찮다는 생각이 먼저 든다", type: "apathy" },
    ],
  },
  {
    id: 6,
    text: "요즘 작은 일에도 내가 느끼는 반응은?",
    emoji: "🔍",
    options: [
      { text: "예전보다 쉽게 지친다", type: "physical" },
      { text: "괜히 짜증이 난다", type: "sensitive" },
      { text: "그냥 아무 감정이 없는 느낌이다", type: "apathy" },
      { text: "집중이 잘 안 된다", type: "physical" },
    ],
  },
  {
    id: 7,
    text: "요즘 나를 가장 잘 설명하는 문장은?",
    emoji: "🪞",
    options: [
      { text: "몸이 계속 무겁다", type: "physical" },
      { text: "머리가 쉬질 않는 느낌이다", type: "mental" },
      { text: "의욕이 많이 줄었다", type: "apathy" },
      { text: "감정 기복이 조금 커졌다", type: "sensitive" },
    ],
  },
  {
    id: 8,
    text: "아무 일정 없는 날이 생기면 나는 보통?",
    emoji: "🌤️",
    options: [
      { text: "하루 종일 쉬어도 피곤하다", type: "physical" },
      { text: "뭘 해야 할지 몰라서 그냥 보낸다", type: "apathy" },
      { text: "쉬면서도 마음이 편하지 않다", type: "mental" },
      { text: "쉬고 싶은데 괜히 불안하다", type: "sensitive" },
    ],
  },
  {
    id: 9,
    text: "요즘 일을 마친 뒤 기분은?",
    emoji: "🏁",
    options: [
      { text: "끝났다는 안도감이 크다", type: "physical" },
      { text: "또 해야 할 일이 떠오른다", type: "mental" },
      { text: "그냥 아무 느낌이 없다", type: "apathy" },
      { text: "생각보다 빨리 지친다", type: "physical" },
    ],
  },
  {
    id: 10,
    text: "최근 나에게 가장 가까운 상태는?",
    emoji: "🩺",
    options: [
      { text: "조금 지쳐 있는 상태", type: "physical" },
      { text: "머리가 복잡한 상태", type: "mental" },
      { text: "의욕이 떨어진 상태", type: "apathy" },
      { text: "감정이 예민해진 상태", type: "sensitive" },
    ],
  },
];
