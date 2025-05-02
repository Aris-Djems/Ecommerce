import { useState } from 'react'
import './App.css'
import { Accueil } from './page/accueil'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header/>
      <Accueil />
      <Footer />
    </>
  )
}

export default App
