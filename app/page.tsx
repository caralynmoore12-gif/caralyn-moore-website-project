import MainNav from "@/components/layout/MainNav";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import IntroAnimation from "@/components/ui/IntroAnimation";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <MainNav />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
      </main>
    </>
  );
}
