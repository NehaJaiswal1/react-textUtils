
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-Dark Mode';
      // below code is not a good user experience , it can be used for just grabbing attention of user to download application or software in browser. So, it must be very disturbing for user.
      
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <>
    <Router>
       <Navbar title="TextUtils"  mode={mode} toggleMode ={toggleMode}/>
       <div className='container my-3'>
        <Alert alert={alert}/>
        <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
         
        </div>
        </Router>
    
     
       
     </>  
  );
}
 
export default App;
