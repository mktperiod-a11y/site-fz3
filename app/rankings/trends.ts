import type { RankingPage } from './data';
import artwork from '../../data/rankings/trend-assets.json';

const CHECKED = '2026.11.26';
const AI_SOURCE = 'https://nwww.newsis.com/view/NISX20261110_0003861516';
const TGA_SOURCE = 'https://thegameawards.com/categories';
const XBOX = 'https://news.xbox.com/en-us/2026/11/17/the-game-awards-2026-nominees-on-xbox/';
const NINTENDO = 'https://www.nintendo.com/us/whatsnew/congrats-to-the-game-awards-2026-nominees/';
const BOOK_SOURCE = 'https://www.gangneungnews.kr/news/articleView.html?idxno=70408';
const TRAVEL_SOURCE = 'https://digitalchosun.dizzo.com/site/data/html_dir/2026/11/25/2026112580066.html';

export const aiAppUsers = [
  { name: '챗GPT', users: 2551 }, { name: '제미나이', users: 914 }, { name: '클로드', users: 500 },
  { name: '코파일럿', users: 195 }, { name: '퍼플렉시티', users: 134 }, { name: '그록', users: 129 },
  { name: '에이닷', users: 89 }, { name: '제미나이 노트북', users: 73 }, { name: '뤼튼', users: 37 }, { name: '마누스 AI', users: 30 },
];

export const tgaNominations = [
  { name: 'Grand Theft Auto VI', count: 8, note: 'GTA VI · 올해의 게임·게임 디렉션 등', source: XBOX },
  { name: 'CONTROL Resonant', count: 6, note: '컨트롤 레조넌트 · 올해의 게임·아트·오디오 등', source: XBOX },
  { name: 'Resident Evil Requiem', count: 6, note: '바이오하자드 레퀴엠 · 올해의 게임·연기 등', source: XBOX },
  { name: 'Phantom Blade Zero', count: 5, note: '팬텀 블레이드 제로 · 올해의 게임·액션 등', source: 'https://www.gematsu.com/2026/11/the-game-awards-2026-nominees-announced' },
  { name: 'Big Walk', count: 4, note: '인디·패밀리·멀티플레이·게임즈 포 임팩트', source: NINTENDO },
  { name: '007 First Light', count: 4, note: '올해의 게임·내러티브·액션 어드벤처·연기', source: NINTENDO },
  { name: 'The Legend of Zelda: Ocarina of Time', count: 4, note: '젤다의 전설 시간의 오카리나 · 올해의 게임·음악 등', source: NINTENDO },
  { name: 'Ace Combat 8: Wings of Theve', count: 3, note: '에이스 컴뱃 8 · 액션·오디오·음악', source: XBOX },
  { name: 'Gears of War: E-Day', count: 3, note: '기어스 오브 워 E-Day · 액션·멀티플레이·접근성', source: XBOX },
];

export const bookCharts = [
  { name: '교보문고', period: '2026.11.14~11.20', type: '종합 주간 베스트', titles: ['가호', '트렌드 코리아 2027', '흔한남매 22', '싯다르타', '한국사 이상현상 연구원'] },
  { name: '예스24', period: '2026.11.17~11.23', type: '국내도서 주간 베스트', titles: ['가호', '100일의 거짓말 대본집 세트', '서늘한 대화', '싯다르타', '공부의 종말'] },
  { name: '알라딘', period: '2026.11.16~11.22', type: '국내도서 종합 주간 베스트', titles: ['공부의 종말', '흔한남매 22', '싯다르타', '가호', '서늘한 대화'] },
];

const bookTitles = [...new Set(bookCharts.flatMap(chart => chart.titles))].sort((a, b) => a.localeCompare(b, 'ko'));
const images = artwork as Record<string, { file: string; source: string }>;

