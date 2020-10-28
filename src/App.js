import React, { useState, useEffect } from 'react'
import data from './data'

import './App.css';

import Article from './Article';
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

function App() {
  //const [mode, setMode] = useState(false)
  const [mode, setMode] = useState('light-theme')

  // const toggleTheme = () => {
  //   setMode(!mode)
  // }

  const toggleTheme = () => {
    if (mode === 'light-theme') {
      setMode('dark-theme')
    } else {
      setMode('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = mode
  }, [mode])

  return (
    <div className="">
      <header>
        <div className='headerCenter'>
          <h1>Dark Mode</h1>
          { mode === 'light-theme' 
            ? <div onClick={toggleTheme}><RiMoonClearLine /></div>
            // <button className='btn' onClick={toggleTheme}>
            //     toggle
            // </button>
            : <div onClick={toggleTheme}><RiSunLine /></div>
          }
        </div>
      </header>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </div>
  );
}

export default App;
