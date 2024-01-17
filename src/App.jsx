import React, { useEffect } from 'react';
import { getNotes, addNotes, deleteNotes } from './components/service';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import './App.css';


function App() {
  const [state, setState] = React.useState('');

  async function uploadList() {
    const noteList = await getNotes();
    setState(noteList);
  };

  useEffect(() => {
    async function getResult() {
      uploadList();
    }
    getResult();
  }, []);

  async function handleAdd(value) {
    if (!value.trim()) return;
    await addNotes ({id: 0, content: value.trim()});
    uploadList();
  };

  async function handleDelete(id) {
    if (!id) return;
    await deleteNotes(id);
    uploadList();
  };

  async function handleUpdate() {
    uploadList();
  };

  return (
    <main className='main crud'>
      <Header onChange={handleUpdate} />
      <List state={state} onChange={handleDelete} />
      <Form onChange={handleAdd} />
    </main>
  );
};

export default App;
