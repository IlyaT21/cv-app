import "./Info.scss";

function Info(personalInfo, setPersonalInfo) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  return (
    <div className="holder">
      <h2>Add Your Personal Information</h2>
      <div className="row">
        <div className="inputHolder">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Your first name here..."
            value={personalInfo.firstName}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
