import { useState } from 'react';
import About from './components/About';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#093574';
      showAlert?.("Dark mode is enabled", "success"); // Optional chaining here
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert?.("Light mode is enabled", "success"); // Optional chaining here
    }
  }

  return (
    <><Router>
      <Navbar title="TextUtils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className='container my-3'>
        
          <Routes>
            <Route exact path='/about' element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Lower case to upper case, upper case to lower case, remove extra spaces" mode={mode} />} />
          </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;
