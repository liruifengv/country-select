import React, { useState } from 'react'
import './App.css'
import { Button } from 'antd-mobile'
import { useCountrySelect } from './components'

function App() {
  const [country, setCountry] = useState('')
  const showCountrySelect = useCountrySelect()

  const handleSelectCountry = async () => {
    const res = await showCountrySelect()
    if (res && res.country) {
      setCountry(res.country)
    }
  }

  return (
    <div className="App">
      <h1>React Country Seclect</h1>
      <div>如您使用web 端浏览器，请使用 devtools 切换到模拟移动端设备模式</div>
      <div className="card">
        <Button block color="primary" size="large" onClick={handleSelectCountry}>
          Seclect country
        </Button>
      </div>
      <h2>Your selected country is {country.name}</h2>
    </div>
  )
}

export default App
