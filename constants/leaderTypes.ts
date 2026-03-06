export interface LeaderType {
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

export const LEADER_TYPES: LeaderType[] = [
  {
    id: "vision",
    name: "비전캐스터형",
    emoji: "🌟",
    subtitle: "\"우리 왜 하는지\" 를 누구보다 잘 아는 타입",
    description: "팀이 흔들릴 때 방향을 잡아주는 역할을 자연스럽게 해요. '이걸 왜 하는지', '어디를 향해 가는지'에 대한 감각이 있어서 큰 그림으로 사람들을 이끌어요. 세부적인 실행보다는 의미와 방향에 집중하는 편이라, 함께하는 사람들에게 동기를 불어넣는 힘이 있어요.",
    traits: ["큰 그림 제시", "동기 부여", "방향 감각", "영감을 줌"],
    tip: "비전을 제시하는 것만큼, 그 비전을 실행하는 사람들의 구체적인 어려움도 함께 챙겨봐요. 방향과 실행이 함께 가야 팀이 멀리 가요.",
    color: "#F59E0B",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: "executor",
    name: "현장지휘형",
    emoji: "⚙️",
    subtitle: "말보다 실행, 계획보다 진행 상황이 먼저인 타입",
    description: "일이 실제로 돌아가게 만드는 사람이에요. 역할 분배, 마감 설정, 진행 상황 체크 — 이런 게 자연스러워요. 말이 많은 것보다 실제로 움직이는 걸 더 중요하게 생각하고, 팀이 실제로 결과를 만들어내는 데 가장 큰 기여를 해요. 다만 팀원들의 감정보다 효율에 집중할 때가 많아서, 가끔 둘 다 챙기면 더 좋아요.",
    traits: ["실행 중심", "역할 분배", "마감 관리", "결과 지향"],
    tip: "팀이 결과를 내는 것만큼, 팀원들이 그 과정에서 어떤 감정인지도 신경 써봐요. 효율과 관계, 둘 다 잡을 수 있어요.",
    color: "#6366F1",
    gradient: "from-indigo-50 to-blue-50",
  },
  {
    id: "caretaker",
    name: "팀케어형",
    emoji: "🤝",
    subtitle: "팀원 상태를 가장 먼저 알아채는 타입",
    description: "누가 힘들어하는지, 팀 분위기가 어떤지를 가장 먼저 느껴요. 결과도 중요하지만 그 과정에서 팀원들이 소진되지 않는 게 더 중요하다고 생각해요. 자연스럽게 중재자 역할을 하게 되고, 갈등이 커지기 전에 먼저 눈치채서 조율해요. 사람을 중심에 두는 리더예요.",
    traits: ["팀원 감지", "분위기 조율", "갈등 중재", "사람 중심"],
    tip: "팀원을 챙기는 것만큼 자신도 챙겨요. 항상 타인을 먼저 보다 보면 정작 본인이 소진되는 경우가 있어요.",
    color: "#EC4899",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    id: "strategist",
    name: "전략가형",
    emoji: "🧩",
    subtitle: "리스크와 변수를 미리 계산하는 타입",
    description: "일이 시작되기 전에 이미 머릿속에서 여러 시나리오를 돌려보고 있어요. 어느 지점에서 문제가 생길 수 있는지, 어떤 순서로 해야 효율적인지 — 이런 분석이 강점이에요. 뭔가 잘 안 됐을 때도 감정보다 원인 분석이 먼저 나와요. 냉정해 보일 수 있지만 팀이 실수를 줄이는 데 큰 역할을 해요.",
    traits: ["리스크 예측", "구조적 사고", "원인 분석", "시나리오 계획"],
    tip: "완벽한 계획을 세우는 것도 좋지만, 팀원들이 실수에서 배울 공간도 열어줘봐요. 전략만큼 팀의 성장도 중요해요.",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "supporter",
    name: "서포터형",
    emoji: "🛡️",
    subtitle: "팀원이 빛날 수 있도록 뒤에서 밀어주는 타입",
    description: "앞에 나서기보다 팀원들이 잘 되도록 돕는 게 더 자연스러워요. 좋은 아이디어가 나오면 진심으로 힘을 실어주고, 팀원이 성장하는 걸 볼 때 가장 보람을 느껴요. 리더십이 드러나지 않아서 과소평가될 수 있지만, 이런 리더가 있는 팀은 팀원들의 만족도가 높아요.",
    traits: ["조용한 지지", "팀원 성장 중시", "뒤에서 힘 실어줌", "진심 응원"],
    tip: "팀원을 응원하는 것만큼 자신의 의견도 표현해봐요. 지지하는 것과 주도하는 것 둘 다 팀에 필요한 힘이에요.",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "autonomy",
    name: "자율형",
    emoji: "🕊️",
    subtitle: "믿고 맡기는 것이 최고의 리더십이라는 타입",
    description: "팀원들을 신뢰하고 맡기는 게 가장 좋은 방법이라고 생각해요. 세세하게 관리하기보다 방향만 잡아주고 각자의 방식을 존중해요. 자율성이 높은 팀에서 특히 잘 맞는 스타일이에요. 다만 팀원들이 명확한 가이드가 필요할 때는 좀 더 구체적으로 챙겨주면 더 좋아요.",
    traits: ["신뢰 기반", "자율 존중", "간섭 최소화", "방향만 제시"],
    tip: "자율성을 주는 것과 방치하는 것은 달라요. 팀원이 막혀 있을 때는 먼저 물어봐주는 것도 리더십이에요.",
    color: "#0891B2",
    gradient: "from-cyan-50 to-sky-50",
  },
];

export interface LeaderQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

export const LEADER_QUESTIONS: LeaderQuestion[] = [
  {
    id: 1,
    text: "팀 프로젝트에서 자연스럽게 맡게 되는 역할은?",
    emoji: "👥",
    options: [
      { text: "방향 잡기. \"우리 목표가 뭔지\" 먼저 이야기함", type: "vision" },
      { text: "역할 분배하고 일정 짜기", type: "executor" },
      { text: "팀원들 상태 체크하면서 분위기 챙기기", type: "caretaker" },
    ],
  },
  {
    id: 2,
    text: "팀 회의가 길어질 때 나는?",
    emoji: "🗣️",
    options: [
      { text: "핵심 정리해서 \"이렇게 하면 어떨까요?\" 제안함", type: "strategist" },
      { text: "좋은 아이디어 나오면 적극 지지하고 힘 실어줌", type: "supporter" },
      { text: "각자 알아서 하면 더 빠를 것 같다는 생각이 듦", type: "autonomy" },
    ],
  },
  {
    id: 3,
    text: "결과물이 기대 이하일 때 드는 생각은?",
    emoji: "😮‍💨",
    options: [
      { text: "처음부터 방향이 맞았는지 다시 돌아봄", type: "vision" },
      { text: "어느 단계에서 뭐가 잘못됐는지 분석함", type: "strategist" },
      { text: "다음엔 더 빡빡하게 관리해야겠다고 생각함", type: "executor" },
    ],
  },
  {
    id: 4,
    text: "팀원이 힘들다고 할 때 나는?",
    emoji: "💙",
    options: [
      { text: "업무 조정해줄 수 있는지 먼저 물어봄", type: "caretaker" },
      { text: "할 수 있다고 옆에서 진심으로 응원함", type: "supporter" },
      { text: "스스로 해결할 수 있게 믿고 기다림", type: "autonomy" },
    ],
  },
  {
    id: 5,
    text: "리더로서 가장 중요하다고 생각하는 것은?",
    emoji: "💡",
    options: [
      { text: "팀이 같은 방향을 보는 것", type: "vision" },
      { text: "각자의 방식을 존중하는 것", type: "autonomy" },
      { text: "팀원이 잘 될 수 있도록 뒤에서 밀어주는 것", type: "supporter" },
    ],
  },
  {
    id: 6,
    text: "프로젝트 시작할 때 제일 먼저 하는 것은?",
    emoji: "🚀",
    options: [
      { text: "마감, 역할, 일정부터 딱 정함", type: "executor" },
      { text: "리스크와 변수를 먼저 파악함", type: "strategist" },
      { text: "팀원들 각자 강점이 뭔지 파악함", type: "caretaker" },
    ],
  },
  {
    id: 7,
    text: "팀에서 갈등이 생겼을 때 나는?",
    emoji: "⚖️",
    options: [
      { text: "공동 목표를 다시 상기시키며 조율함", type: "vision" },
      { text: "양쪽 다 입장 들어보고 중간을 찾음", type: "caretaker" },
      { text: "서로 합의점을 각자 찾게 기다림", type: "autonomy" },
    ],
  },
  {
    id: 8,
    text: "팀 프로젝트가 잘 됐을 때 뿌듯한 이유는?",
    emoji: "🏆",
    options: [
      { text: "계획한 대로 잘 흘러갔을 때", type: "strategist" },
      { text: "기한 안에 퀄리티 있게 마무리됐을 때", type: "executor" },
      { text: "팀원들이 성장한 게 보일 때", type: "supporter" },
    ],
  },
  {
    id: 9,
    text: "팀원이 내 의견에 반대할 때?",
    emoji: "🤔",
    options: [
      { text: "근거가 있으면 조정함. 없으면 일단 해보자고 함", type: "executor" },
      { text: "그래, 네가 맡은 파트는 네 방식대로 해봐", type: "autonomy" },
      { text: "큰 방향만 맞으면 세부 방식은 상관없음", type: "vision" },
    ],
  },
  {
    id: 10,
    text: "팀 분위기가 안 좋을 때는?",
    emoji: "😶",
    options: [
      { text: "개인적으로 한 명씩 이야기해봄", type: "caretaker" },
      { text: "문제가 뭔지 구조적으로 파악해봄", type: "strategist" },
      { text: "작은 것부터 긍정적인 면 찾아서 에너지 올림", type: "supporter" },
    ],
  },
  {
    id: 11,
    text: "팀원을 믿는다는 게 어떤 의미야?",
    emoji: "🫶",
    options: [
      { text: "맡겼으면 간섭 안 하는 것", type: "autonomy" },
      { text: "같은 목표를 향해 달리고 있다고 믿는 것", type: "vision" },
      { text: "힘들면 말할 수 있다고 믿는 것", type: "caretaker" },
    ],
  },
  {
    id: 12,
    text: "프로젝트 끝나고 뒤풀이 자리에서 나는?",
    emoji: "🎊",
    options: [
      { text: "팀원 한 명 한 명한테 수고했다고 진심으로 말함", type: "supporter" },
      { text: "이번 프로젝트 잘 된 점, 아쉬운 점 회고함", type: "executor" },
      { text: "다음엔 이렇게 하면 더 잘 될 것 같다는 생각을 함", type: "strategist" },
    ],
  },
];
