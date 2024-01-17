const API_URL = 'https://luxuriant-light-periwinkle.glitch.me'; /* http://localhost:7070/notes */

const getNotes = async () => {
  try {
    const response = await fetch(`${API_URL}/notes`);
    if (response.ok) {
      const data = await response.text();
      const result = await JSON.parse(data);
      return result;
    } else {
      throw new Error();
    }
  } catch (error) {
    return error;
  }
};

const addNotes = async (value) => {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify(value),
    });
    if (response.ok) {
      return;
    } else {
      throw new Error();
    }
  } catch (error) {
    return error;
  }
};

const deleteNotes = async (id) => {
  try {
    const response = await fetch(`${API_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return;
    } else {
      throw new Error();
    }
  } catch (error) {
    return error;
  }
};

export {getNotes, addNotes, deleteNotes};
