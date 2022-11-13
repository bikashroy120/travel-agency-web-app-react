import React from 'react'
import { Footer, Hero, Navder } from './components'
import {hero} from './data/travigodata'

const App = () => {
  return (
    <>
      <Navder />
      <Hero hero={hero}/>
      <Footer />
    </>
  )
}

export default App