import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [email,setEmail]= useState("");
  const [message, setMessage] =useState("");

  const emailValidation= () =>{
    const regExp =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(regExp.test(email)){
      setMessage("Email is valid")
    }else if(!regExp.test(email) && email ==! ""){
        setMessage
    }
  }
  const handeleOnChange=(e) => {
    setEmail(e.target.valve)
  }
  return (
    <div className="App">
      <div>
        <h2>Form validation</h2>
      </div>
      <div>
      <label htmlFor="">Name:</label>
        <input type="text" placeholder="Name"/>
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="email" value={email} 
        onChange={handeleOnChange}/>

        <button onClick={emailValidation}>log in</button>
      <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
