import React from 'react'
import { Footer, Hero, Navder } from './components'
import {hero,navlinks} from './data/travigodata'

const App = () => {
  return (
    <>
      <Navder navlinks={navlinks} />
      <Hero hero={hero}/>
      <Footer />
    </>
  )
}

export default App