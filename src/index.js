import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useClickBgColor } from './npms/hook/commonHook';
import {useClickBgColor } from '@djgundam/test-npm'

function App() {
  return (
    <>
    <h1>background test</h1>
    <button value="red" onClick={useClickBgColor}>
      red
    </button>
    <button value="blue" onClick={useClickBgColor}>
      blue
    </button>
    <button value="yellow" onClick={useClickBgColor}>
      yellow
    </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)