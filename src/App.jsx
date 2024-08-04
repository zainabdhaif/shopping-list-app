// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

const App = () => {
  const items = [
    { name: 'Milk', purchased: true },
    { name: 'Bread', purchased: false },
    { name: 'Eggs', purchased: true},
  ];

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.purchased ? 'completed' : 'not-completed'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;