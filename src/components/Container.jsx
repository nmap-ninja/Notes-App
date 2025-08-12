import React, { useState } from "react";
import RightBox from "./RightBox";
import LeftBox from "./LeftBox";
import "./Container.css";

const NotesContainer = () => {
  const [noteData, setNoteData] = useState([
    // {
    //   title: "Friend Trip",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, cumque?",
    // },
    // {
    //   title: "Hello",
    //   desc: "sdfkjlfjksfjsdklj",
    // },
  ]);
  const [noteTitle, setNoteTitle] = useState();
  const [noteDesc, setNoteDesc] = useState();

  const SetNote = () => {
    let newNoteItem = { title: noteTitle, desc: noteDesc };
    let newNoteData = [...noteData, newNoteItem];
    setNoteData(newNoteData);
  };

  const onNoteTitle = (title) => {
    setNoteTitle(title.target.value);
  };
  const onNoteDesc = (desc) => {
    setNoteDesc(desc.target.value);
  };
  return (
    <div className="container">
      <RightBox
        NoteTitle={onNoteTitle}
        NoteDesc={onNoteDesc}
        SetNote={SetNote}
      />
      <LeftBox noteData={noteData} />
    </div>
  );
};

export default NotesContainer;
