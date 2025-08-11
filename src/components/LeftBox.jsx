import "./LeftBox.css";

const LeftBox = ({ noteData }) => {
  return (
    <>
      <div className="leftBox">
        {noteData.map((note) => (
          <div key={note.title} className="notes">
            <h2>{note.title}</h2>
            <p>{note.desc}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftBox;
