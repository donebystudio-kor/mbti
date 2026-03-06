export interface StressType {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  traits: string[];
  reboot: string;
  color: string;
  gradient: string;
}

export const STRESS_TYPES: StressType[] = [
  {
    id: "force-quit",
    name: "강제종료형",
    emoji: "💥",
    subtitle: "한 번에 터뜨리고 끝내는 타입",
    description:
      "스트레스가 쌓이면 어느 순간 한꺼번에 터집니다. 억누르고 억누르다 폭발하거나, 아니면 스트레스 원인을 통째로 끊어버리는 스타일이에요. 시원하게 해결하고 나면 언제 그랬냐는 듯 깔끔하게 털어버리는 게 장점이지만, 가끔 주변 사람들이 예측하기 어려울 수도 있어요.",
    traits: ["즉각적", "시원시원함", "결단력", "감정 저장 안 함"],
    reboot: "운동, 격렬한 활동, 솔직한 대화로 한 번에 털어내기",
    color: "#EF4444",
    gradient: "from-red-50 to-orange-50",
  },
  {
    id: "temp-save",
    name: "임시저장형",
    emoji: "💾",
    subtitle: "일단 눌러두고 나중에 처리하는 타입",
    description:
      "지금 당장 처리하기 어려운 스트레스는 일단 마음 한켠에 저장해둡니다. 겉으론 멀쩡해 보이지만 속에서는 파일이 계속 쌓여가고 있어요. 나중에 시간이 생기면 혼자 조용히 꺼내서 처리하는 편이라 주변에서는 강한 사람처럼 보이기도 합니다.",
    traits: ["참을성", "신중함", "자기 페이스", "감정 처리 시간 필요"],
    reboot: "혼자만의 시간, 일기 쓰기, 정리할 공간 확보하기",
    color: "#3B82F6",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "debug",
    name: "디버깅형",
    emoji: "🔍",
    subtitle: "원인부터 분석하고 해결하는 타입",
    description:
      "왜 스트레스인지부터 파악해야 직성이 풀립니다. 원인을 찾고, 해결책을 분석하고, 실행까지 논리적으로 처리하는 스타일이에요. 문제가 해결되면 스트레스도 자연스럽게 사라지지만, 원인을 못 찾으면 오히려 더 힘들어지는 게 함정입니다.",
    traits: ["분석적", "논리적", "해결 지향", "꼼꼼함"],
    reboot: "원인 파악, 할 일 목록 작성, 단계별로 해결해나가기",
    color: "#8B5CF6",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    id: "restart",
    name: "재시작형",
    emoji: "🔄",
    subtitle: "환경을 바꿔서 리셋하는 타입",
    description:
      "스트레스 받으면 장소를 바꾸거나, 새로운 걸 시작하거나, 일상을 전환해서 리셋합니다. 여행을 떠나거나, 새 취미를 시작하거나, 카페를 바꿔가며 작업하는 식이에요. 전환하는 순간 에너지가 회복되지만, 근본적인 문제는 남아있을 수 있어요.",
    traits: ["전환력", "유연함", "기분 전환 능숙", "새로운 것 추구"],
    reboot: "여행, 새로운 카페, 산책, 환경 변화로 기분 전환",
    color: "#10B981",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "background",
    name: "백그라운드실행형",
    emoji: "⚙️",
    subtitle: "겉으론 멀쩡, 속에서 조용히 처리 중",
    description:
      "스트레스를 받고 있어도 겉으로 잘 티가 나지 않아요. 다른 일을 하는 척하면서 백그라운드에서 천천히 감정을 처리합니다. 주변 사람들이 '너 항상 괜찮아 보여'라고 말하는 타입. 혼자 다 처리하다 보니 가끔 번아웃이 오기도 해요.",
    traits: ["자기조절", "독립적", "감정 내면화", "겉으로 안 드러냄"],
    reboot: "혼자만의 루틴, 조용한 회복, 가끔은 털어놓기",
    color: "#F59E0B",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: "update",
    name: "업데이트형",
    emoji: "✨",
    subtitle: "스트레스를 성장의 연료로 쓰는 타입",
    description:
      "힘든 상황을 '이것도 경험이지'로 전환하는 능력이 있어요. 스트레스를 받으면 오히려 더 열심히 하거나, 배움의 기회로 삼으려 합니다. 긍정적인 것 같지만 자기 감정을 억압하거나 지나치게 의미를 부여하다가 지칠 수 있어요.",
    traits: ["성장 지향", "긍정적 전환", "회복 탄력성", "의미 부여"],
    reboot: "배움으로 전환, 일기로 의미 찾기, 자신을 다독이기",
    color: "#FF6B9D",
    gradient: "from-pink-50 to-rose-50",
  },
];

export interface StressQuestion {
  id: number;
  text: string;
  emoji: string;
  options: { text: string; type: string }[];
}

