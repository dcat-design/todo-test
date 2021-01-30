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
  console.log('create', data);
  const id = Promise.resolve(2);
  return id;
};

export const saveTask = async (data) => {
  console.log('save', data);
  // const id = Promise.resolve(data.id);
  return null;
};

export const deleteTask = async (id) => {
  console.log('delete', id);
  return null;
};
