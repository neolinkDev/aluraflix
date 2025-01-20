import { useVideoContext, VideoCardData } from '../context/videoContext';
import Button from './Button';
import Form from './Form';

type EditFormModalProps = {
  toggleEditModal: () => void
}

function EditFormModal({toggleEditModal}:EditFormModalProps ) {

  const { currentVideo, editVideoCard } = useVideoContext();

  if (!currentVideo) return null;

  const handleEditVideo = (updatedVideo: VideoCardData) => {
    editVideoCard(currentVideo.id!, updatedVideo);
    toggleEditModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
      <section className="relative min-w-[350px] max-w-[974px] border-4 mx-auto w-[90%] max-h-[90vh] overflow-auto py-14 border-[#6BD1FF]">
        <Button
          className="absolute text-white text-3xl top-5 right-5 select-none"
          label="X"
          onClick={toggleEditModal}
        />

        <Form
          formTitle="editar card:"
          layout="vertical"
          onSubmit={handleEditVideo}
          initialValues={currentVideo}
          isModal={true}
          mode="editar"
        />
      </section>
    </div>
  );
}

export default EditFormModal;
