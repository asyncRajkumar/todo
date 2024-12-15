import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [count, setcount] = useState([]);
  let data = (e) => {
    e.preventDefault();
    let value1 = e.target.todo.value;
    if(value1==''){
      alert("No No No")
    }
    else{
      if(!count.includes(value1)){
    let finalValue = [...count,value1];
    setcount(finalValue);
    e.target.todo.value = "";
      }
      else{
        alert("It is already exist")
      }
    }
  }

  // let obj={
  //   count,
  //   setcount
  // }

  return (
    <div>
      <div>
        <h1>Manage your Todo list</h1>
        <form onSubmit={data} >

          <input type='text' name='todo' placeholder='Enter your work' />
          <button>Submit</button>
        </form>
      </div>
      <div className='downPart'>
        <ul>
        {count.map((v,i)=>(
             <Todolist value={v} key={i} index = {i} count = {count} setCount = {setcount}/>
        ))}
         
        </ul>
      </div>
    </div>
  );
};
function Todolist({ value,count,setCount,index }) {
  console.log({value})
  console.log({index})
  let [done,setdone] = useState(false)
  const rejectIt = () => {
    const updatedCount = count.filter((_, i) => i !== index);
    setCount(updatedCount);
  };
  
  let ready=()=>{
    setdone(!done)
  }

  return (
    <li onClick={ready} className={`list ${done ? "line" : ""}`}>
      {value} <span onClick={rejectIt} >&times;</span>
    </li>
  );
}

export { App };
