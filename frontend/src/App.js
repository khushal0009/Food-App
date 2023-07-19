
// rafce=====>react arrow function component with export
 
  


import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Features from './Components/Bsics/Features'
import Steps from './Components/Bsics/Stpes'
import Contact from './Components/Bsics/Contact'
 

import Home  from './Components/Bsics/Home'



const App = () => {
  return (
    <>
    <Home />

     
   
    <Features />

    <Steps />

    <Contact />

   

    
    </>
  )
}

export default App