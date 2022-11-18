//THIS PROGRAM IS TO SHOW HOW CAN WE CHANGE THE STATE IN CONTEXT API, GLOBALLY, USING useState HOOK, SO THAT STATE CAN CHANGE AT THE SAME TIME IN Component3 AND Component5.

import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
const UserContext = createContext();
const Count = 6;

function Global({ children }) {
  const [state, dispatch] = useState(Count);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <Global>
      <h1>Component1</h1>
      <Component2 />
    </Global>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const { state, increment } = useContext(UserContext);
  return (
    <>
      <h1>Component 3 </h1>
      {state}
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${state} again!`}</h2>
      <button
        onClick={() => {
          dispatch(state + 1);
        }}
      >
        Operation
      </button>
    </>
  );
}

ReactDOM.render(<Component1 />, document.getElementById("root"));
