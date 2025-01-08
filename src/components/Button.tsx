


type ButtonProps = {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({label, className, onClick}: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button