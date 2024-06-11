import Image from "next/image";
import Link from "next/link";

const NAVIGATION = [
  {
    title: "Home",
    items: [
      { title: "About me", href: "/" },
      { title: "My Works", href: "/" },
      { title: "Testimonials", href: "/" },
    ],
  },
  {
    title: "Clients",
    items: [
      { title: "Klovesto", href: "/" },
      { title: "Nukeway", href: "/" },
      { title: "Cloven’s", href: "/" },
      { title: "MenVol", href: "/" },
    ],
  },
  {
    title: "Portfolio",
    items: [
      { title: "Events", href: "/" },
      { title: "Portrait", href: "/" },
      { title: "Branding", href: "/" },
      { title: "Commercial", href: "/" },
      { title: "Wedding", href: "/" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Portraits", href: "/" },
      { title: "Events", href: "/" },
      { title: "Commercial ", href: "/" },
    ],
  },
];

export function Nav() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-6 mx-4 w-full lg:mx-0 py-10 lg:py-20 border-x lg:border-l-0 border-t lg:border-t-0 border-dark-12 lg:max-w-[60%] relative">
      {NAVIGATION.map((section) => (
        <div key={section.title}>
          <p className="uppercase text-grey-50 font-semibold mb-3">
            {section.title}
          </p>
          <ul className="grid gap-1">
            {section.items.map((item) => (
              <li key={item.title} className="py-2">
                <Link
                  href={item.href}
                  className="text-sm text-white border-b border-dark-20 py-2 uppercase font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Image
        width={201}
        height={200}
        className="rotate-180 hidden lg:block absolute right-[-201px] -translate-y-1/2 top-1/2"
        src="/figure1.svg"
        alt="Figure 1"
      />
    </div>
  );
}
