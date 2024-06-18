import { ArrowUpRight } from "lucide-react";

import { Section } from "./section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionLink } from "@/components/ui/action-link";

export function SendMessage() {
  return (
    <Section
      className="mb-10 lg:mb-16"
      title="Send Me a Message"
      text="Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly."
    >
      <div className="w-full">
        <form className="flex w-full flex-col gap-7 lg:gap-10" action="">
          <div className="grid gap-7 lg:gap-10 md:grid-cols-2">
            <div>
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="FIRST NAME" />
            </div>
            <div>
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="LAST NAME" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="EMAIL ADDRESS" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="phone" id="phone" placeholder="PHONE NUMBER" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Your Message</Label>
            <Input type="message" id="message" placeholder="MESSAGE" />
          </div>

          <button className="uppercase group text-2xl lg:text-4xl font-semibold border-b border-dark-12 flex gap-1.5 py-1.5 items-center self-start">
            Send Message{" "}
            <div className="inline-block  py-4 px-7 rounded-full bg-primary-55 shadow-primary group-hover:bg-primary-60 transition-colors duration-300 ease-in-out">
              <ArrowUpRight
                className="h-5 w-5 group-hover:scale-125 transition-all duration-200 ease-in-out"
                color="white"
              />
            </div>
          </button>
        </form>
      </div>
    </Section>
  );
}
