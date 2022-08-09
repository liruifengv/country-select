import { useEffect } from 'react'
import countrys from './countrys.json'

export const useCountrys = () => {
  useEffect(() => {
    console.log('countrys:', countrys)
  }, [])

  return { countrys }
}

export default useCountrys
