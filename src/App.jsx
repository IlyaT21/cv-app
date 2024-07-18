import { useState } from "react";
import "./App.scss";
import Info from "./components/general-info/Info.jsx";
import Experience from "./components/experience/Experience.jsx";
import Education from "./components/education/Education.jsx";
import Overview from "./components/overview/Overview.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Deer",
    email: "exmp@test.com",
    phone: "0213455667",
  });
  const [education, setEducation] = useState({
    name: "Iowa State",
    major: "Computer Science",
  });
  const [experience, setExperience] = useState({
    name: "Google",
    role: "Developer",
    description: "During my time at Google...",
  });

  return (
    <section className="body">
      <div className="column">
        <Info personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
      </div>
      <div className="column">
        <Overview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </section>
  );
}

export default App;
