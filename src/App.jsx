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
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/edit' element={<EditPage />} />
        </Routes>
        <div className="mt-10 border-t-2 border-gray-400 w-full flex justify-center py-6">
          <h3 className="font-mono font-bold">Developed by Krishna Singha</h3>
        </div>
      </div>
    </>
  )
}

export default App
