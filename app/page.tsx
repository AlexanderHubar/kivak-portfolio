import { About } from "./components/about";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Testimonials />
    </>
  );
}
