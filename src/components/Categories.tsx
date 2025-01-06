type CategoriesSection = {
  title: string;
  bgTitle: string;
};

type PropsCategories = {
  category: CategoriesSection;
  children: React.ReactNode;
};

// 24, 32,
function Categories({ category, children }: PropsCategories) {
  return (
    <section className="max-w-screen-xl w-[90%] mx-auto mb-[93px] md:flex md:flex-col md:justify-center xl:justify-normal">

      <div className="md:flex md:justify-center xl:justify-start">
        <h3
          style={{ backgroundColor: category.bgTitle }}
          className="flex items-center justify-center w-[286px] md:w-[432px] h-[70px] text-slate-100 text-center text-[24px] md:text-[32px] font-extrabold uppercase rounded-[15px] mb-10"
        >
          {category.title}
        </h3>

      </div>

      <div className="flex justify- xl:justify-start gap-10 overflow-x-auto snap-mandatory pb-10">
        {children}
      </div>

    </section>
  );
}

export default Categories;
