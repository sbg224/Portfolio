import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import DarkModeContext from './context/DarkModeContext'


function App() {
  const [couleur, setCouleur] = useState("light")

  return (
    <>
      <DarkModeContext.Provider value={{ couleur, setCouleur }} >
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </DarkModeContext.Provider>
    </>
  )
}

export default App
