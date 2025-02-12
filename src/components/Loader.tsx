export const Loader = () => {
  return (
    <div className="flex justify-center items-center mb-[93px]">
      <svg 
        className="w-12 h-12 text-yellow-300" 
        viewBox="0 0 100 50" 
        role="status"
        aria-label="Cargando..."
      >
        <circle fill="currentColor" cx="6" cy="25" r="6">
          <animateTransform 
            attributeName="transform" 
            dur="1s" 
            type="translate"
            values="0 -15; 0 15; 0 -15" 
            repeatCount="indefinite" 
            begin="0.1"
          />
        </circle>
        <circle fill="currentColor" cx="30" cy="25" r="6">
          <animateTransform 
            attributeName="transform" 
            dur="1s" 
            type="translate"
            values="0 -10; 0 10; 0 -10" 
            repeatCount="indefinite" 
            begin="0.2"
          />
        </circle>
        <circle fill="currentColor" cx="54" cy="25" r="6">
          <animateTransform 
            attributeName="transform" 
            dur="1s" 
            type="translate"
            values="0 -5; 0 5; 0 -5" 
            repeatCount="indefinite" 
            begin="0.3"
          />
        </circle>
      </svg>
    </div>
  );
};