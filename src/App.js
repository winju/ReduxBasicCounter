import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, incrementby5, decrement} from './actions'

function App() {
  const counter = useSelector(state =>state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementby5())}>+5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h2>Logged In</h2> : ''}
    </div>
  );
}

export default App;
