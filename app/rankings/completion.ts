import type { RankingPage } from './data';
import updates from '../../data/rankings/completion.json';
import assets from '../../public/ranking-images/complete/sources.json';
import { LIVE_SLUGS } from './live';

export const MAX_RANKING_ITEMS = 10;
export const MIN_RANKING_ITEMS = 5;
export const rankingItemLimit = (slug: string) => slug === 'kbo-fa-contracts-all-time' ? 20 : MAX_RANKING_ITEMS;

export const rankingCountExceptions: Record<string, string> = {
  'kbo-fa-contracts-2027': '확인일에 계약 발표를 확인한 4건만 집계했습니다. 미계약 선수는 제외합니다.',
  'asian-games-baseball-champions': '정식 종목 채택 이후 메달을 딴 나라는 3곳뿐입니다.',
  'ufc-rankings-by-division': '이 페이지의 비교 대상은 남성부 8개 체급입니다.',
  'korea-ott-users': '동일 기준월의 공개 조사에 포함된 OTT 앱을 비교합니다.',
};

export function applyCompletion(pages: RankingPage[]): RankingPage[] {
  const patches = updates as unknown as Record<string, Partial<RankingPage>>;
  const pictures = assets as Record<string, { image: string; source: string }>;
  return pages.map(original => {
    const p = { ...original, ...patches[original.slug] };
    p.rows = p.rows.slice(0, rankingItemLimit(p.slug)).map(r => pictures[r.name]
      ? { ...r, image: pictures[r.name].image, imageSource: pictures[r.name].source }
      : { ...r });
    if (!p.noindex && p.rows.length < MIN_RANKING_ITEMS && !rankingCountExceptions[p.slug] && !LIVE_SLUGS.includes(p.slug)) {
      throw new Error(`${p.slug}: 공개 순위는 최소 ${MIN_RANKING_ITEMS}개가 필요합니다.`);
    }
    return p;
  });
}
