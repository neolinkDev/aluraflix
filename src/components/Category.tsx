import { VideoCardData } from '../context/videoContext';

import VideoCard from './VideoCard';
type CategorySection = {
  title: string;
  bgTitle: string;
};

type PropsCategory = {
  category: CategorySection;
  videos: VideoCardData[]
  // children: React.ReactNode;
};

// 24, 32,
function Category({ category, videos }: PropsCategory) {

  // const { videos } = useVideoContext();
  // console.log(videos.length)

  return (
    <>
      {
        videos.length > 0 && <section className="max-w-screen-xl w-[90%] mx-auto mb-[93px] md:flex md:flex-col md:justify-center xl:justify-normal">

        <div className="md:flex md:justify-center xl:justify-start">
          <h3
            style={{ backgroundColor: category.bgTitle }}
            className="flex items-center justify-center w-[286px] md:w-[432px] h-[70px] text-slate-100 text-center text-[24px] md:text-[32px] font-extrabold uppercase rounded-[15px] mb-10"
          >
            {category.title}
          </h3>
  
        </div>
  
        <div className="flex justify- xl:justify-start gap-10 overflow-x-auto snap-mandatory pb-10">
          {
            videos.map((video) => 
            <VideoCard 
              key={video.id} 
              video={video} 
              bgTitle={category.bgTitle} 
            />
          )
          }
          
        </div>
  
      </section>
      }
      
    </>
  );
}

export default Category;
