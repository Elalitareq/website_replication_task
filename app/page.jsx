import HeroSection from "./components/heroSection";
import ServicesHomeSection from "./components/servicesHomeSection";
import InnovateSection from "./components/innovateSection";
import ContactSection from "./components/contactSection";
import FadeAnimator from "./components/fadeAnimator";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServicesHomeSection />

      <FadeAnimator y={0} x={-100}>
        <InnovateSection />
      </FadeAnimator>
      <ContactSection />
    </>
  );
}
