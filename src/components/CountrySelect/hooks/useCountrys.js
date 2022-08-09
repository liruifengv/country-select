import { useEffect, useState } from 'react'
import countrys from './countrys.json'

export const useCountrys = searchVal => {
  const [result, setResult] = useState([])

  useEffect(() => {
    if (!searchVal) {
      setResult(countrys)
      return
    }
    const res = countrys.filter(item =>
      item.country.toLowerCase().includes(searchVal.toLowerCase()),
    )
    setResult(res)
  }, [searchVal])

  return { countrys: result }
}

export default useCountrys
