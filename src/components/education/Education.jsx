import "./Education.scss";

function Education({ education, setEducation }) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setEducation((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  return (
    <div className="Education holder">
      <h2>Add Your Education</h2>
      <div className="row">
        <div className="inputHolder">
          <label htmlFor="name">School Name</label>
          <input
            type="text"
            id="name"
            placeholder="School name here..."
            value={education.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputHolder">
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            placeholder="Your major here..."
            value={education.major}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
