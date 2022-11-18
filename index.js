//THIS PROGRAM IS TO SHOW HOW CAN WE USE useReducer HOOK.

import React, {createContext, useReducer} from "react";
import ReactDOM from "react-dom";

var count =6;
const reducer=(state,act)=>{ //act can be a value or an object
 
  if(act==="Increment"){
    return state+1;
  }
  else if (act==="Decrement"){
    return state-1;
  }
  else{
    return "N/A";
  }
}

function App(){
  const [status,dispatched]=useReducer(reducer,count) //count can be a value or an object
  return(
  <div>
  {status}
  <button onClick={()=>dispatched('Increment')}>+</button> {/*dispatched('Increment') will execute reducer(state,act) by using state=status & act='Increment', and result of executation of reducer(state,act)
  will update status variable.*/}
  <button onClick={()=>dispatched('Decrement')}>-</button>
  </div>)
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

