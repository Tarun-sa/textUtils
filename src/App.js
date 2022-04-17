
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);


  //to show  different type alert 
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }

  //  to remove class from body in order to apply diferent color plattele
  //  const removeBodyClass=()=>{
  //       document.body.classList.remove('bg-primary');
  //       document.body.classList.remove('bg-success');
  //       document.body.classList.remove('bg-warning');
  //       document.body.classList.remove('bg-danger');
  //       document.body.classList.remove('bg-light');
  //       document.body.classList.remove('bg-dark');
  //  }


  // To toggle from dark and light mode
  const toggleMode = (cls) => {
    // removeBodyClass();
    document.body.classList.add('bg-' + cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = '#2b1919';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} header="TextUtils- Word Counter,Character counter,Remove extra space" mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );

}

export default App;
