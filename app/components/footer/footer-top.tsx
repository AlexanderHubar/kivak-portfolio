import { ServiceMarquee } from "../services-marquee";

export function FooterTop() {
  return (
    <div className="flex flex-col">
      <h2 className="text-dark-15 text-7xl font-bold ml-4 text-right mr-3 lg:mr-20 mb-5">
        KIVAK
      </h2>
      <ServiceMarquee />
    </div>
  );
}
