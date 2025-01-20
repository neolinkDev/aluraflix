


type ButtonProps = {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({label, className, onClick, type = "button"}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button