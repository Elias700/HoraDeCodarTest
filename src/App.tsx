import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import ContadorIntervalo from './components/ContadorIntervalo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Greeting name={'ana'} age={22}/>
      <Counter />
      <TextInput />
      <ContadorIntervalo />
       
    </>
  )
}

export default App
