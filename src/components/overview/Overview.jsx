import "./Overview.scss";

function Overview({ personalInfo, education, experience }) {
  return (
    <div className="Overview holder">
      <h2>
        {personalInfo.firstName} {personalInfo.lastName}
      </h2>
      <div className="row">
        <h4>{personalInfo.email}</h4>
        <h4>{personalInfo.phone}</h4>
      </div>
      <h3>Education</h3>
      <div className="row">
        <h4>{education.name}</h4>
        <h4>{education.major}</h4>
      </div>
      <h3>Work Experience</h3>
      <div>
        <h4>{experience.name}</h4>
        <h4>{experience.role}</h4>
      </div>
      <p>{experience.description}</p>
    </div>
  );
}

export default Overview;
