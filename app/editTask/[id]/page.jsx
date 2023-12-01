import EditTaskForm from '@/components/EditTaskForm'

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      cache: "no-cache",
    });

    if(!res.ok){
      throw new Error("Failed to fetch task.")
    }

    return res.json();
  } catch (error) {
    console.log(error)
  }
};

const EditTask = async ({ params }) => {
  const { id } = params;
  const { task } = await getTaskById(id);
  const { title, description } = task;

  return <EditTaskForm id={id} title={title} description={description} />;
}

export default EditTask;
