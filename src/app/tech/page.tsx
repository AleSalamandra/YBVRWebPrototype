import TechCTA from "@/components/tech/TechCTA";
import TechFeatures from "@/components/tech/TechFeatures";
import TechHero from "@/components/tech/TechHero";
import TechManifesto from "@/components/tech/TechManifesto";


export default function TechPage() {
  return (
    <>
      <TechHero />
      <TechManifesto />
      <TechFeatures />
      <TechCTA />
    </>
  );
}
