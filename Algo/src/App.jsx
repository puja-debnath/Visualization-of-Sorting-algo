import { useState } from 'react'
import './App.css'
import SortingVisualizer from './sortingVisualizer/SortingVisualizer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SortingVisualizer />
    </>
  )
}

export default App
