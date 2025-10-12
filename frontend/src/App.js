import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        <h1>Welcome to ShoppingApp</h1>
        <p>This is a simple shopping application built with React and Bootstrap.</p>
      </Container>
    </main>
    </>
  )
}

export default App