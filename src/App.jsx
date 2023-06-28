import { useState } from 'react'
import './App.css'

function App() {

  const [isActive, setActive] = useState(false)

  const spin = () => {
    setActive(!isActive)
  }

  return (
    <>
      <div>
        <img src="https://pngimg.com/d/sloth_PNG2.png" alt="slot" className={isActive ? "logo flip" : "logo"} />
      </div>
      <div className="center">
        <button type='button' onClick={spin}>Spin!</button>
      </div>
    </>
  );
}

export default App
