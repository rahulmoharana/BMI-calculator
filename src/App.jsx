import React, { useState } from "react";
import './App.css'

function App() {
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmi,setBmi]=useState()
  const[message,setMessage]=useState()
  let reload= ()=>{
    window.location.reload()
  }
  let calcbmi=(e)=>{
    e.preventDefault();
    if(weight==0||height==0){
      alert("Please enter a valid value");
    } else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
      if(bmi<25){
        setMessage('you are underweight');

      }else if(bmi>=25 && bmi <30){
        setMessage("you are a healthy weight")
      }
      else{
        setMessage("you are overweight")
      }
    }

  }
  return (

    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (ibs):</label>
            <input type="text" placeholder="Enter Your weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in):</label>
            <input type="text" placeholder="Enter Your height" value={height}  onChange={(e)=>setHeight(e.target.value)} />
          </div>
          <div className="button">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
