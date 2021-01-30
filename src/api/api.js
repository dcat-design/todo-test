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
  // eslint-disable-next-line camelcase
  const created_date = new Date()
    .toISOString()
    .replace(/(\d{4}(-\d{2}){2})T(\d{2}:\d{2}).*/, '$1 $3');
  const withDate = { ...data, created_date };
  console.log('create', withDate);
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
