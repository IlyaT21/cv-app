import { useState } from "react";
import "./App.css";
import Info from "./components/general-info/Info.jsx";

function App() {
  const [info, setinfo] = useState({
    firstName: "John",
    lastName: "Deer",
    email: "exmp@test.com",
    phone: "0213455667",
  });
  return (
    <>
      <Info></Info>
    </>
  );
}

export default App;
