import { create } from 'promise-modal'
import CountrySelect from './CountrySelect'

export const useCountrySelect = () => {
  const showCountrySelect = (data, options = {}) =>
    create(CountrySelect, data, { unmountDelay: 300, ...options })
  return showCountrySelect
}

export default useCountrySelect
