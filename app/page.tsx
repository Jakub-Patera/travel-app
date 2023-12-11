import Hero from "./componnents/Hero";
import Camp from "./componnents/Camp";
import Features from "./componnents/Features";
import GetApp from "./componnents/GetApp";
import Slider from "./componnents/Slider";
import Guide from "./componnents/Guide";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
