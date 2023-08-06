import React from 'react'
import Home from "./(user)/home/page"
import About from "./(user)/about/page"
import Skills from "./(user)/skills/page"
import Contact from "./(user)/contact/page"

export default function HomePage() {
  return (
    <>
      <Home text="Welcome to my portfolio!" />
      <About/>
      <Skills/>
      <Contact/>



     
    </>

  )
}
