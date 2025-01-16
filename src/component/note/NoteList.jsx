import Note from "./Note";

const NoteList = ({ noteList, update, deleteNote }) => {
  return (
    <ul>
      {noteList.map((note) => (
        <li key={note.id}>
          <Note note={note} update={update} deleteNote={deleteNote} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
