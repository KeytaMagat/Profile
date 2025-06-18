import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'

function App() {

  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <>
      
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button onClick={handleClick}>Click Me</Button>
      </div>
    </>
  )
}

export default App
