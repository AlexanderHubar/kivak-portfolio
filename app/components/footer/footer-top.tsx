import Image from "next/image";
import Marquee from "react-fast-marquee";

const SERVICES = [
  "Event Photography",
  "Commercial Photography",
  "Product Photography",
  "Wedding Photography",
  "Landscape Photography",
  "Branding Photography",
  "Portrait  Photography",
];

export function FooterTop() {
  return (
    <div className="flex flex-col">
      <h2 className="text-dark-15 text-7xl font-bold ml-4 text-right mr-3 lg:mr-20 mb-5">
        ARTEM
      </h2>
      <Marquee pauseOnHover className="border-y border-dark-12 bg-dark-6 h-16">
        {SERVICES.map((service) => (
          <div className="flex gap-2.5 mx-2 lg:mx-8 items-center" key={service}>
            <Image src="/star.svg" width={30} height={30} alt="Star" />
            <span className="text-sm text-primary-90">{service}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
