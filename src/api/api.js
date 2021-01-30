export const fetchTasks = async () => {
  try {
    const response = await fetch('http://localhost:3000/tasks');
    const tasksList = response.json();
    return tasksList;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchTaskById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${id}`);
    const task = response.json();
    return task;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createTask = async (data) => {
  console.log(data);
  const id = Promise.resolve(2);
  return id;
};

export const saveTask = async (data) => {
  console.log(data);
  // const id = Promise.resolve(data.id);
  return null;
};
