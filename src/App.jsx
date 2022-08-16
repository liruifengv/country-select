import React, { useState } from 'react'
import './App.css'
import { Button } from 'antd-mobile'
import { CountrySelect } from './components'

function App() {
  const [country, setCountry] = useState({ name: '' })
  const [showCountrySelect, setShowCountrySelect] = useState(false)

  const handleSelect = value => {
    setCountry(value)
    setShowCountrySelect(false)
  }
  return (
    <div className="App">
      <h1>React Country Seclect</h1>
      <div>如您使用web 端浏览器，请使用 devtools 切换到模拟移动端设备模式</div>
      <CountrySelect
        visible={showCountrySelect}
        onSelect={value => handleSelect(value)}
        onClose={() => setShowCountrySelect(false)}
      />
      <div className="card">
        <Button block color="primary" size="large" onClick={() => setShowCountrySelect(true)}>
          Seclect country
        </Button>
      </div>
      <h2>Your selected country is {country.name}</h2>
    </div>
  )
}

export default App
