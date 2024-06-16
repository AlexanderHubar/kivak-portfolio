import { About } from "./components/about";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Services } from "./components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
  );
}
