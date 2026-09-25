import HomeDivisions from "@/components/sections/HomeDivisions";
import HomeHero from "@/components/sections/HomeHero";
import HomePartners from "@/components/sections/HomePartners";
import HomeProducts from "@/components/sections/HomeProducts";


export default function HomePage() {
  return (
    <>
      <HomeHero />

      <HomeDivisions />

      <HomeProducts />

      <HomePartners />
    </>
  );
}