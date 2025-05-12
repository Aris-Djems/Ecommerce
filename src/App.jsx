import { useState } from 'react'
import './App.css'
import { Accueil } from './page/accueil'
import Header from './components/header'
import Footer from './components/footer'
import Article from './page/article'

function App() {

  return (
    <>
      <Header/>
      {/* <Accueil /> */}
      <Article />
      <Footer />
    </>
  )
}

export default App
