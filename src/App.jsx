import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Pricing from './Components/Pricing'
import Customer from './Components/Customer'
import Features from './Components/Features'
import Proof from './Components/Proof'


const App = () => {
  return (
    <div>
      <Home />
      <Proof />
      <Features />
      <Pricing />
      <Customer />
      <Form />
      <Footer />
    </div>
  )
}

export default App