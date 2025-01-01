// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
