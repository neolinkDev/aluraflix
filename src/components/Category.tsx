import { Link } from 'react-router-dom';
import type { Category } from '../constants/categories';
import type { Video } from '../services/api';
import Button from './Button';

interface CategoryProps {
  category: Category;
  videos: Video[];
  onDelete: (id: string) => void; 
}

export default function Category({ category, videos, onDelete }: CategoryProps) {
  
  return (
    <section className="max-w-screen-xl w-[90%] mx-auto mt-[93px] md:mt-0 mb-[93px] md:flex md:flex-col md:justify-center xl:justify-normal">
      <div className="md:flex md:justify-center xl:justify-start">
        <h3
          style={{ backgroundColor: category.color }}
          className="flex items-center justify-center w-[286px] md:w-[432px] h-[70px] text-slate-100 text-center text-[24px] md:text-[32px] font-extrabold uppercase rounded-[15px] mb-10"
        >
          {category.title}
        </h3>
      </div>

      <div className="flex justify- xl:justify-start gap-10 overflow-x-auto snap-mandatory pb-10">
        {
          videos.map((video) => (

            // TODO: esta parte se puede crear un componente 
            <div 
              key={video.id}
             className="w-[373.64px] h-[277.92px]"
            >
              <Link to={`/videos/${video.id}`}>
                <div className="w-[372.93px] h-[226.66px]">
                  <img
                    style={{ borderColor: category.color }}
                    className="w-[372.93px] h-[226.66px] border-[5px] rounded-tl-3xl rounded-tr-3xl"
                    src={video.imageURL}
                    alt="Imagen de videocard"
                  />
                </div>
              </Link>

              <div
                style={{ borderColor: category.color }}
                className="w-[372.77px] h-[51.27px] flex items-center justify-center gap-9 text-white uppercase font-extrabold bg-black border-r-[5px] border-l-[5px] border-b-[5px] rounded-bl-3xl rounded-br-3xl"
              >

                <Button  
                  onClick={() => onDelete(video.id!)}
                  label="BORRAR" 
                  className="hover:text-gray-300" 
                />
                
                <Link
                  to={`/editar/${video.id}`}
                  // className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  <Button
                    // onClick={()=>handleEdit(video.id!)}
                    label="EDITAR"
                    className="hover:text-gray-300"
                  />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}
