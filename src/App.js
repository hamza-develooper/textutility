import React, { useState } from "react";
import "./App.css";
// import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);


  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 2000);
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#131313";
      // showAlert('Dark mode has been enabled', "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      // showAlert('Light mode has been enabled', "success")
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Routes>

            <Route exact path="/" element={<TextForm mode={mode} heading="Enter the text to analyze" />} />

            <Route exact path="/about" element={<About mode={mode} />} />

            <Route exact path="/contact" element={<Contact mode={mode} />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
