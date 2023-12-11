import Hero from "./componnents/Hero";
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