export const trendPages: RankingPage[] = [
  {
    slug: 'korea-ai-app-users', title: '한국인이 많이 쓰는 AI 앱 TOP 10', category: 'IT·게임',
    date: '2026년 10월 · 11월 26일 확인', auditDate: CHECKED,
    basis: '와이즈앱·리테일 · 한국 안드로이드·iOS 표본 추정 · 범용 대화형 AI 전용 앱 MAU',
    dataLabel: '2026년 10월 모바일 앱 월간 활성 사용자',
    description: '같은 조사에서 공개한 2026년 10월 범용 대화형 AI 앱의 한국 월간 활성 사용자 상위 10개입니다. 챗GPT가 약 2,551만명으로 1위입니다. 웹 방문자·유료 가입자·전 세계 사용자를 합친 수치가 아니며, 모바일 표본조사로 추정한 값입니다.',
    source: '와이즈앱·리테일 조사 · 2026.11.10 뉴시스 보도', sourceUrl: AI_SOURCE,
    rows: aiAppUsers.map((r, i) => ({ name: r.name, value: `약 ${r.users.toLocaleString('en-US')}만명`, note: '국내 모바일 앱 MAU · 표본 추정', rank: i + 1, sourceUrl: AI_SOURCE })),
    faq: [
      ['한국에서 가장 많이 쓰는 AI 앱은?', '이 조사에서 2026년 10월 챗GPT의 국내 모바일 앱 월간 활성 사용자는 약 2,551만명으로 가장 많았습니다.'],
      ['제미나이와 클로드는 몇 명인가요?', '같은 조사에서 제미나이 약 914만명, 클로드 약 500만명입니다.'],
      ['AI 성능 순위인가요?', '아닙니다. 사용 규모를 비교한 순위로 답변 품질·정확도·유료 이용자 수를 뜻하지 않습니다.'],
      ['다른 조사와 숫자가 다른 이유는?', '표본, 추정 방식, 앱 분류가 다르기 때문입니다. 이 표는 와이즈앱·리테일의 같은 기준월 조사만 사용하며 다른 기관 자료를 섞지 않습니다.'],
      ['제미나이 노트북은 어떤 표기인가요?', '선택한 조사 보도에 사용된 앱 이름을 그대로 표시했습니다. 다른 앱과 임의로 합산하지 않습니다.'],
    ],
  },
  {
    slug: 'the-game-awards-nominations-2026', title: '2026 게임어워드 최다 후보 지명 게임 TOP 9', category: 'IT·게임',
    date: '2026.11.17 후보 발표 · 11월 26일 확인', auditDate: CHECKED,
    basis: 'The Game Awards 2026 · 3회 이상 후보 지명 게임 9개 · 연기 부문 포함 · 공동 순위',
    dataLabel: '2026 TGA 후보 지명 횟수',
    description: '2026 게임어워드에서 3회 이상 후보로 지명된 게임 9개를 비교합니다. GTA VI가 8회로 가장 많고 CONTROL Resonant와 Resident Evil Requiem이 6회로 뒤를 잇습니다. 연기 부문은 해당 게임에 포함하며 수상 횟수·판매량·이용자 투표수 순위가 아닙니다.',
    source: 'TGA 공식 후보 · Xbox Wire·Nintendo 후보 안내 교차 확인', sourceUrl: TGA_SOURCE,
    sources: [{ name: 'Xbox 공식 후보 안내', url: XBOX }, { name: 'Nintendo 공식 후보 안내', url: NINTENDO }, { name: 'Gematsu 후보 목록', url: 'https://www.gematsu.com/2026/11/the-game-awards-2026-nominees-announced' }],
    rows: tgaNominations.map(r => ({ name: r.name, value: `${r.count}회`, note: r.note, rank: tgaNominations.findIndex(other => other.count === r.count) + 1, sourceUrl: r.source,
      ...(images[r.name] ? { image: `/ranking-images/trends/${images[r.name].file}`, imageSource: images[r.name].source } : {}),
    })),
    faq: [
      ['가장 많이 후보에 오른 게임은?', '2026년 11월 17일 발표 목록에서 Grand Theft Auto VI가 8회로 가장 많습니다.'],
      ['수상 결과가 반영된 순위인가요?', '아닙니다. 2026년 12월 10일 현지 시상식 전에 공개된 후보 지명 횟수입니다. 후보 지명과 수상은 구분합니다.'],
      ['연기상 후보도 포함하나요?', '포함합니다. 특정 게임의 연기자가 후보에 오르면 그 게임의 지명 횟수에 더합니다. 영상화 작품·e스포츠 선수·팀·크리에이터는 게임별 순위에서 제외합니다.'],
      ['왜 10개가 아닌 9개인가요?', '선택한 발표 자료에서 3회 이상 지명된 게임이 9개입니다. 같은 횟수는 공동 순위로 표시합니다.'],
    ],
  },
  {
    slug: 'year-end-travel-city-searches-2026', title: '연말 해외여행 인기 도시 TOP 3', category: '라이프',
    date: '2026.11.16~12.20 여행 일정 · 11월 26일 확인', auditDate: CHECKED,
    basis: '호텔스컴바인·카약 · 한국인 항공권 검색 · 공개된 도시 상위 3곳',
    dataLabel: '2026.11.25 발표 · 11.16~12.20 출발·여행 일정 검색',
    description: '호텔스컴바인·카약이 2026년 11월 16일~12월 20일 여행 일정을 대상으로 분석한 한국인 항공권 검색 자료입니다. 공개된 도시 순위는 오사카·후쿠오카·도쿄 순입니다. 이 기간의 여행에 대한 사전 검색이며, 실제 출국자나 예약 확정 건수 순위가 아닙니다.',
    source: '호텔스컴바인·카약 분석 · 2026.11.25 보도', sourceUrl: TRAVEL_SOURCE, hideBars: true,
    sources: [{ name: '동일 발표 교차 확인 · 호텔앤레스토랑', url: 'https://www.hotelrestaurant.co.kr/news/articleView.html?idxno=22589' }],
    rows: ['오사카', '후쿠오카', '도쿄'].map((name, i) => ({ name, value: `검색 ${i + 1}위`, note: '일본 · 한국인 항공권 검색량 순위', rank: i + 1, sourceUrl: TRAVEL_SOURCE })),
    faq: [
      ['연말 해외여행 검색 1위 도시는?', '선택한 호텔스컴바인·카약 자료에서 오사카가 1위이며, 후쿠오카와 도쿄가 뒤를 이었습니다.'],
      ['집계 기간이 아직 끝나지 않았는데 어떻게 순위가 있나요?', '11월 16일~12월 20일은 검색한 여행의 일정 범위입니다. 여행 종료 뒤의 실적이 아니라 11월 25일 발표된 사전 검색 분석입니다. 검색 관측 기간 자체는 인용 자료에 별도로 공개되지 않았습니다.'],
      ['검색량이나 가격도 알 수 있나요?', '인용 자료에 도시별 검색 건수와 가격은 공개되지 않아 숫자를 추정하지 않습니다.'],
      ['왜 TOP 3만 보여주나요?', '보도에서 도시별 순서를 확인할 수 있는 범위가 상위 3곳이기 때문입니다. 국가 검색 비중을 도시 순위에 섞지 않습니다.'],
    ],
  },
  {
    slug: 'weekly-bookstore-bestsellers', title: '이번 주 서점별 베스트셀러 비교', category: '미디어',
    date: '2026년 11월 서점별 주간 · 11월 26일 확인', auditDate: CHECKED, unranked: true, hideBars: true,
    basis: '교보문고·예스24·알라딘 각 TOP 5 · 집계 기간·집계 방식 상이 · 통합 순위 없음',
    dataLabel: '2026.11.26 보도에 수록된 서점별 주간 차트',
    description: '세 서점의 공개 주간 TOP 5를 나란히 비교합니다. 교보문고는 11월 14~20일, 예스24는 11월 17~23일, 알라딘은 11월 16~22일 자료입니다. 가호는 교보문고·예스24에서 1위, 공부의 종말은 알라딘에서 1위입니다. 집계 기간과 방식이 달라 순위나 점수를 합산하지 않습니다.',
    source: '강릉뉴스 · 2026.11.26 서점별 주간 차트 표', sourceUrl: BOOK_SOURCE,
    comparison: {
      caption: '서점별 주간 TOP 5 · 각 열은 해당 서점 안에서의 순위입니다.',
      columns: bookCharts.map(c => ({ name: c.name, period: c.period, description: c.type })),
      rows: [0, 1, 2, 3, 4].map(i => ({ rank: i + 1, values: bookCharts.map(c => c.titles[i]) })),
    },
    rows: bookTitles.map(name => ({ name, value: bookCharts.map(c => { const rank = c.titles.indexOf(name); return `${c.name} ${rank < 0 ? 'TOP 5 밖' : `${rank + 1}위`}`; }).join(' · '), note: '서점별 공개 TOP 5 비교 · 가나다순 목록', sourceUrl: BOOK_SOURCE })),
    faq: [
      ['이번 주 세 서점에서 모두 1위인 책이 있나요?', '이 자료에서는 없습니다. 가호가 교보문고·예스24에서 1위이고 공부의 종말이 알라딘에서 1위입니다.'],
      ['서점마다 순위가 다른 이유는?', '집계 기간, 판매 채널, 주문·판매 반영 방식, 구매층이 다릅니다. 같은 기간의 전체 시장 판매량으로 해석할 수 없습니다.'],
      ['종합 1위나 평균 순위를 만들지 않나요?', '만들지 않습니다. 서점별 기준이 다른 상태에서 순위를 더하거나 평균 내면 실제 판매량 순위처럼 오해할 수 있습니다.'],
      ['TOP 5 밖이면 판매되지 않는 책인가요?', '아닙니다. 이 비교표의 공개 상위 5개에 포함되지 않았다는 뜻이며 전체 순위·판매량이 0이라는 뜻이 아닙니다.'],
      ['표는 어느 시점의 자료인가요?', '2026년 11월 26일 보도에 수록된 주간 차트를 보관한 자료입니다. 각 서점의 현재 화면은 이후 갱신될 수 있습니다.'],
    ],
  },
];
