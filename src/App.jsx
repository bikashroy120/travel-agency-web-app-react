import React from 'react'
import { Footer, Hero, Navder,Memory, Explor, Brand } from './components'
import {hero,navlinks,memory,placesAPI,brands} from './data/travigodata'

const App = () => {
  return (
    <>
      <Navder navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explor placesAPI={placesAPI}/>
      <Brand brands={brands}/>
      <Footer />
    </>
  )
}

export default App