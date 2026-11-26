import type { RankingPage, RankingRow } from './data';

type Contract = {
  player: string; team: string; season: number; term: string; total: number;
  guaranteed?: number; conditional?: number; detail?: string; source: string;
};

const CHECKED = '2026.11.26';
const KBO = 'https://www.koreabaseball.com/MediaNews/Notice/View.aspx?bdSe=12243';
const TABLE = 'https://www.yna.co.kr/view/AKR20211223065200007';
const YANG = 'https://www.yna.co.kr/view/AKR20221121123551007';
const LOGOS: Record<string, string> = { 두산: 'Doosan', 롯데: 'Lotte', KIA: 'KIA', NC: 'NC', LG: 'LG', SSG: 'SSG', SK: 'SSG', 한화: 'Hanwha' };

export const currentFaContracts: Contract[] = [
  { player: '최지훈', team: 'SSG', season: 2027, term: '4년', total: 67, guaranteed: 58, conditional: 9, source: 'https://www.shinsegaegroupnewsroom.com/ssg-landers-sign-free-agent-contract-with-choi-ji-hoon/' },
  { player: '양의지', team: '두산', season: 2027, term: '2년', total: 55, guaranteed: 50, conditional: 5, source: 'https://www.yna.co.kr/view/AKR20261117055200007' },
  { player: '문승원', team: 'SSG', season: 2027, term: '2+1년', total: 15, guaranteed: 12.5, conditional: 2.5, detail: '연장 조건을 포함한 발표 총액', source: 'https://www.shinsegaegroupnewsroom.com/ssg-landers-re-sign-pitcher-moon-seung-won/' },
  { player: '오태곤', team: 'SSG', season: 2027, term: '3년', total: 11, guaranteed: 9.4, conditional: 1.6, source: 'https://www.shinsegaegroupnewsroom.com/ssg-landers-sign-free-agent-contract-with-oh-tae-gon/' },
];

export const historicalFaContracts: Contract[] = [
  { player: '양의지', team: '두산', season: 2023, term: '4+2년', total: 152, guaranteed: 110, conditional: 42, detail: '계약 당시 최대액 · 2026년 말 연장 옵션 미행사', source: YANG },
  { player: '이대호', team: '롯데', season: 2017, term: '4년', total: 150, source: TABLE },
  { player: '나성범', team: 'KIA', season: 2022, term: '6년', total: 150, source: TABLE },
  { player: '박민우', team: 'NC', season: 2023, term: '5+3년', total: 140, guaranteed: 80, conditional: 60, detail: '기본 5년 옵션 10억 + 연장 3년 최대 50억', source: 'https://www.yna.co.kr/view/AKR20221123125651007' },
  { player: '양의지', team: 'NC', season: 2019, term: '4년', total: 125, source: TABLE },
  { player: '오지환', team: 'LG', season: 2024, term: '6년', total: 124, guaranteed: 100, conditional: 24, detail: '비FA 사전 합의 후 FA 계약으로 전환', source: 'https://www.news1.kr/sports/baseball/5268435' },
  { player: '김현수', team: 'LG', season: 2018, term: '4년', total: 115, source: TABLE },
  { player: '김재환', team: '두산', season: 2022, term: '4년', total: 115, source: TABLE },
  { player: '김현수', team: 'LG', season: 2022, term: '4+2년', total: 115, detail: '계약 당시 발표 최대액', source: TABLE },
  { player: '최정', team: 'SSG', season: 2025, term: '4년', total: 110, guaranteed: 110, conditional: 0, source: 'https://www.yna.co.kr/view/AKR20241106135100007' },
  { player: '최정', team: 'SK', season: 2019, term: '6년', total: 106, source: TABLE },
  { player: '양현종', team: 'KIA', season: 2022, term: '4년', total: 103, guaranteed: 55, conditional: 48, source: 'https://www.yna.co.kr/amp/view/AKR20211224103300007' },
  { player: '최형우', team: 'KIA', season: 2017, term: '4년', total: 100, source: TABLE },
  { player: '박건우', team: 'NC', season: 2022, term: '6년', total: 100, source: TABLE },
  { player: '강백호', team: '한화', season: 2026, term: '4년', total: 100, guaranteed: 80, conditional: 20, source: 'https://www.news1.kr/sports/baseball/5982993' },
  { player: '손아섭', team: '롯데', season: 2018, term: '4년', total: 98, source: TABLE },
  { player: '박석민', team: 'NC', season: 2016, term: '4년', total: 96, source: TABLE },
  { player: '차우찬', team: 'LG', season: 2017, term: '4년', total: 95, source: TABLE },
  { player: '윤석민', team: 'KIA', season: 2015, term: '4년', total: 90, guaranteed: 90, conditional: 0, source: 'https://www.yna.co.kr/amp/view/AKR20150306019651007' },
  { player: '채은성', team: '한화', season: 2023, term: '6년', total: 90, guaranteed: 80, conditional: 10, source: 'https://www.yna.co.kr/view/AKR20221122052800007' },
];

