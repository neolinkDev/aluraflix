import { useVideoContext } from "../context/videoContext";
import { categories } from "../constants/categories";

type PlayerImages = {
  jpg: string,
  avif: string,
}

type BannerProps = {
  playerImages: PlayerImages
 };

function Banner({playerImages}:BannerProps) {

  const { videos } = useVideoContext()
  // console.log(videos[videos.length - 1])

  const latestVideo = videos[videos.length - 1];
 
  if(!latestVideo){
    return (
      <section 
        className="bg-hero-image bg-no-repeat bg-cover bg-center sm:h-[444px] lg:h-[590px] xl:h-[600px] relative hidden sm:block mb-[106px]"
      > 
        <div className="absolute inset-0 bg-black/50 hidden sm:block">
          
          <div className="flex items-center gap-3 xl:gap-12 justify-center h-full lg:h-[670px] px-6">
  
            <div className="">
  
              <h2 className="inline-block py-3 mb-16 px-[77px] text-center text-3xl text-slate-100 bg-blue-500 font-extrabold rounded-[15px] xl:text-5xl">Front End</h2>
              <h3 className="text-3xl text-slate-100 xl:text-4xl">Challenge React</h3>
              <p className="w-[350px] md:w-[470px] text-slate-100 font-light text-lg/[21.09px]">
                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
              </p>
  
            </div>
  
            <div className="">
              <picture className="">
                <source srcSet={playerImages.avif} type="image/avif" />
                <img
                  src={playerImages.jpg}
                  alt="Imagen Player "
                  className="border-5 border-solid border-[#6BD1FF] rounded-2xl shadow-custom-inset w-[259px] md:w-[459px] md:mt-12 xl:mt-0 h-auto xl:w-[647px]"
                />
              </picture>
            </div>
  
          </div>
          
        </div>
      
      </section>
    );
  }

  // categoria del video
  const videoCategory = latestVideo.categoryValue;
  
  // Busca la categoría en el array
  const categoryData = categories.find(category => category.title === videoCategory);
  
  // si encuentra la categoria aplica el fondo correspondiente y si no aplica el color por default
  const bgColor = categoryData ? categoryData.bgTitle : '#6BD1FF';


  return (
    <section 
      className="bg-hero-image bg-no-repeat bg-cover bg-center sm:h-[444px] lg:h-[590px] xl:h-[600px] relative hidden sm:block mb-[106px]"
    > 
      <div className="absolute inset-0 bg-black/50 hidden sm:block">
        
        <div className="flex items-center gap-3 xl:gap-12 justify-center h-full lg:h-[670px] px-6">

          <div className="">

            <h2 
              style={{backgroundColor: bgColor}}
              className="inline-block py-3 mb-16 px-[77px] text-center text-2xl text-slate-100 font-extrabold rounded-[15px] xl:text-4xl uppercase"
            >
              {latestVideo.categoryValue}
            </h2>

            <h3 className="text-3xl text-slate-100 xl:text-4xl">Challenge React</h3>

            <p className="w-[350px] md:w-[470px] text-slate-100 font-light text-lg/[21.09px]">
              Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </p>

          </div>

          <div className="">
           
              <img
                src={latestVideo.imageValue}
                alt="Imagen Player"
                className="border-5 border-solid border-[#6BD1FF] rounded-2xl shadow-custom-inset w-[259px] md:w-[459px] md:mt-12 xl:mt-0 h-auto xl:w-[647px]"
              />
           
          </div>

        </div>
        
      </div>
    
    </section>
  );
  
  
  

}

export default Banner;
