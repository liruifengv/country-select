import React from 'react'
import './App.css'
import { Button } from 'antd-mobile'
import { useCountrySelect } from './components/CountrySelect'

function App() {
  const showCountrySelect = useCountrySelect()

  const handleSelectCountry = async () => {
    const res = await showCountrySelect()
    console.log('res', res)
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
    </div>
  )
}

export default App
