import type { NewsItem } from "./NewsGrid";

/** New entry for the existing /news expandable card grid. */
export const foxSportsXRNews: NewsItem = {
  id: "fox-sports-xr-2026",
  date: "22 OCTOBER 2026",
  title: "Live Sports Spotlight: Full-Season Immersive Sports Action on Fox Sports XR",
  image: "/media/news/foxnews.jpg",
  intro:
    "Throughout the year, YB has been powering a continuous lineup of premier live sports on Fox Sports XR. Streamed in full 3D and spatial video across Android XR devices (including Samsung Galaxy XR, soon XREAL Aura), we partner with Fox to bring the pulse of the crowd and real venue atmosphere of the stadium straight into your living room, giving fans front-row seats, interactive multiview, and real-time data overlays across NASCAR, IndyCar, MLB, top college games, and international events like the World Baseball Classic.",
  // The structured sections, schedule, and call to action are supplied
  // by FoxSportsXRArticle inside the existing NewsGrid article body.
  sections: [],
};
