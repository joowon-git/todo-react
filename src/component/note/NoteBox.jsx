import { useState } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBox = () => {
  const [noteList, setNoteList] = useState([]);
  // const newNote = {
  //   id: Date.now(),
  //   text,
  //   createdAt: new Date().toLocaleString(), // 작성 시간
  // };

  const addHandler = (text) => {
    console.log(`NoteBox Component - updateHandler ${text}`);

    const newNote = {
      id: Date.now(),
      text,
      createdAt: new Date().toLocaleString(), // 작성 시간
    };
    setNoteList([...noteList, newNote]);
  };

  const updateHandler = (note) => {
    setNoteList(
      noteList.map((item) =>
        item.id === note.id ? { ...item, text: note.text } : item
      )
    );
  };

  const deleteHandler = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  return (
    <>
      <h1>joowon Notes</h1>
      <NoteInput add={addHandler} />
      <NoteList
        noteList={noteList}
        update={updateHandler}
        deleteNote={deleteHandler}
      />
    </>
  );
};

export default NoteBox;
