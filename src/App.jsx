import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Employees from './Employees'
import Sidebar from './Sidebar'

function App() {
  const[openTab, setOpenTab] = useState(true)
  const[isLeft,setIsLeft] = useState(true)

  function toggleTab(){
    setOpenTab(!openTab)
    setIsLeft(!isLeft)
    
  }

  return (
    <main className='bg-my-grey min-h-screen'>
      <div className='flex'>
        <Sidebar toggleTab = {toggleTab} openTab = {openTab} isLeft ={isLeft}/>

        {/* main page */}

        <div className='w-full col-span-3'>
          <Header/>
          <Employees/>

        </div>

      </div>
    </main>
  )
}

export default App
