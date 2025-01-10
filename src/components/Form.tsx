import Button from './Button';

type FormProps = {
  formTitle: string
  titleColor?: string
  layout: string
}

function Form({formTitle, titleColor = "text-[#2271D1]", layout}: FormProps) {
  return (
    <>
      {/* <form className="max-w-xs md:max-w-lg xl:max-w-4xl mx-auto"> */}
      <form className={`max-w-xs md:max-w-lg ${layout === "horizontal" ? "md:max-w-3xl" : ""} mx-auto w-[90%]`}>
        <h2 className={`font-source-sans-3 capitalize font-black text-3xl text-center mb-10 ${titleColor} md:text-5xl`}>
          {formTitle}
        </h2>

        <div className={`grid grid-cols-1 ${layout === "horizontal" ? "md:grid-cols-2" : ""} gap-4`}>
          <div className="mb-5">
            <label
              htmlFor="titulo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Título
            </label>
            <input
              type="text"
              id="titulo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="¿qué es JavaScript?"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="categoria"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Categoría
            </label>
            <select
              id="categoria"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>frontend</option>
              <option>backend</option>
              <option>innovación y gestón</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="imagen"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Imagen
            </label>
            <input
              type="text"
              id="imagen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://www.google.com/url?sa=i&..."
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="video"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Video
            </label>
            <input
              type="text"
              id="video"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://www.youtube.com/url?sa=i.."
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripción
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="lorem ipsum blah blah blah"
            ></textarea>
          </div>

        </div>

        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 font-source-sans-3">
          <Button
            label="guardar"
            className="w-[180px] h-[54px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-4 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 uppercase"
          />
          <Button
            label="limpiar"
            className="w-[180px] h-[54px] py-2.5 px-4 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase"
          />
        </div>
      </form>
    </>
  );
}

export default Form;
