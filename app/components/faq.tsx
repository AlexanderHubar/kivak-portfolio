import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What type of photography do you specialize in?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "How can I book a photography session with you?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "What equipment do you use for your photography?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "Can I request a specific location?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "What is your editing process like?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "Are digital files included in your photography packages?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "Do you offer prints of your photographs?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question:
      "How long does it take to receive the edited photos after a session?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto px-4 lg:px-20">
      <div className="mb-5 lg:mb-0 pb-5 lg:pb-10 border-b border-dark-12">
        <span className="text-sm lg:text-base text-grey-50 font-semibold uppercase">
          FAQ’s
        </span>
        <h2 className="text-2xl lg:text-5xl text-white font-semibold uppercase">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion
        className="mb-20 lg:grid lg:grid-cols-2"
        type="single"
        collapsible
      >
        {FAQS.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="uppercase">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
