import "./Info.scss";

function Info({ personalInfo, setPersonalInfo }) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  return (
    <div className="Info holder">
      <h2>Add Your Personal Information</h2>
      <div className="row">
        <div className="inputHolder">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Your first name here..."
            value={personalInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="inputHolder">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Your last name here..."
            value={personalInfo.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="inputHolder">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email here..."
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputHolder">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Your phone number here..."
            value={personalInfo.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
