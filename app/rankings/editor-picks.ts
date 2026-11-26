import type { Pick } from "../../lib/trends";
import films from "../../data/rankings/netflix-korea-films-weekly.json";
import tv from "../../data/rankings/ott-content-weekly.json";
import boxOffice from "../../data/rankings/live/korea-box-office-2026.json";
import pcGames from "../../data/rankings/live/korea-pc-games-share.json";
import importCars from "../../data/rankings/live/korea-import-car-brands.json";

export const editorPicks: Pick[] = [
  [`${films.rows[0].titleKo || films.rows[0].title} · ${films.weekEnd} 주간 1위`, "이번 주 넷플릭스 영화 TOP 10", "주간", "netflix-korea-films-weekly"],
  [`${tv.rows[0].titleKo || tv.rows[0].title} · ${tv.weekEnd} 주간 1위`, "이번 주 넷플릭스 한국 TV TOP 10", "주간", "ott-content-weekly"],
  [`${boxOffice.rows[0].title} · ${boxOffice.checkedAt} 확인`, "2026년 국내 영화 흥행", "흥행", "korea-box-office-2026"],
  [`${pcGames.rows[0].name} · ${pcGames.date} 점유율 ${pcGames.rows[0].share}%`, "국내 인기 PC 게임 순위", "PC방", "korea-pc-games-share"],
  [`${importCars.month} 수입차 등록 순위`, "수입차 브랜드 등록 순위 TOP 10", "월간", "korea-import-car-brands"],
];
