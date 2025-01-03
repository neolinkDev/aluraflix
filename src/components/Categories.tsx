type CategoriesSection = {
  title: string;
  bgTitle: string;
};

type PropsCategories = {
  category: CategoriesSection;
};

// 24, 32,
function Categories({ category }: PropsCategories) {
  return (
    <section className="w-[90%] mx-auto mb-[93px] md:flex md:justify-center xl:justify-normal">
      <h3
        style={{ backgroundColor: category.bgTitle }}
        className="flex items-center justify-center w-[286px] md:w-[432px] h-[70px] text-slate-100 text-center text-[24px] md:text-[32px] font-extrabold uppercase rounded-[15px] mb-10"
      >
        {category.title}
      </h3>
      <div></div>
    </section>
  );
}

export default Categories;
