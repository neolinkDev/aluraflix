

type AlertProps = {
  type: 'success' | 'error'
  message: string
  onClose?: () => void
}

const colors = {
  success: 'bg-green-100 border-green-400 text-green-700',
  error: 'bg-red-100 border-red-400 text-red-700'
}

export const Alert = ({ type, message, onClose }: AlertProps) => {

  return (
    <div className={`border ${colors[type]} px-4 py-3 rounded relative mt-4 mb-4 text-center`}>
      <span className="block sm:inline">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          ×
        </button>
      )}
    </div>
  )
}