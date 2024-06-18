import { cn } from "@/lib/utils";

type SectionProps = {
  className?: string;
  title: string;
  text: string;
  children: React.ReactNode;
};

export function Section({ title, text, className, children }: SectionProps) {
  return (
    <section
      className={cn(
        "py-10 lg:py-16 mx-4 flex flex-col gap-10 lg:gap-16 lg:flex-row lg:mx-20",
        className
      )}
    >
      <div className="lg:max-w-[420px]">
        <h2 className="text-white font-semibold uppercase text-2xl lg:text-4xl mb-2 lg:mb-6">
          {title}
        </h2>
        <p className="text-grey-50 text-sm lg:text-base">{text}</p>
      </div>
      <div className="flex w-full">{children}</div>
    </section>
  );
}
