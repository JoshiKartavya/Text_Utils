import './App.css';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import React, { useState } from 'react';
import TextForm from "./componants/TextForm";
import About from "./componants/About";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
    </>
  );
}

export default App;
