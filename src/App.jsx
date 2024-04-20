import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Main } from './Main/Main'
import { Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <Container sx={{mt: '70px'}}>
        <Main />
      </Container>
      <Footer />
    </>
  )
}

export default App
