import type { Pick } from "../../lib/trends";
import films from "../../data/rankings/netflix-korea-films-weekly.json";
import tv from "../../data/rankings/ott-content-weekly.json";
import boxOffice from "../../data/rankings/live/korea-box-office-2026.json";
import pcGames from "../../data/rankings/live/korea-pc-games-share.json";
import importCars from "../../data/rankings/live/korea-import-car-brands.json";

export const editorPicks: Pick[] = [
  ["챗GPT 2,551만 · 국내 앱 MAU", "한국인이 많이 쓰는 AI 앱 TOP 10", "AI", "korea-ai-app-users"],
  ["GTA VI 8회 · 후보 지명 기준", "2026 게임어워드 최다 후보 지명 게임 TOP 9", "TGA", "the-game-awards-nominations-2026"],
  ["오사카·후쿠오카·도쿄", "연말 해외여행 인기 도시 TOP 3", "연말", "year-end-travel-city-searches-2026"],
  ["가호·공부의 종말 · 서점별 비교", "이번 주 서점별 베스트셀러 비교", "도서", "weekly-bookstore-bestsellers"],
  ["최지훈 67억 · 계약 발표 4건", "2027 시즌 KBO FA 계약금액 순위", "FA", "kbo-fa-contracts-2027"],
  ["양의지 152억 · 단일 FA 계약 기준", "KBO 역대 FA 최고액 계약 TOP 20", "역대", "kbo-fa-contracts-all-time"],
  [`${films.rows[0].titleKo || films.rows[0].title} · ${films.weekEnd} 주간 1위`, "이번 주 넷플릭스 영화 TOP 10", "주간", "netflix-korea-films-weekly"],
  [`${tv.rows[0].titleKo || tv.rows[0].title} · ${tv.weekEnd} 주간 1위`, "이번 주 넷플릭스 한국 TV TOP 10", "주간", "ott-content-weekly"],
  [`${boxOffice.rows[0].title} · ${boxOffice.checkedAt} 확인`, "2026년 국내 영화 흥행", "흥행", "korea-box-office-2026"],
  [`${pcGames.rows[0].name} · ${pcGames.date} 점유율 ${pcGames.rows[0].share}%`, "국내 인기 PC 게임 순위", "PC방", "korea-pc-games-share"],
  [`${importCars.month} 수입차 등록 순위`, "수입차 브랜드 등록 순위 TOP 10", "월간", "korea-import-car-brands"],
];
