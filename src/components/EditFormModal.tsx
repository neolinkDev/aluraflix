import Button from './Button';

type EditFormModalProps = {
  toggleEditModal: () => void
}

function EditFormModal({toggleEditModal}:EditFormModalProps ) {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90'>
      <section className='relative min-w-[360px] max-w-[974px] border-4 mx-auto w-[90%] max-h-[90vh] overflow-auto py-14 border-[#6BD1FF]'>

        <Button 
          className='absolute text-white text-3xl top-10 right-10 select-none'
          label='X'
          onClick={toggleEditModal} 
        />

        <h2 className='uppercase font-black text-3xl text-center mb-10 text-[#2271D1] md:text-6xl'>editar card:</h2>
        <form className="max-w-xs md:max-w-lg mx-auto">
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
      </section>
    </div>
  );
}

export default EditFormModal;
