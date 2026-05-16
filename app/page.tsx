import MainNav from "@/components/layout/MainNav";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
      </main>
    </>
  );
}
