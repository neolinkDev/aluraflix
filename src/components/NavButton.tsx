
interface NavButtonProps {
  label: string;
  className: string
  hasIcon?: boolean
  icon?: React.ReactNode
}

export default function NavButton({ label, className, hasIcon = false, icon }: NavButtonProps) {
  return (
    <button className={className}>
      {
        hasIcon ?
          (
            <>
              <span className="hidden sm:inline">{label}</span>
              <span className="inline sm:hidden">
                {icon}
              </span>
            </>
          ): (
            <span>{label}</span>
          )
      }
    </button>
  );
}
