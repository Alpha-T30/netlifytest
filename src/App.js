 
import './App.css';
import axios from 'axios' ; 
import {useRef, useState} from 'react'; 
function App() {


  const numRef = useRef()
  const formRef = useRef()
  const [num,setNum]= useState(""); 

  console.log(num) ; 
  const handleClick =async (e) =>{
    e.preventDefault() ; 
    console.log(numRef.current.value)
   
    try {
      const res= await axios.post("https://nodeservertrt.herokuapp.com/api/square/",{num: numRef.current.value}) ; 
  setNum(res.data) ; 
  formRef.current.reset() ; 
 

      
    } catch (error) {
      console.log(error)
      
    }

  


  }


  return (
    <div className="App">
       
        <h3>The Square is : </h3>
        <h1>{num}</h1>
        
       
        <form ref={formRef} onSubmit={handleClick}>
          <label htmlFor="num">Input Your Number</label>
          <input ref={numRef} type="text" />
          <button type='submit'>SquareIt</button>
        </form>
          
         
      
    </div>
  );
}

export default App;
