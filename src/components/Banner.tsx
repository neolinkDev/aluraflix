type PlayerImages = {
  jpg: string;
  avif: string;
};

type BannerProps = {
  playerImages: PlayerImages;
};

export default function Banner({ playerImages }: BannerProps) {
  return (
    <section className="relative hidden md:block mb-[93px]">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">

         {/* Overlay oscuro (50% opacidad) */}
        <div className="absolute inset-0 bg-black/60 z-10" /> 

        <img
          src="/hero-image.webp"
          alt="Background image"
          className="w-full h-full object-cover "
        />

      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left space-y-4 lg:space-y-6">

            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
              Challenge React
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-200 font-light">
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>

          </div>

          {/* Imagen */}
          <div className="md:w-1/3 flex justify-center">
            <picture>
              <source srcSet={playerImages.avif} type="image/avif" />
              <img
                src={playerImages.jpg}
                alt="Contenido visual"
                className="w-48 h-48 md:w-64 md:h-52 lg:w-80 lg:h-60 object-contain"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
