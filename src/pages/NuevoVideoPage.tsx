import Form from "../components/Form"




const NuevoVideoPage = () => {
  return (
    <section className="mb-16">
      <div className="text-center my-8 text-slate-100 md:my-16">
        <h1 className="uppercase font-black text-4xl mb-5 xl:text-6xl">nuevo video</h1>
        <p className="uppercase text-sm">Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <Form formTitle="crear tarjeta" titleColor="text-white" layout="horizontal"/>
    </section>
  )
}

export default NuevoVideoPage