// 설계 원칙: 12문항 × 3지선다, 6개 유형이 각각 정확히 6번 등장
// Q1: force-quit, temp-save, debug
// Q2: restart, background, update
// Q3: force-quit, restart, background
// Q4: temp-save, debug, update
// Q5: force-quit, update, restart
// Q6: temp-save, background, debug
// Q7: force-quit, debug, update
// Q8: temp-save, restart, background
// Q9: force-quit, background, temp-save
// Q10: restart, debug, update
// Q11: force-quit, background, update
// Q12: temp-save, debug, restart
export const STRESS_QUESTIONS: StressQuestion[] = [
  {
    id: 1,
    text: "할 일 목록이 너무 많아서 압도당할 것 같을 때",
    emoji: "📋",
    options: [
      { text: "오늘 할 거 다 포기하고 그냥 쉬기로 결정", type: "force-quit" },
      { text: "지금 할 수 있는 것만 하고, 나머지는 내일로", type: "temp-save" },
      { text: "급한 것부터 분류해서 우선순위를 정함", type: "debug" },
    ],
  },
  {
    id: 2,
    text: "오래된 친구와 사이가 점점 어색해졌을 때",
    emoji: "👥",
    options: [
      { text: "새로운 약속을 잡아서 분위기를 바꿔봄", type: "restart" },
      { text: "내색 안 하고 그냥 원래대로 지냄", type: "background" },
      { text: "변화한 관계를 인정하고 더 성숙한 방식으로 대하기", type: "update" },
    ],
  },
  {
    id: 3,
    text: "직장이나 학교에서 억울한 일이 생겼을 때",
    emoji: "😤",
    options: [
      { text: "바로 해당 사람이나 상황에 맞섬", type: "force-quit" },
      { text: "그 자리를 피해 환경 자체를 바꿔버림", type: "restart" },
      { text: "겉으론 아무렇지 않은 척하면서 속으로 삭힘", type: "background" },
    ],
  },
  {
    id: 4,
    text: "실수를 해서 민망한 상황이 생겼을 때",
    emoji: "😬",
    options: [
      { text: "일단 그 상황을 넘기고, 나중에 혼자 복기함", type: "temp-save" },
      { text: "왜 그 실수가 생겼는지 바로 원인을 파악", type: "debug" },
      { text: "'다음엔 더 잘하면 되지' 하고 바로 넘김", type: "update" },
    ],
  },
  {
    id: 5,
    text: "꾸준히 해오던 것이 갑자기 하기 싫어졌을 때",
    emoji: "😮‍💨",
    options: [
      { text: "당분간 완전히 그만두기로 함", type: "force-quit" },
      { text: "방식이나 장소를 바꿔서 새로운 느낌으로 시작", type: "restart" },
      { text: "왜 싫어졌는지 돌아보고 의미를 다시 정립", type: "update" },
    ],
  },
  {
    id: 6,
    text: "가족과 불편한 대화가 오고 갔을 때",
    emoji: "🏠",
    options: [
      { text: "말은 못 하고 속으로만 쌓아둠", type: "temp-save" },
      { text: "대화 후에도 별말 없이 그냥 일상을 유지", type: "background" },
      { text: "왜 그 말이 불편했는지 혼자 곱씹으며 파악", type: "debug" },
    ],
  },
  {
    id: 7,
    text: "열심히 준비한 게 기대 이하의 결과로 끝났을 때",
    emoji: "📉",
    options: [
      { text: "당분간 그 분야에서 완전히 손을 뗌", type: "force-quit" },
      { text: "어떤 부분이 부족했는지 냉정하게 분석", type: "debug" },
      { text: "이 과정에서 배운 게 뭔지 정리하며 앞을 봄", type: "update" },
    ],
  },
  {
    id: 8,
    text: "번아웃이 올 것 같아서 에너지가 바닥났을 때",
    emoji: "🪫",
    options: [
      { text: "억지로라도 버티며 자연히 회복되길 기다림", type: "temp-save" },
      { text: "지금 하던 걸 멈추고 완전히 다른 활동으로 전환", type: "restart" },
      { text: "아무것도 안 하는 것처럼 보여도 속으로 조용히 처리 중", type: "background" },
    ],
  },
  {
    id: 9,
    text: "싫은 사람을 계속 만나야 하는 상황이 됐을 때",
    emoji: "😶",
    options: [
      { text: "그 자리나 관계에서 바로 발을 뺌", type: "force-quit" },
      { text: "어쩔 수 없으니 최대한 티 안 내고 견딤", type: "background" },
      { text: "지금은 참되, 나중에 해결할 방법을 생각해둠", type: "temp-save" },
    ],
  },
  {
    id: 10,
    text: "한동안 의욕이 없고 무기력한 시간이 이어질 때",
    emoji: "🌫️",
    options: [
      { text: "여행이나 새로운 경험으로 분위기를 전환", type: "restart" },
      { text: "무기력의 원인이 뭔지 파악하려고 시도", type: "debug" },
      { text: "쉬는 것도 성장의 일부라 생각하며 자신에게 여유를 줌", type: "update" },
    ],
  },
  {
    id: 11,
    text: "노력했는데 아무도 알아주지 않는 것 같을 때",
    emoji: "🫥",
    options: [
      { text: "더 이상 그 사람이나 환경을 위해 쏟지 않기로 결정", type: "force-quit" },
      { text: "인정받고 싶지만 괜찮은 척하며 계속 함", type: "background" },
      { text: "외부 인정보다 나 자신의 만족을 기준으로 삼음", type: "update" },
    ],
  },
  {
    id: 12,
    text: "잠이 안 올 만큼 걱정되는 일이 생겼을 때",
    emoji: "😰",
    options: [
      { text: "지금 당장 해결 못 하니까 내일로 미루고 자려 함", type: "temp-save" },
      { text: "걱정의 실체가 뭔지 쪼개서 생각해봄", type: "debug" },
      { text: "핸드폰 끄고 드라마나 음악으로 강제 기분 전환", type: "restart" },
    ],
  },
];
