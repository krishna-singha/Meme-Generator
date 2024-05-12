import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/Home'
import EditPage from './components/pages/Edit'
import './App.css'
import styles from './style'

function App() {

  return (
    <>
      <div className="App flex flex-col items-center">
        <h1 className={`${styles.heading} px-6 my-8 border-b-2 border-primary`}>Meme Generator</h1>
        <h2 className={`${styles.heading2} mb-4`}>Choose Template</h2>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/edit' element={<EditPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
