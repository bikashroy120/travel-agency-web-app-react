import React from 'react'
import { Footer, Hero, Navder,Memory } from './components'
import {hero,navlinks,memory} from './data/travigodata'

const App = () => {
  return (
    <>
      <Navder navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Footer />
    </>
  )
}

export default App