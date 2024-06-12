type SectionHeaderProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function SectionHeader({
  title,
  subtitle,
  children,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between pb-5 border-b border-dark-12 mb-10 lg:items-center">
      <div>
        <span className="text-sm lg:text-base text-grey-50 font-semibold uppercase">
          {subtitle}
        </span>
        <h2 className="text-2xl lg:text-5xl text-white font-semibold uppercase">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}
