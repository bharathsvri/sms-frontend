import { useState } from 'react'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Form />
      </div>
    </>
  )
}

export default App
