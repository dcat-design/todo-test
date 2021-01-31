import CONFIG from '../../config';

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${CONFIG.serverUrl}/tasks`);

    if (response.status >= 400) {
      return {
        status: 'error',
        message: `Ошибка: ${response.statusText} (${response.status})`,
        code: response.status,
      };
    }

    const result = await response.json();
    return { status: 'ok', result };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

export const fetchTaskById = async (id) => {
  try {
    const response = await fetch(`${CONFIG.serverUrl}/tasks/${id}`);

    if (response.status >= 400) {
      return {
        status: 'error',
        message: `Ошибка: ${response.statusText} (${response.status})`,
        code: response.status,
      };
    }

    const result = await response.json();
    return { status: 'ok', result };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

export const createTask = async (data) => {
  // eslint-disable-next-line camelcase
  const created_date = new Date()
    .toISOString()
    .replace(/(\d{4}(-\d{2}){2})T(\d{2}:\d{2}).*/, '$1 $3');
  const withDate = { ...data, created_date };
  try {
    const response = await fetch(`${CONFIG.serverUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(withDate),
    });

    if (response.status >= 400) {
      return { status: 'error', message: `Ошибка: ${response.statusText} (${response.status})` };
    }

    const { id: result } = await response.json();
    return { status: 'ok', result };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

export const saveTask = async (data) => {
  try {
    const response = await fetch(`${CONFIG.serverUrl}/tasks/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status >= 400) {
      return { status: 'error', message: `Ошибка: ${response.statusText} (${response.status})` };
    }

    return { status: 'ok' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${CONFIG.serverUrl}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 400) {
      return { status: 'error', message: `Ошибка: ${response.statusText} (${response.status})` };
    }

    return { status: 'ok' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};
