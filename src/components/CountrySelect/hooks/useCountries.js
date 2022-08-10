import { useEffect, useState } from 'react'
import countries from './countries.json'

export const useCountries = searchVal => {
  const [result, setResult] = useState([])

  useEffect(() => {
    if (!searchVal) {
      setResult(countries)
      return
    }
    const res = countries.filter(item =>
      item.country.toLowerCase().includes(searchVal.trim().toLowerCase()),
    )
    setResult(res)
  }, [searchVal])

  return { countries: result }
}

export default useCountries
