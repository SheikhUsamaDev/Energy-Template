import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import TopNav from './components/TopNav'
import MainService from './components/MainService'
const App = () => {
  return (
    <>
      <TopNav/>
      <Header />
      <About />
      <Services />
      <MainService/>
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}

export default App

