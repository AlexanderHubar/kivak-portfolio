import Link from "next/link";
import { Socials } from "../socials";

export function FooterBottom() {
  return (
    <div className="text-grey-50 text-sm border-t border-dark-12 px-4 lg:px-20 py-5 lg:py-8 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
      <ul className="flex divide-x divide-dark-12 gap-2">
        <li>
          <Link className="hover:text-white" href="/">
            Terms & Conditions
          </Link>
        </li>
        <li className="pl-2 hover:text-white">
          <Link href="/">Privacy Policy</Link>
        </li>
      </ul>
      <span className="lg:order-3">
        © 2024 Artem Kivak Photography. All rights reserved.
      </span>

      <div className="lg:order-2">
        <Socials />
      </div>
    </div>
  );
}
