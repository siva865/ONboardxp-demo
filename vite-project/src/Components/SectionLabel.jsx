
function SectionLabel({ children, number }) {
  return (
    <div className="flex w-fit items-center gap-3 sm:gap-4">

      <span className="text-[10px] font-medium tracking-[0.2em] text-[#c5a46d] sm:text-xs">
        {number}
      </span>

      <span className="whitespace-nowrap text-[9px] font-medium tracking-[0.2em] text-white/60 sm:text-[10px] sm:tracking-[0.25em]">
        {children}
      </span>

      <i className="h-px w-8 bg-[#c5a46d] sm:w-12" />

    </div>
  );
}

export default SectionLabel;
