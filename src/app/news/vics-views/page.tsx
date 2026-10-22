import type { Metadata } from "next";
import { getVicIssues } from "@/data/vicsViews";
import VicsViewsHub from "./VicsViewsHub";

export const metadata: Metadata = {
  title: "Vic’s Views | YB",
  description:
    "Bite-sized reflections on technology, immersive media and what comes next, from Victor, Co-Founder and CTO of YB.",
};

export default function VicsViewsPage() {
  return <VicsViewsHub issues={getVicIssues()} />;
}
