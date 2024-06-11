import { Nav } from "./nav";
import { CallToAction } from "./call-to-action";
import { FooterBottom } from "./footer-bottom";
import { FooterTop } from "./footer-top";

export function Footer() {
  return (
    <footer className="overflow-hidden">
      <FooterTop />
      <div className="flex flex-col lg:flex-row lg:px-20 lg:justify-between">
        <CallToAction />
        <Nav />
      </div>
      <FooterBottom />
    </footer>
  );
}
