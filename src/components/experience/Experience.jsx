import "./Experience.scss";

function Experience({ experience, setExperience }) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setExperience((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  return (
    <div className="Info holder">
      <h2>Add Your Experience</h2>
      <div className="row">
        <div className="inputHolder">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your first name here..."
            value={experience.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputHolder">
          <label htmlFor="lastName">Role</label>
          <input
            type="text"
            id="role"
            placeholder="Your role here..."
            value={experience.role}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="inputHolder">
        <label htmlFor="description">Write something about your work</label>
        <textarea
          type="description"
          id="description"
          placeholder="Your description here..."
          value={experience.description}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Experience;
