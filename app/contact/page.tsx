import { Testimonials } from "../components/testimonials/testimonials";
import { ContactInfo } from "./contact-info";
import { ContactHero } from "./hero";
import { SendMessage } from "./send-message";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <SendMessage />
      <Testimonials />
    </>
  );
}
