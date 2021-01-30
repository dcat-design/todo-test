export const fetchTasks = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  const tasksList = response.json();
  return tasksList;
};

export const fetchTask = async (id) => {
  const response = await fetch(`http://localhost:3000/tasks/${id}`);
  const task = response.json();
  return task;
};
