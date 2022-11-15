import React from 'react'
import { Footer, Hero, Navder,Memory, Explor, Brand, Pricings, Banner, Newslatter } from './components'
import {hero,navlinks,memory,placesAPI,brands,pricingapi,bannerAPI,footerAPI} from './data/travigodata'

const App = () => {
  return (
    <>
      <Navder navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explor placesAPI={placesAPI}/>
      <Brand brands={brands}/>
      <Pricings pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI}/>
      <Newslatter />
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App