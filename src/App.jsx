import React from 'react'
import './App.css'

function App() {
  const showModal = () => {
    console.log('showModal')
  }

  return (
    <div className="App">
      <h1>React Country Seclect</h1>
      <div className="card">
        <button type="button" aria-hidden="true" onClick={showModal}>
          Seclect country
        </button>
      </div>
    </div>
  )
}

export default App
