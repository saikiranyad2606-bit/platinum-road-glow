import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { BUSINESS, FAQS } from "@/data/site";

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-border/60 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-platinum">FAQ</p>
            <h2
              id="faq-heading"
              className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-tight"
            >
              Good to <em className="italic text-platinum">know</em>.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Can&apos;t find your answer? Call{" "}
              <a
                href={BUSINESS.phoneHref}
                className="text-foreground underline underline-offset-4 hover:text-platinum"
              >
                {BUSINESS.phoneDisplay}
              </a>{" "}
              — happy to help.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border/60">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`} className="border-border/60">
                <AccordionTrigger className="py-6 text-left text-base font-medium text-foreground hover:text-platinum hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