const rowsOf = (contracts: Contract[], historical = false): RankingRow[] => {
  const sorted = [...contracts].sort((a, b) => b.total - a.total);
  return sorted.map(c => ({
    name: historical ? `${c.player} · ${c.season} FA` : c.player,
    value: `최대 ${c.total}억원`,
    rank: sorted.findIndex(other => other.total === c.total) + 1,
    note: [c.team === 'SK' ? 'SK(현 SSG)' : c.team, c.term,
      c.guaranteed === undefined ? '보장·옵션 세부 구분 미확인' : `보장 ${c.guaranteed}억 · 조건부 ${c.conditional}억`,
      c.detail].filter(Boolean).join(' · '),
    image: `/ranking-images/expansion/kbo_${LOGOS[c.team]}.webp`,
    imageSource: 'https://www.koreabaseball.com/Kbo/League/TeamInfo.aspx',
    sourceUrl: c.source,
  }));
};

export const faPages: RankingPage[] = [
  {
    slug: 'kbo-fa-contracts-2027', title: '2027 시즌 KBO FA 계약금액 순위', category: '스포츠',
    date: `${CHECKED} 확인`, auditDate: CHECKED, basis: '2027 FA 시장 · 발표된 계약 4건 · 옵션 포함 최대 총액',
    description: '2026년 11월 17일 교섭을 시작한 2027 시즌 FA 시장에서 확인된 계약 4건입니다. 최지훈의 4년 최대 67억원이 가장 큽니다. 보장액은 발표된 계약금과 연봉의 합계이며, 옵션·연장 조건은 별도로 표시합니다. 미계약 선수와 협상 보도는 순위에 넣지 않습니다.',
    source: 'KBO FA 승인 명단 · 구단 발표 및 발표 인용 보도', sourceUrl: KBO,
    dataLabel: `${CHECKED} 확인 · 2027 FA 계약 발표`, rows: rowsOf(currentFaContracts),
    faq: [
      ['2027 시즌 FA 계약금액 1위는?', '2026년 11월 26일 확인한 계약 4건 중 최지훈의 SSG 4년 최대 67억원입니다. 보장 58억원과 옵션 9억원으로 구성됩니다.'],
      ['지금은 2026년인데 왜 2027 FA인가요?', 'KBO가 2027년 FA 승인 선수로 공시한 시장입니다. 2026시즌 종료 후 협상해 다음 시즌부터 적용되는 계약을 비교합니다.'],
      ['계약 총액을 모두 받는다는 뜻인가요?', '아닙니다. 최대 총액에는 성적 옵션과 계약 연장 조건이 포함될 수 있습니다. 문승원의 2+1년처럼 기간 조건도 함께 확인해야 합니다.'],
      ['구자욱과 원태인은 왜 없나요?', '이 자료의 확인 시점에 계약 확정 발표를 확보하지 못한 선수는 제외했습니다. 계약 예상 금액은 사용하지 않습니다.'],
      ['언제 갱신하나요?', '새 계약 발표를 확인한 뒤 반영하며, 페이지의 확인일까지 검증된 계약을 보여 줍니다.'],
    ],
  },
  {
    slug: 'kbo-fa-contracts-all-time', title: 'KBO 역대 FA 최고액 계약 TOP 20', category: '스포츠',
    date: `${CHECKED} 확인`, auditDate: CHECKED, basis: '국내 단일 FA 계약 20건 · 계약 당시 발표 최대 총액 · 동률 공동 순위',
    description: '계약 한 건의 발표 최대 총액으로 비교한 역대 FA 상위 20건입니다. 1위는 양의지의 2023 시즌 두산 계약으로, 4+2년 최대 152억원입니다. 같은 선수의 다른 FA 계약은 각각 집계하고 비FA 다년계약은 제외합니다. 이후 옵션을 행사하지 않았더라도 당시 발표액으로 비교하므로 실제 수령액과 다릅니다.',
    source: '계약 규모 집계 보도 · 구단 계약 발표 인용 보도', sourceUrl: TABLE,
    dataLabel: `${CHECKED} 확인 · FA 계약 당시 발표액`, rows: rowsOf(historicalFaContracts, true),
    faq: [
      ['역대 FA 단일 계약 최고액은?', '양의지의 2023 시즌 두산 계약으로, 4+2년 최대 152억원입니다. 최초 4년 110억원과 뒤 2년 최대 42억원의 선수 옵션으로 발표됐습니다.'],
      ['양의지가 152억원을 모두 받았나요?', '이 표는 실제 수령액 순위가 아닙니다. 양의지는 2026시즌 종료 후 뒤 2년 옵션을 행사하지 않고 새 FA 계약을 체결했습니다. 당시 발표된 최대 152억원을 비교 기준으로 유지합니다.'],
      ['양의지와 김현수가 두 번 나오는 이유는?', '선수별 누적 수입이 아니라 계약별 순위이기 때문입니다. 이름 옆 연도는 계약이 적용되는 FA 시즌입니다.'],
      ['노시환·류현진·김광현의 큰 계약은 왜 없나요?', '비FA 신분으로 체결한 다년계약은 제외합니다. 오지환의 124억원 계약은 사전 합의 뒤 FA 계약으로 전환됐기 때문에 포함합니다.'],
      ['보장액 미확인은 무슨 뜻인가요?', '총액과 기간은 확인했지만 이 자료에서 보장액·옵션의 세부 구분을 확인하지 못한 계약입니다. 미확인을 옵션 0원으로 계산하지 않습니다.'],
      ['같은 금액은 어떻게 정렬하나요?', '같은 최대 총액이면 공동 순위입니다. 다음 순위는 앞선 계약 건수만큼 건너뛰며, 계약 기간이나 연평균액으로 동률을 나누지 않습니다.'],
    ],
  },
];
