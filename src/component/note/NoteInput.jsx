const NoteInput = ({ add }) => {
  const changeHandler = (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      if (e.target.value === "") return;
      add(e.target.value);
      e.target.value = "";
      e.target.focus();
    }
  };

  return (
    <input
      type="text"
      placeholder="여기에 메모를 입력하세요."
      onKeyUp={changeHandler}
    />
  );
};

export default NoteInput;
