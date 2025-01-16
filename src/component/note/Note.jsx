import { useState } from "react";

const Note = ({ note, update, deleteNote }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [text, setText] = useState(note.text);

  const noteUpdate = () => {
    setIsUpdate(!isUpdate);
    update({ ...note, text });
  };

  const deleteHandler = () => {
    setIsUpdate(!isUpdate);
    deleteNote(note.id);
  };

  if (isUpdate) {
    return (
      <>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={noteUpdate}>수정</button>
      </>
    );
  } else {
    return (
      <>
        <p>{note.text}</p>
        <p>Created: {note.createdAt}</p>
        <button onClick={noteUpdate}>수정</button>
        <button onClick={deleteHandler}>삭제</button>
      </>
    );
  }
};

export default Note;
