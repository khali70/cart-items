import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
/*
//TODO: the Redux strucher
# reducer > the function that used to update the store
>>take two arguments state, action 
# state   > the old state or the the state befor update 
# action  > what happend or what to update
>> return updaate or the old state 
*/

import { createStore } from "redux";
import reducer from "./components/Redux/reducer";
import { Provider } from "react-redux";
// ===============store===========================

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// =============== reducer ===========================

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
