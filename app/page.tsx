import Hero from "./componnents/Hero";
import Camp from "./componnents/Camp";
import Features from "./componnents/Features";
import GetApp from "./componnents/GetApp";
import Slider from "./componnents/Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Camp />
      <Features />
      <GetApp />
    </>
  );
}
