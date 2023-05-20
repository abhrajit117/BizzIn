import { useState, useEffect } from 'react'
import './App.css'

import Loading from './pages/loading/loading'
import Start from './pages/start/start.jsx'
import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'
const App = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        loading ?
          <Loading className='pac' size={15} loading={loading} />
          :
          <>
            {/* <Start /> */}
            <Login />
            <Home />
          </>
      }
    </>
  )
}

export default App



/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */

// MuiLinearProgress - bar MuiLinearProgress - barColorPrimary MuiLinearProgress - bar1Buffer css - qhoknl - MuiLinearProgress - bar1