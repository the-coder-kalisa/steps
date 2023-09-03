import React from 'react'
import Header from './components/Header'
import Steps from './components/Steps'

const App = () => {
  return (
    <div>
      <Header />
      <Steps number={1} size={3}/>
    </div>
  )
}

export default App