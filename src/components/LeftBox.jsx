import "./LeftBox.css";

const LeftBox = ({ noteData, onDelete }) => {
  return (
    <>
      <div className="leftBox">
        {noteData.map((note) => (
          <div key={note.title} className="notes">
            <h2>{note.title}</h2>
            <p>{note.desc}</p>
            <button onClick={() => onDelete(note.title)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftBox;
