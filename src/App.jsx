import React from 'react'
import { Footer, Hero, Navder,Memory, Explor, Brand, Pricings } from './components'
import {hero,navlinks,memory,placesAPI,brands,pricingapi} from './data/travigodata'

const App = () => {
  return (
    <>
      <Navder navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explor placesAPI={placesAPI}/>
      <Brand brands={brands}/>
      <Pricings pricingapi={pricingapi}/>
      <Footer />
    </>
  )
}

export default App