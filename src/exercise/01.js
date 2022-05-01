// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  const {amt} = state()
  const {type} = action
  switch (type) {
    case 'ADD': {
      return () => ({
        amt: amt + 1,
      })
    }
    case 'SUB': {
      return () => ({
        amt: amt - 1,
      })
    }
    default: {
      throw new Error('Invalid args passed to countReducer')
    }
  }
}

function Counter() {
  const [count, setCount] = React.useReducer(countReducer, () => ({
    amt: 0,
  }), (func) => func)
  const {amt} = count();
  return (
    <>
      <div>Increment</div>
      <div>
        <button onClick={() => setCount({type: 'ADD'})}>{amt}</button>
      </div>
      <div>Decrement</div>
      <div>
        <button onClick={() => setCount({type: 'SUB'})}>{amt}</button>
      </div>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
