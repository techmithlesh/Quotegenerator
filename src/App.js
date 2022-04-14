import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState([])

  useEffect(()=>{
   let data = async () => {
     let res = await axios.get("https://api.quotable.io/random/")
    //  console.log(res);

     setQuote(res.data)
   }
   data()
  },[])

function randomQuote(){
  let data = async () => {
    let res = await axios.get("https://api.quotable.io/random")
    setQuote(res.data)
  }
  data()
}
  return (
    <div className='container '>
      <div className='card text-center border border-primary'>
  <div className='card-header'>
   <h1>Randome Quote Generator</h1> 
  </div>
  <div className='card-body'>
    <h2 className='card-title'>{quote.author} </h2>
    <p className="card-text">{quote.content}</p>
    <button className='btn btn-primary' onClick={randomQuote}>New Quote</button>
  </div>

</div>
    </div>
  );
}

export default App;
