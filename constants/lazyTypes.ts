export interface LazyType {
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

export const LAZY_TYPES: LazyType[] = [
  {
    id: "planner",
    name: "계획러형",
    emoji: "📋",
    subtitle: "계획 세우는 것 자체가 일인 타입",
    description: "할 일 목록을 완벽하게 작성하는 것만으로 뭔가 해낸 기분이 들어요. 내일 할 것, 이번 주 할 것, 이번 달 할 것까지 촘촘하게 짜놓지만 실행 속도는... 좀 다른 문제예요. 계획을 세우는 데 진심이라 계획 자체는 진짜 훌륭해요. 실행도 그 계획만큼만 따라가면 완벽할 텐데!",
    traits: ["계획 작성 전문가", "내일은 진짜 함", "체계적 미루기", "리스트 애호가"],
    tip: "계획을 세웠으면 그 날 딱 한 가지만 바로 시작해봐요. '계획 완성 = 시작'이라는 규칙 하나로 의외로 많이 달라져요.",
    color: "#6366F1",
    gradient: "from-indigo-50 to-blue-50",
  },
  {
    id: "excuse",
    name: "핑계장인형",
    emoji: "🎭",
    subtitle: "오늘 못 하는 이유가 매일 새로 생기는 타입",
    description: "오늘 못 하는 이유가 항상 있어요. 컨디션, 날씨, 타이밍, 분위기... 그리고 그 이유는 매번 진짜로 느껴져요. 핑계라는 걸 알면서도 설득력 있게 자기 자신을 납득시키는 능력이 탁월해요. 내일은 진짜 할 거고, 이번엔 진심이에요. 아마도.",
    traits: ["창의적 정당화", "매일 새 이유", "자기설득 고수", "진심으로 내일"],
    tip: "핑계 목록을 실제로 적어봐요. 쓰다 보면 스스로 웃기게 느껴지는 순간이 오고, 그 타이밍에 시작하면 돼요.",
    color: "#F59E0B",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: "sprinter",
    name: "마감스프린터형",
    emoji: "⏰",
    subtitle: "마감 전날 밤이 가장 생산적인 타입",
    description: "여유로울 때는 손도 안 대다가, 마감이 코앞에 닥치면 믿을 수 없는 집중력이 발동돼요. 이 상태의 나는 진짜 최강인데, 문제는 이걸 알기 때문에 '마감 전에 해도 되잖아'가 정당화된다는 거예요. 위험하지만 성공률이 높아서 고치기가 더 어려운 패턴이에요.",
    traits: ["마감 직전 집중력", "압박이 곧 엔진", "여유 때는 충전 중", "아슬아슬한 성공"],
    tip: "가짜 마감을 진짜처럼 만들어봐요. 달력에 빨간 글씨로 쓰고 알람도 설정하면 뇌가 꽤 잘 속아요.",
    color: "#EF4444",
    gradient: "from-red-50 to-rose-50",
  },
  {
    id: "perfectionist",
    name: "완벽주의형",
    emoji: "✨",
    subtitle: "조건이 딱 맞아야 시작할 수 있는 타입",
    description: "시작하기 전에 환경이 완벽해야 해요. 책상이 정리돼야 하고, 커피도 준비돼야 하고, 기분도 맞아야 하고... 그렇게 준비하다 보면 시작 타이밍이 지나가요. 게으른 게 아니라 완벽하게 하고 싶은 마음이 너무 큰 거예요. 시작만 하면 퀄리티는 진짜 최고예요.",
    traits: ["완벽한 준비 중", "환경 세팅 필수", "시작만 하면 최고", "기준이 높음"],
    tip: "완벽한 조건은 절대 안 와요. '60점짜리 시작'이 '완벽한 미착수'보다 낫다는 걸 계속 떠올려봐요.",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "sidetask",
    name: "딴짓달인형",
    emoji: "🌊",
    subtitle: "A 하려다 B, C, D까지 끝내는 타입",
    description: "해야 할 걸 시작하려다가 갑자기 다른 게 더 급해 보여요. 방 청소, 이메일 정리, 오래된 메모 삭제... 본 작업 빼고는 다 해요. 생산성은 넘치는데 방향이 살짝 어긋나 있어요. 딴짓으로 한 것들도 나름 의미 있는데, 문제는 원래 해야 할 건 여전히 그 자리에 있다는 것.",
    traits: ["옆길 생산성", "부업이 본업", "주의력 산만", "딴짓도 진심"],
    tip: "타이머를 25분 맞추고 그 시간 동안은 딱 하나만 하기로 해봐요. 딴짓 금지 시간을 짧게 만드는 게 핵심이에요.",
    color: "#0891B2",
    gradient: "from-cyan-50 to-sky-50",
  },
  {
    id: "chill",
    name: "여유러형",
    emoji: "😌",
    subtitle: "급할 게 없다는 걸 진심으로 아는 타입",
    description: "남들이 왜 그렇게 서두르는지 잘 모르겠어요. 할 거예요, 진짜로. 다만 지금 당장은 아닐 뿐이에요. 여유가 있어야 더 잘 할 수 있다는 걸 알기 때문에 쉬는 것도 전략이에요. 실제로 마감은 거의 맞추고, 결과도 나쁘지 않아요. 스트레스 없이 사는 능력자예요.",
    traits: ["진짜 여유", "스트레스 없음", "느리지만 도착함", "쉬는 게 전략"],
    tip: "여유 있는 마인드는 장점이에요. 다만 주변 사람들의 타임라인도 가끔 체크해주면 관계도 여유로워져요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
];

export interface LazyQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

export const LAZY_QUESTIONS: LazyQuestion[] = [
  {
    id: 1,
    text: "해야 할 일이 있는데 오늘 시작 안 한 이유는?",
    emoji: "🤔",
    options: [
      { text: "내일은 진짜 할 거야. 오늘은 계획 세우는 날", type: "planner" },
      { text: "오늘은 몸이 좀 안 좋은 것 같아서 (어제도 그랬지만)", type: "excuse" },
      { text: "마감이 아직 멀어서. 지금 해도 늦지 않음", type: "sprinter" },
    ],
  },
  {
    id: 2,
    text: "작업 시작 전에 반드시 하는 것은?",
    emoji: "🖥️",
    options: [
      { text: "책상 정리. 환경이 완벽해야 시작 가능", type: "perfectionist" },
      { text: "유튜브 한 편 보고 시작하려다 세 편째 보는 중", type: "sidetask" },
      { text: "특별히 없음. 그냥 때 되면 하겠지", type: "chill" },
    ],
  },
  {
    id: 3,
    text: "'아 진짜 해야 하는데...' 생각이 드는 순간은?",
    emoji: "😬",
    options: [
      { text: "내일 할 일 목록에 오늘 것도 추가할 때", type: "planner" },
      { text: "상황이 딱 맞지 않아서 아직 못 시작했다는 생각이 들 때", type: "perfectionist" },
      { text: "마감 이틀 전인데 1도 안 했다는 걸 깨달을 때", type: "excuse" },
    ],
  },
  {
    id: 4,
    text: "마감이 일주일 남았을 때 나는?",
    emoji: "📅",
    options: [
      { text: "일단 편하게 쉼. 아직 멀었으니까", type: "sprinter" },
      { text: "그거 하다가 갑자기 방 청소를 시작함", type: "sidetask" },
      { text: "충분한 시간이 있으니 느긋하게 생각 중", type: "chill" },
    ],
  },
  {
    id: 5,
    text: "나의 To-do 리스트 활용법은?",
    emoji: "📝",
    options: [
      { text: "리스트 작성에 진심. 대신 실행은... 내일부터", type: "planner" },
      { text: "리스트 없이도 대충 살아짐", type: "chill" },
      { text: "리스트 보다가 딴 생각에 결국 다른 거 하고 있음", type: "sidetask" },
    ],
  },
  {
    id: 6,
    text: "과제나 업무가 안 끝나는 가장 큰 이유는?",
    emoji: "😅",
    options: [
      { text: "오늘은 컨디션이 좀 안 좋아서 (어제는 날씨가...)", type: "excuse" },
      { text: "완성도가 마음에 안 들어서 계속 수정 중", type: "perfectionist" },
      { text: "마감 전날부터 시작해도 어차피 됨. 지금은 예열 중", type: "sprinter" },
    ],
  },
  {
    id: 7,
    text: "내일 중요한 게 있을 때 오늘 밤은?",
    emoji: "🌙",
    options: [
      { text: "내일 타임라인을 촘촘하게 짬", type: "planner" },
      { text: "일단 자고 내일 아침에 집중해서 함", type: "sprinter" },
      { text: "평소처럼. 내일 되면 알아서 하겠지", type: "chill" },
    ],
  },
  {
    id: 8,
    text: "뭔가 미루는 자신을 정당화할 때?",
    emoji: "💬",
    options: [
      { text: "아직 준비가 덜 됐으니까 좀 더 있다가", type: "perfectionist" },
      { text: "이번 주는 진짜 너무 바빠서 어쩔 수 없어", type: "excuse" },
      { text: "미루는 게 아니라 다른 걸 먼저 하는 것", type: "sidetask" },
    ],
  },
  {
    id: 9,
    text: "친구가 \"그거 언제 해?\" 라고 물어봤을 때?",
    emoji: "🗣️",
    options: [
      { text: "요즘 좀 상황이... 곧 할 거야", type: "excuse" },
      { text: "할 거야. 급하지 않으니까 천천히", type: "chill" },
      { text: "다음 주 화요일에 시작하기로 했어", type: "planner" },
    ],
  },
  {
    id: 10,
    text: "마감 하루 전, 나의 상태는?",
    emoji: "🚨",
    options: [
      { text: "급하게 다 해치우는 중. 이때 집중력이 최고임", type: "sprinter" },
      { text: "완성은 했는데 계속 수정하고 있음", type: "perfectionist" },
      { text: "마감 있는데 갑자기 다른 게 더 급해 보임", type: "sidetask" },
    ],
  },
  {
    id: 11,
    text: "게으름에 대한 나의 기본 태도는?",
    emoji: "🛋️",
    options: [
      { text: "쉬는 것도 능력. 여유 있게 사는 게 목표", type: "chill" },
      { text: "계획은 완벽한데 실행이 좀 늦어지는 것뿐", type: "planner" },
      { text: "미룬다기보다 효율적으로 압축해서 하는 것", type: "sprinter" },
    ],
  },
  {
    id: 12,
    text: "결국 일을 다 마쳤을 때 드는 생각은?",
    emoji: "🎉",
    options: [
      { text: "하는 김에 딴 것도 다 해버렸음", type: "sidetask" },
      { text: "진작 할걸... 다음엔 진짜 일찍 시작해야지", type: "excuse" },
      { text: "아직 뭔가 더 다듬을 수 있을 것 같은 느낌", type: "perfectionist" },
    ],
  },
];
