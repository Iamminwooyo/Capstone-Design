const listData = [
  {
    id: 1,
    text: '회식 계획 세우기',
    startTime: '0900',
    endTime: '1100',
    type: '그룹',
    isCompleted: false,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/13', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 2,
    text: '프로젝트 회의 준비',
    startTime: '1200',
    endTime: '1330',
    type: '개인',
    isCompleted: false,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/14', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 3,
    text: '운동하기',
    startTime: '1800',
    endTime: '1900',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/14', // 괄호와 요일 제거
    completedDate: '2025/04/14', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 4,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 5,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 6,
    text: '친구와 영화 보기',
    startTime: '2000',
    endTime: '2200',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/16', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/16', // 삭제된 날짜
  },
  {
    id: 7,
    text: '친구와 영화 보기',
    startTime: '2000',
    endTime: '2200',
    type: '그룹',
    isCompleted: false,
    isDeleted: false, // 삭제됨
    date: '2025/04/13', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: null, // 삭제된 날짜
  },
  {
    id: 8,
    text: '아침 조깅',
    startTime: '0700',
    endTime: '0800',
    type: '개인',
    isCompleted: false,
    isDeleted: false,
    date: '2025/04/17',
    completedDate: null,
    deletedDate: null,
  },
  {
    id: 9,
    text: '업무 정리',
    startTime: '0900',
    endTime: '1000',
    type: '개인',
    isCompleted: false,
    isDeleted: false,
    date: '2025/04/17',
    completedDate: null,
    deletedDate: null,
  },
  {
    id: 10,
    text: '미팅 참석',
    startTime: '1030',
    endTime: '1130',
    type: '그룹',
    isCompleted: false,
    isDeleted: false,
    date: '2025/04/17',
    completedDate: null,
    deletedDate: null,
  },
  {
    id: 11,
    text: '점심 식사',
    startTime: '1200',
    endTime: '1300',
    type: '개인',
    isCompleted: false,
    isDeleted: false,
    date: '2025/04/17',
    completedDate: null,
    deletedDate: null,
  },
  {
    id: 12,
    text: '보고서 작성',
    startTime: '1400',
    endTime: '1600',
    type: '개인',
    isCompleted: false,
    isDeleted: false,
    date: '2025/04/17',
    completedDate: null,
    deletedDate: null,
  },
  {
    id: 13,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 14,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 15,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 16,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 17,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 18,
    text: '팀 빌딩 활동',
    startTime: '1400',
    endTime: '1600',
    type: '그룹',
    isCompleted: false,
    isDeleted: true, // 삭제됨
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: null, // 완료된 날짜 없음
    deletedDate: '2025/04/15', // 삭제된 날짜
  },
  {
    id: 19,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 20,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 21,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 22,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 23,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
  {
    id: 24,
    text: '코딩 학습',
    startTime: '1000',
    endTime: '1200',
    type: '개인',
    isCompleted: true,
    isDeleted: false, // 삭제되지 않음
    date: '2025/04/15', // 괄호와 요일 제거
    completedDate: '2025/04/15', // 완료된 날짜
    deletedDate: null, // 삭제된 날짜 없음
  },
];

export default listData;
