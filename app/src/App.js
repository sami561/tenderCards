import './App.css';
import { useState } from 'react';
import React from 'react';
import Header from './Header';
import SwipeButtons from './swipeButtons';
import TinderCards from './TinderCards';


function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="app">
{/* <h1> my count  is {count}</h1>
<button onClick={()=>setCount(count+1)}>add count </button> */}
{/* Header */}
<Header />

{/* TinderCards */}
<TinderCards />
<SwipeButtons />
{/* swipeButtons */}

  </div>  );
}


export default App;