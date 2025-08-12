import React from "react";
import "./RightBox.css";

const RightBox = ({ NoteTitle, NoteDesc, SetNote }) => {
  return (
    <div className="rightBox">
      <div className="noteData">
        <div className="title">
          <label htmlFor="">Note Title</label>
          <input onChange={(event) => NoteTitle(event)} type="text" />
        </div>

        <div className="desc">
          <label htmlFor="">Description</label>
          <textarea
            onChange={(event) => NoteDesc(event)}
            name="desc"
            id="desc"
            rows={10}
            cols={50}
          ></textarea>
        </div>
        <button onClick={SetNote}>Add Note</button>
      </div>
    </div>
  );
};

export default RightBox;
