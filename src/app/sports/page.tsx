import SportsBuiltFor from "@/components/sports/SportsBuiltFor";
import SportsCapabilities from "@/components/sports/SportsCapabilities";
import SportsCTA from "@/components/sports/SportsCTA";
import SportsHero from "@/components/sports/SportsHero";
import SportsManifesto from "@/components/sports/SportsManifesto";
import SportsShowreel from "@/components/sports/SportsShowreel";
import SportsValue from "@/components/sports/SportsValue";

export default function SportsPage() {
  return (
    <>
      <SportsHero />
      <SportsManifesto />
      <SportsValue />
      <SportsShowreel />
      <SportsBuiltFor />
      <SportsCapabilities />
      <SportsCTA />
    </>
  );
}
