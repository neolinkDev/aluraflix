import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createVideo, getVideo, updateVideo, type Video } from '../services/api';
import Button from '../components/Button';
import { categories } from '../constants/categories';
import { Alert } from '../components/Alert';

export default function NuevoVideoPage() {

  const { id } = useParams();
  const navigate = useNavigate()

  const [formData, setFormData] = useState<Video>({
    title: '',
    category: '',
    imageURL: '',
    videoURL: '',
    description: '',
  });

  // state que maneja el envio del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);

  // state que se encarga de mostrar en pantalla si hubo error al crear/editar
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  // state que maneja los errores del formulario
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Scroll 
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  // Si hay un id, carga los datos del video en el state cuando se quiere editar
  useEffect(() => {

    if (id) {
      const loadVideo = async () => {
        try {
          const video = await getVideo(id)
          setFormData(video)
        } catch (error) {
          console.log(error)
          setIsSubmitting(true);
          setSubmissionError('No se pudieron cargar los datos del video')
        }
      }
      loadVideo()
    }else{
      setFormData({
        title: '',
        category: '',
        imageURL: '',
        videoURL: '',
        description: '',
      })
      setSubmissionError(null)
      setIsSubmitting(false);
      setErrors({});
    }
  }, [id])

  // Maneja el evento onChange de los inputs del formulario
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // desestructuramos la propiedad `target`
    const { name, value } = e.target;

    setFormData(
      { 
        ...formData, 
        [name]: value 
      }
    );
  };

  // contiene la lógica para válidar los inputs del form
  const validateInputs = (): boolean => {

    // objeto para guardar los errores
    const newErrors: { [key: string]: string } = {}

    if (!formData.title.trim()) newErrors.title = 'El campo es obligatorio';
    else if(formData.title.trim().length < 3) newErrors.title = 'Mínimo tres caracteres';

    if (!formData.category) newErrors.category = 'El campo es obligatorio';

    if (!formData.imageURL.trim()) newErrors.imageURL = 'El campo es obligatorio';
    else if(!/^(https?:\/\/.*\.(?:jpg|jpeg|png|gif|webp|svg))$/i.test(formData.imageURL)) newErrors.imageURL = 'La URL de la imagen no es válida';

    if (!formData.videoURL.trim()) newErrors.videoURL = 'El campo es obligatorio';
    else if(!/^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+(\?.*)?$/.test(formData.videoURL)) newErrors.videoURL = 'Ingresa una URL válida de YouTube embebida';

    if (!formData.description.trim()) newErrors.description = 'El campo es obligatorio';
    else if (formData.description.trim().length < 3 || formData.description.trim().length > 500) newErrors.description = 'Debe tener entre 3 y 255 caracteres';

    // agrega los errores al state
    setErrors(newErrors);

    // si no hay ningún error devuelve `true`
    return Object.keys(newErrors).length === 0
  }

  //
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    // se deshabilita el botón 
    setIsSubmitting(true);

    // limpia los errores que puede haber en el state
    setSubmissionError(null);

    try {
      if(id){
        await updateVideo(id, {...formData, id})
        alert('¡Video editado exitosamente!');
      }else {
        await createVideo(formData);
        alert('¡Video agregado exitosamente!');
      }
      navigate('/')

    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Submission failed')
    } finally {
      setIsSubmitting(false)
    }



    // console.log('pasó la validación');
    // setIsSubmitting(true);
  }

  return (
    <form 
      className="max-w-xs md:max-w-xl mx-auto my-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-slate-200 font-source-sans-3 capitalize font-black text-3xl text-center md:text-5xl">
        {id ? 'Editar card' : 'Crear card'}
      </h2>

      {
        submissionError && <Alert type="error" message={submissionError} />
      }

      <div className="grid gap-x-4 md:grid-cols-2 ">
        {/* Input Text 1 */}
        <div className="mb-4">
          <label
            htmlFor="input-1"
            className="block mb-2 text-sm font-medium text-white"
          >
            Título
          </label>
          <input
            type="text"
            id="input-1"
            className="block w-full p-2 border rounded-lg text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="¿Qué es JavaScript?"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
        </div>

        {/* Select */}
        <div className="mb-4">
          <label
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-white"
          >
            Categoría
          </label>
          <select
            id="select"
            className="block w-full p-2 border rounded-lg text-xs bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="" disabled defaultValue="" hidden>
              Seleccionar categoría
            </option>
            {categories.map((category, i) => (
              <option key={i} value={category.value}>
                {category.value}
              </option>
            ))}
          </select>
          {errors.category && <span className="text-red-500 text-sm">{errors.category}</span>}
        </div>

        {/* Input Text 2 */}
        <div className="mb-4">
          <label
            htmlFor="input-2"
            className="block mb-2 text-sm font-medium text-white"
          >
            Imagen
          </label>
          <input
            type="text"
            id="input-2"
            className="block w-full p-2 border rounded-lg text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://www.google.com/url?sa=i&..."
            name="imageURL"
            value={formData.imageURL}
            onChange={handleInputChange}
          />
          {errors.imageURL && <span className="text-red-500 text-sm">{errors.imageURL}</span>}
        </div>

        {/* Input Text 3 */}
        <div className="mb-4">
          <label
            htmlFor="input-3"
            className="block mb-2 text-sm font-medium text-white"
          >
            Video
          </label>
          <input
            type="text"
            id="input-3"
            className="block w-full p-2 border rounded-lg text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://www.youtube.com/embed/PztCEdIJITY?si=KwCA8wfZVmZQCYB_"
            name="videoURL"
            value={formData.videoURL}
            onChange={handleInputChange}
          />
           {errors.videoURL && <span className="text-red-500 text-sm">{errors.videoURL}</span>}
        </div>

        {/* Textarea */}
        <div className="mb-4 md:col-span-2">
          <label
            htmlFor="textarea"
            className="block mb-2 text-sm font-medium text-white"
          >
            Descripción
          </label>
          <textarea
            id="textarea"
            rows={4}
            className="block w-full p-2 border rounded-lg text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="lorem ipsum blah blah blah"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 font-source-sans-3 mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[180px] h-[54px] text-white font-medium rounded-lg text-xl px-4 py-2.5 uppercase ${
            isSubmitting
              ? 'bg-gray-400'
              : 'focus:ring-4 bg-purple-700 hover:bg-purple-800 focus:ring-purple-300'
          }`}
        >
          { id ? 'Actualizar' : 'Crear'}
        </button>

        <Button
          onClick={() =>
            setFormData({
              title: '',
              category: '',
              imageURL: '',
              videoURL: '',
              description: '',
            })
          }
          label="limpiar"
          className="w-[180px] h-[54px] py-2.5 px-4 text-xl font-medium focus:outline-none  rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 uppercase"
        />
      </div>
    </form>
  );
}
